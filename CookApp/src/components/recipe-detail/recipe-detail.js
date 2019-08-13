import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, KeyboardAvoidingView, Keyboard, Platform, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import _ from 'lodash';

import LinearGradient from 'react-native-linear-gradient';
import SwiperImage from '../swiper-image/swiper-image';

import { CSS, IMG, COLOR } from '../../utils/variables';
import { LANG } from '../../lang/lang';
import { LANG_VN } from '../../lang/lang-vn';
import { formatNumberWithDot } from '../../utils/general';
import homeService from '../../services/home.service';
import LikeCommentShare from '../like-comment-share/like-comment-share';
import IncreaterButtonWithoutNumber from '../increater-button-without-number/increater-button-without-number';
import StepRecipeDetail from './step-recipe-detail';
import ViewMoreHome from '../view-more-home/view-more-home';
import ImageProfile from '../image-profile/image-profile';
import TextInputRender from '../text-input/text-input';
import recipeService from '../../services/recipe.service';

import { HeaderScroll } from '../dynamic-component/header-scroll/header-scroll';
import { ROUTES } from '../../utils/routes';
import navigationService from '../../services/navigation.service';
import RecipeHighlightHome from '../recipe-highlight-home/recipe-highlight-home';

const recipeDataDetail = {
  likeTimes: 53,
  owner: {
    name: 'Hoang Thi Kieu Nga',
    rank: 13,
    id: 7,
    avatar: ''
  },

  numberEvaluate: 28,
  timeExecute: '150 phút',
  recipeImage: 'https://flyfood.vn/vnt_upload/product/11_2017/lau-vit-nau-chao-flyfood-10.png',
  price: 100000,
  name: 'Vịt nấu chao',
  numPeople: 2,
  shareTimes: 52,
  id: 6,
  viewTimes: 100,
  calo: 3000
};

const { width } = Dimensions.get('window');
export default class RecipeDetail extends Component {
  static navigationOptions = {
    header: null
  };

  static propTypes = {
    // prop: PropTypes
  }

  constructor(props) {
    super(props);
    this.state = {
      recipeSuggest: recipeService.recipeSuggestData,
      recipeOther: recipeService.recipeOtherData,
      rateAmount: 20,
      ...homeService.homeData,
      comment: '',
    };
  }

  componentWillMount() {
    this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
    this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
  }

  componentDidMount() {
    const { navigation } = this.props;
    console.log(navigation, 'navigation');
    const id = navigation.getParam('id', 1);
    recipeService.getRecipeDetail(id).then(() => {
      const recipeDetail = { ...recipeService.recipeDetail };
      console.log(recipeDetail, 'recipeDetail');
      this.setState({
        recipeDetail,
      });
      // this.initData(data);
    });
    this.getSuggestRecipes(1);
    this.getOtherRecipes();
  }

  componentWillUnmount() {
    this.keyboardDidShowSub.remove();
    this.keyboardDidHideSub.remove();
  }

  getSuggestRecipes = (userId) => {
    recipeService.getRecipeSuggestList(userId).then(() => {
      this.setState({
        recipeSuggest: recipeService.recipeSuggestData
      });
    });
  }

  getOtherRecipes = () => {
    recipeService.getRecipeOtherList().then(() => {
      this.setState({
        recipeOther: recipeService.recipeOtherData
      });
    });
  }

  onPressWritingRate = () => {
    const { recipeDetail } = this.state;
    navigationService.navigate(ROUTES.recipeRating.key, { recipe: recipeDetail });
  }


  onChangeText = (value, err, type) => {
    this.setState({
      [type]: {
        value,
        err
      }
    });
  };


  renderStar = (number) => {
    const star = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= number; i++) {
      const starYellow = <Image key={i} style={styles.imageStar} source={IMG.starYellow} />;
      star.push(starYellow);
    }
    // eslint-disable-next-line no-plusplus
    for (let j = number; j < 5; j++) {
      const starGray = <Image key={j + 1} style={styles.imageStar} source={IMG.starGrey} />;
      star.push(starGray);
    }

    return star.map((item) => {
      return (item);
    });
  }

  renderOwner = (chef) => {
    console.log(chef, 'chef');
    return (chef && chef.owner && <View style={[styles.ownerStyles, CSS.flexRow, CSS.alignItemsCenter, CSS.justifySpaceBetween]}>
      <View style={styles.containerChef}>
        <ImageProfile user={chef.owner} widthImage={56} />
        {/* <Image style={styles.avataImg} source={{ uri: chef.owner && chef.owner.avatar }} /> */}
      </View>
      <View style={[CSS.flexCol, { justifyContent: 'flex-start', alignItems: 'flex-start' }]}>
        <Text style={[CSS.fontSize15, CSS.fontQuiBold, { lineHeight: 22 }]}>{chef.owner.name}</Text>
        <Text style={[styles.textTime]}>{chef.owner.numberRecipes || 0} <Text style={[styles.textLight]}>{LANG_VN.RECIPE} |
        </Text> {chef.owner.follower || 0} <Text style={[styles.textLight]}>{LANG_VN.FOLLOW}</Text></Text>
      </View>
      <TouchableOpacity style={CSS.buttonFollow}>
        <Text style={CSS.textFollow}>{LANG_VN.FOLLOW}</Text>
      </TouchableOpacity>
    </View>);
  }

  renderInforRecipe = (recipe) => {
    const { rateAmount } = this.state;
    const star = Math.round(_.get(recipe, 'evaluations.avgStar', 0));
    return (recipe && <View style={[{ marginTop: -90, alignItems: 'center' }]}>
      <View style={[styles.recipeInfor, CSS.lightBoxShadowItem]}>
        <View style={[CSS.justifyContentCenter]}>
          <View style={CSS.pendingStatus}>
            <Text style={[CSS.pendingText, CSS.fontQuiMedium]}>
              {LANG_VN.PENDING}
            </Text>
          </View>
          <Text style={[CSS.fontQuiBold, styles.mgTop10, CSS.fontSize20, { color: '#001D12' }]}>{recipe.name}</Text>
          <View style={[CSS.flexRow, styles.mgTop10]}>
            <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
              {this.renderStar(star || 0)}
              <Text style={[CSS.fontQuiRegular, CSS.fontSize13, { color: '#000000', paddingLeft: 8, paddingRight: 11 }]}>
                {rateAmount} {LANG_VN.RATE}
              </Text>
              <Image style={styles.imageIcon} source={IMG.sandClokHome} />
              <Text style={[CSS.fontQuiRegular, CSS.fontSize13, { color: '#000000', paddingLeft: 4 }]}>
                {/* {minuteAmount} {LANG_VN.MINUTE} */}
                {recipe.timeExecute}
              </Text>
            </View>
          </View>
          <Text style={[CSS.fontQuiRegular, styles.mgTop10, CSS.fontSize14, { color: '#001D12' }]}>
            {recipe.description}
          </Text>
          <LikeCommentShare item={recipe} />
        </View>
      </View>
    </View>);
  }

  renderIngredient = (recipe) => {
    return (
      recipe && <View style={[styles.container]}>
        <View style={[CSS.flexRow, CSS.alignItemsCenter, CSS.justifySpaceBetween]}>
          <Text style={[{ color: '#444444' }, CSS.fontSize15, CSS.fontNuExBold]}>{LANG_VN.INGREDIENT}</Text>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={[{ padding: 10, borderRadius: 5 }]} colors={['#3BB556', '#72C91C']} >
            <TouchableOpacity style={[CSS.alignItemsCenter, CSS.justifyContentCenter]} onPress={this.onPressSignin}>
              <Text style={[CSS.fontSize15, CSS.fontQuiBold, { color: '#FFFFFF' }]}>{LANG_VN.BUY_INGREDIENT}</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={[{ paddingVertical: 20 }]}>
          <View style={styles.cardWrap}>
            <View style={{ flex: 3, flexDirection: 'row' }}>
              <View style={{ flex: 3 }}>
                <Text style={[styles.cardLabel, CSS.fontQuiRegular]}>{LANG.MEAL}:</Text>
                <Text style={[styles.cardLabel, CSS.fontQuiRegular]}>{LANG.ESTIMATE_PRICE}:</Text>
              </View>
              <View style={{ flex: 2 }}>
                <Text style={[styles.cardLabel, CSS.fontQuiMedium]}>{recipe.numPeople}{LANG.SPACE}{LANG.PERSON}</Text>
                <Text style={[styles.cardLabel, CSS.fontQuiMedium]}>{formatNumberWithDot(recipe.price)}{LANG.SPACE}{LANG.VIETNAM_DONG}</Text>
              </View>
            </View>
            <View style={styles.actionBtnGroup}>
              <IncreaterButtonWithoutNumber btnStyle={{ marginRight: 5 }} />
              <IncreaterButtonWithoutNumber isPlus />
            </View>
          </View>
        </View>
        <View style={[styles.ingrdientList, CSS.flexCol]}>
          {recipe.products && recipe.products.map((item, index) => {
            return <View key={index}>
              <View style={[styles.rowIngredient, CSS.justifySpaceBetween, CSS.flexRow]}>
                <Text style={[{ textDecorationLine: 'underline', color: COLOR.greenColor, textTransform: 'capitalize' }, CSS.fontSize14, CSS.fontQuiMedium]}>{item.name}</Text>
                <Text style={[CSS.fontSize14, CSS.fontQuiRegular, { color: '#001D12' }]}>{item.unit}</Text>
              </View>
              <Image style={{ width: '100%', height: 1 }} source={IMG.borderDot} />
            </View>;
          })}
        </View>
      </View>
    );
  }

  renderStep = (recipe) => {
    return (recipe && recipe.steps && <View style={[styles.container]}>
      <View style={[CSS.flexRow, CSS.alignItemsCenter, CSS.justifySpaceBetween]}>
        <Text style={[{ color: '#444444', textTransform: 'uppercase' }, CSS.fontSize15, CSS.fontNuExBold]}>{LANG_VN.STEP_ACTION}</Text>
        <View style={[CSS.flexRow, CSS.alignItemsCenter, CSS.justifyContentCenter]}>
          <Image style={styles.imageIcon} source={IMG.sandClokHome} />
          <Text style={[CSS.fontQuiRegular, CSS.fontSize13, { color: '#000000', paddingLeft: 4 }]}>
            {recipe.timeExecute}
          </Text>
        </View>
      </View>
      {recipe.steps.map((item, index) => {
        const data = {
          stepNumber: index + 1,
          infor: item,
          lastChild: recipe.steps.length - 1 === index,
        };
        return <StepRecipeDetail key={index} data={data} />;
      })}
    </View>);
  }

  renderProgress = (starDetail) => {
    const progress = [];
    // eslint-disable-next-line no-plusplus
    for (let j = 0; j <= 4; j++) {
      const row = <View key={j} style={[CSS.flexRow, CSS.justifySpaceBetween, CSS.alignItemsCenter, styles.rowRate]}>
        <Text style={[CSS.fontQuiMedium, CSS.fontSize13, styles.colorTextDark]}>{5 - j} </Text>
        <Image style={[styles.imageStar, { marginRight: 5 }]} source={IMG.starYellow} />
        <Progress.Bar progress={starDetail[j] / 100} borderColor="white" unfilledColor="rgba(58, 191, 87, 0.1)" width={160} color="#3ABF57" />
        <Text style={[CSS.fontQuiRegular, CSS.fontSize13, styles.colorTextDark]}> {starDetail[j]}%</Text>
      </View>;
      progress.push(row);
    }
    return progress;
  }

  renderRate = (recipe) => {
    const arrayOfComment = _.get(recipe, 'evaluations.evaluationDetail', []);
    const starPercentArray = _.get(recipe, 'evaluations.starDetail', []);
    const commentNumber = _.get(recipe, 'evaluations.total', 0);
    const star = Math.round(_.get(recipe, 'evaluations.avgStar', 0));
    return recipe && <View style={[styles.container]}>
      <View style={[CSS.flexRow, CSS.alignItemsCenter, CSS.justifySpaceBetween]}>
        <Text style={[{ color: '#444444', textTransform: 'uppercase' }, CSS.fontSize15, CSS.fontNuExBold]}>{LANG_VN.RATE}</Text>
      </View>
      <View style={[styles.contentRate, CSS.flexRow, CSS.justifySpaceBetween]}>
        <View style={[styles.boxRate, CSS.alignItemsCenter, CSS.justifyContentCenter]}>
          <Text style={[CSS.fontSize30, CSS.fontQuiBold, styles.colorTextDark]}>4.7<Text style={[CSS.fontSize18, CSS.fontQuiLight]}>/ 5</Text></Text>
          <View style={[CSS.flexRow, CSS.alignItemsCenter, CSS.justifyContentCenter, { marginTop: 5, marginBottom: 10 }]}>
            {this.renderStar(star)}
          </View>
          <Text style={[CSS.fontQuiRegular, CSS.fontSize12, { color: '#767676' }]}>{commentNumber} {LANG_VN.RATE}</Text>
        </View>
        <View style={[styles.detailRate]}>
          {recipe && starPercentArray && this.renderProgress(starPercentArray)}
        </View>
      </View>
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={[{ padding: 10, borderRadius: 5, marginTop: 30 }]} colors={['#3BB556', '#72C91C']} >
        <TouchableOpacity style={[CSS.alignItemsCenter, CSS.justifyContentCenter]} onPress={this.onPressWritingRate}>
          <Text style={[CSS.fontSize15, CSS.fontQuiBold, { color: '#FFFFFF' }]}>{LANG_VN.WRITE_COMMENT}</Text>
        </TouchableOpacity>
      </LinearGradient>
      <View style={[CSS.borderBottom, { marginTop: 22, marginBottom: -20 }]} />
      <View style={styles.commentRate}>
        <View style={{ marginRight: -15 }}>
          <ViewMoreHome type="" viewMore={() => this.viewMore('viewRating')} />
        </View>
        {recipe.evaluations && this.renderRowCommentRate(arrayOfComment)}
      </View>
    </View>;
  }

  renderRowCommentRate = (evaluationDetail) => {
    return evaluationDetail.map((item, index) => {
      return <View key={index} style={[styles.rowCommentRate, index !== evaluationDetail.length - 1 ? CSS.borderBottom : {}]}>
        <View style={[CSS.flexRow, { flex: 1 }]}>
          <ImageProfile user={item} widthImage={42} />
          <View style={[CSS.flexCol, CSS.justifySpaceBetween, { flex: 1, paddingLeft: 10 }, styles.arrowLeft]}>
            <View style={[CSS.flexRow, CSS.justifySpaceBetween]}>
              <Text style={[CSS.fontQuiBold, CSS.fontSize14, { color: '#000' }]}>{item.evaluator}</Text>
              <Text style={[CSS.fontQuiRegular, CSS.fontSize13, { color: '#767676' }]}>{item.time}</Text>
            </View>
            <View style={[CSS.flexRow, CSS.alignItemsCenter, { paddingVertical: 8 }]}>
              {this.renderStar(item.star)}
            </View>
            <Text>{item.comment}</Text>
          </View>
        </View>
      </View>;
    });
  }

  renderRowComment = (recipe) => {
    const { comment } = this.state;
    const comments = _.get(recipe, 'comments', []);
    return <View>
      {comments.map((item, index) => {
        return <View key={index} style={[styles.rowCommentRate]}>
          <View style={[CSS.flexRow, { flex: 1 }]}>
            {item && <ImageProfile user={item} widthImage={42} />}
            <Image resizeMode="contain" style={{ height: 20, width: 10, marginLeft: 10, marginRight: -2.5, marginTop: 8, zIndex: 1 }} source={IMG.num} />
            <View style={[CSS.flexCol, CSS.justifySpaceBetween, styles.commentRow]}>
              <View style={[CSS.flexRow, CSS.justifySpaceBetween]}>
                <Text style={[CSS.fontQuiBold, CSS.fontSize14, { color: '#000' }]}>{item.commentator}</Text>
                <Text style={[CSS.fontQuiRegular, CSS.fontSize13, { color: '#767676' }]}>{item.time}</Text>
              </View>
              <Text style={{ marginTop: 10 }}>{item.comment}</Text>
            </View>
          </View>
        </View>;
      })}
      <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
        <ImageProfile noRating user={recipeDataDetail.owner} widthImage={50} />
        <View style={{ flex: 1, marginLeft: 15 }}>
          <TextInputRender
            onChangeText={(value, err) => this.onChangeText(value, err, 'comment')
            }
            noMargin
            placeholder="Nhập bình luận"
            value={comment} />
        </View>
        <TouchableOpacity>
          <Text style={[CSS.fontQuiBold, CSS.fontSize15, { color: '#3ABF57', marginLeft: 5 }]}>Gửi</Text>
        </TouchableOpacity>
      </View>

    </View>;
  }

  viewMore = (type) => {
    switch (type) {
    case LANG.OTHER_RECIPE:
      navigationService.navigate(ROUTES.recipeHighlightList.key);
      break;
    case LANG.RECIPE_MAYBE_LIKE:
      navigationService.navigate(ROUTES.recipeHighlightList.key);
      break;
    case 'viewRating':
      navigationService.navigate(ROUTES.viewRating.key);
      break;
    case 'viewComment':
      navigationService.navigate(ROUTES.viewComment.key);
      break;
    default:
    }
  };

  render() {
    // let recipesDetail = this.state.data;
    const { recipeDetail, recipeSuggest, recipeOther } = this.state;
    let padding = 0;
    if (Platform.OS !== 'ios') {
      padding = -500;
    }
    const recipeImg = _.get(recipeDetail, 'recipeImg', []);
    return (
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={padding}>
        <HeaderScroll haveMore haveCart recipe={recipeDetail}>
          <SwiperImage height={300} listItems={recipeImg} />
          <View style={[styles.container]}>
            {this.renderInforRecipe(recipeDetail)}
            {this.renderOwner(recipeDetail)}
          </View>
          <View style={styles.horizontalFlash}/>
          {this.renderIngredient(recipeDetail)}
          <View style={styles.horizontalFlash}/>
          {this.renderStep(recipeDetail)}
          <View style={styles.horizontalFlash}/>
          {this.renderRate(recipeDetail)}
          <View style={styles.horizontalFlash}/>
          <ViewMoreHome type={LANG.COMMENT_PAGE} viewMore={() => this.viewMore('viewComment')} />
          <View style={styles.container}>
            {this.renderRowComment(recipeDetail)}
          </View>
          <ViewMoreHome type={LANG.OTHER_RECIPE} viewMore={this.viewMore} />
          <RecipeHighlightHome
            recipes={recipeSuggest.recipes}
            isHorizontal
            marTop={CSS.padding15}
          />
          <ViewMoreHome type={LANG.RECIPE_MAYBE_LIKE} viewMore={this.viewMore} />
          <RecipeHighlightHome
            recipes={recipeOther.recipes}
            isHorizontal
            marTop={CSS.padding15}
          />
        </HeaderScroll>
      </KeyboardAvoidingView>
    );
  }
}
const paddingContent = 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  colorTextDark: {
    color: '#444444'
  },
  recipeInfor: {
    width: width - 30,
    borderRadius: 5,
    padding: 15,
    backgroundColor: '#ffffff'
  },
  imageStar: {
    width: 14,
    height: 14,
    marginRight: 1
  },
  mgTop10: {
    marginTop: 10
  },
  imageIcon: {
    width: 10,
    height: 10
  },
  containerTimePrice: {
    flexDirection: 'row',
    paddingHorizontal: paddingContent,
    marginTop: 5
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  lineView: {
    marginLeft: paddingContent,
    justifyContent: 'center'
  },
  lineLikeView: {
    marginLeft: 5,
    justifyContent: 'center'
  },
  line: {
    height: 11,
    width: 1,
    backgroundColor: COLOR.lineColor
  },
  dollaView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: paddingContent
  },
  likeView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 2
  },
  sandImg: {
    width: 9,
    height: 10
  },
  dollaImg: {
    width: 6,
    height: 12
  },
  personImg: {
    width: 10,
    height: 10
  },
  textTime: {
    fontSize: 13,
    fontFamily: CSS.fontText,
    color: COLOR.blackColor,
    letterSpacing: -0.5
  },
  textLight: {
    color: COLOR.madeIn
  },
  loveImg: {
    width: 23,
    height: 20
  },
  cmtImg: {
    width: 23,
    height: 20,
    marginLeft: 18
  },
  shareImg: {
    width: 24,
    height: 20,
    marginLeft: 18
  },
  saveView: {
    position: 'absolute',
    top: paddingContent,
    right: paddingContent
  },
  saveImg: {
    width: 19,
    height: 20
  },
  containerLoveCmt: {
    flexDirection: 'row',
    padding: paddingContent
  },
  ownerStyles: {
    marginTop: 27,
    flex: 1,
  },
  containerChef: {
    // position: 'absolute',
    flexDirection: 'row',
    width: 54,
    height: 54,
    borderRadius: 20,
    alignItems: 'center',
  },
  avataImg: {
    width: 54,
    height: 54,
    borderRadius: 27,
    position: 'relative'
  },
  avataComment: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  rankImg: {
    position: 'absolute',
    width: 17,
    height: 17,
  },
  nameChef: {
    fontFamily: CSS.fontTitle,
    fontSize: 12,
    color: COLOR.blackColor,
    marginLeft: 5
  },
  containerRank: {
    position: 'absolute',
    backgroundColor: COLOR.whiteColor,
    bottom: 0,
    right: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#FFFEEE'
  },
  horizontalFlash: {
    height: 10,
    flex: 1,
    backgroundColor: '#FAFAFA'
  },
  cardLabel: {
    color: COLOR.oldPrice,
    fontSize: 14
  },
  rightTextCheckbox: {
    fontSize: 14,
    color: COLOR.oldPrice
  },
  selectAll: {
    marginTop: 20,
    paddingLeft: 15
  },
  cardBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#CECECE',
  },
  customCheckBox: {
    width: 22,
    height: 22,
    backgroundColor: COLOR.whiteColor,
    borderColor: COLOR.greenColor,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLOR.greenColor,
    borderWidth: 1,
    backgroundColor: 'rgba(58, 191, 87, 0.1)',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 5
  },
  actionBtnGroup: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  rowIngredient: {
    paddingVertical: 15,
  },
  contentRate: {
    marginTop: 15
  },
  boxRate: {
    width: 110,
    height: 110,
    borderColor: '#E0E0E0',
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  detailRate: {
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  rowCommentRate: {
    paddingBottom: 15,
    paddingTop: 15
  },
  commentRow: {
    flex: 1,
    paddingLeft: 10,
    backgroundColor: '#FAFAFA',
    borderColor: '#E9E9E9',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});