import React, { Component } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions, KeyboardAvoidingView, Animated, Keyboard } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as Progress from 'react-native-progress';

import LinearGradient from 'react-native-linear-gradient';
import SwiperImage from '../swiper-image/swiper-image';
import { COMBO_DETAIL } from '../../models/data';
import { StyleSheet } from 'react-native';
import { CSS, IMG, COLOR } from '../../utils/variables';
import { LANG } from '../../lang/lang';
import { LANG_VN } from '../../lang/lang-vn';
import { kFormatter, formatNumberWithDot } from '../../utils/general';
import homeService from '../../services/home.service';
import { LikeCommentShare } from '../like-comment-share/like-comment-share';
import IncreaterButtonWithoutNumber from '../increater-button-without-number/increater-button-without-number';
import StepRecipeDetail from './step-recipe-detail';
import ViewMoreHome from '../view-more-home/view-more-home';
import ImageProfile from '../image-profile/image-profile';
import TextInputRender from '../text-input/text-input';
import recipeService from '../../services/recipe.service';

const recipeDataDetail = {
  "likeTimes": 53,
  "owner": {
    "name": "Hoang Thi Kieu Nga",
    "rank": 13,
    "id": 7,
    "avatar": ""
  },

  "numberEvaluate": 28,
  "timeExecute": "150 phút",
  "recipeImage": "https://flyfood.vn/vnt_upload/product/11_2017/lau-vit-nau-chao-flyfood-10.png",
  "price": 100000,
  "name": "Vịt nấu chao",
  "numPeople": 2,
  "shareTimes": 52,
  "id": 6,
  "viewTimes": 100,
  "calo": 3000
}

const step = [
  {
    sliderImages: ["https://daubepgiadinh.vn/wp-content/uploads/2017/01/canh-chua-bong-dien-dien-600x400.jpg",
      "https://monngonmoingay.com/wp-content/uploads/2015/08/Ca-ro-kho-to-2.png",
      "https://i.cachnaumonan.com/wp-content/uploads/2018/07/cach-lam-goi-rau-cang-cua-thit-bo1.jpg",
      "https://navicdn.com/nakk/images_article/2019/03/13/cach-lam-sinh-to-bo-sua-chua-3.jpg"],
    description: 'Trứng gà luộc lòng đào trong vòng 7 phút. Thịt ba chỉ thái lát dài, ướp với 1 muỗng canh nước tương và tương ớt Hàn Quốc. Áp chảo thịt ba chỉ đến khi xém cạnh. '
  },
  {
    sliderImages: [],
    description: 'Trứng gà luộc lòng đào trong vòng 7 phút. '
  },
  {
    sliderImages: ["https://daubepgiadinh.vn/wp-content/uploads/2017/01/canh-chua-bong-dien-dien-600x400.jpg",
      "https://monngonmoingay.com/wp-content/uploads/2015/08/Ca-ro-kho-to-2.png",
      "https://i.cachnaumonan.com/wp-content/uploads/2018/07/cach-lam-goi-rau-cang-cua-thit-bo1.jpg",],
    description: 'Trứng gà luộc lòng đào trong vòng 7 phút. '
  },
  {
    sliderImages: ["https://daubepgiadinh.vn/wp-content/uploads/2017/01/canh-chua-bong-dien-dien-600x400.jpg",
      "https://monngonmoingay.com/wp-content/uploads/2015/08/Ca-ro-kho-to-2.png",],
    description: 'Trứng gà luộc lòng đào trong vòng 7 phút. '
  }
];

const rowCommentRate = [
  {
    "name": "Hoang Thi Kieu Nga",
    "rank": 13,
    "id": 7,
    "avatar": "",
    date: '26/7/2019',
    star: 3,
    comment: 'Mẹ mình rất thích món ăn mình nấu dựa trên công thức này. Cám ơn bạn nhiều.'
  },
  {
    "name": "Hoang Thi Kieu Nga",
    "rank": 13,
    "id": 7,
    "avatar": "https://photo-2-baomoi.zadn.vn/w1000_r1/2019_01_25_329_29473537/097a1d26bc6755390c76.jpg",
    date: '26/7/2019',
    star: 3,
    comment: 'Sau 1h lăn lộn, mình đã thành công rồi chủ thớt ơi, món ăn rất ngon và hợp khẩu vị gia đình mình, thanks chủ thớt nhiều.'
  },

]

const { height, width } = Dimensions.get('window');
export default class RecipeDetail extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  constructor(props) {
    super(props);
    this.state = {
      imageHeader: COMBO_DETAIL.sliderImages,
      starNum: 4,
      rateAmount: 20,
      minuteAmount: 60,
      activeImage: 0,
      ...homeService.homeData,
      comment: '',
      shift: new Animated.Value(0),
    }
  }

  componentWillMount() {
    this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
    this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
  }

  componentDidMount() {
    const id = 1;
    recipeService.getRecipeDetail(id).then(() => {
      
      let recipeDetail =  {...recipeService.recipeDetail};
      console.log(recipeDetail, 'recipeDetail');
      this.setState({
        recipeDetail,
      });
      // this.initData(data);
    });
  }

  componentWillUnmount() {
    this.keyboardDidShowSub.remove();
    this.keyboardDidHideSub.remove();
  }

  renderStar = (number) => {
    const star = [];

    for (let i = 1; i <= number; i++) {
      const starYellow = <Image key={i} style={styles.imageStar} source={IMG.starYellow}></Image>
      star.push(starYellow);
    }
    for (let j = number; j < 5; j++) {
      const starGray = <Image key={j + 1} style={styles.imageStar} source={IMG.starGrey}></Image>
      star.push(starGray);
    }

    return star.map(item => {
      return (item)
    })
  }

  renderOwner = (chef) => {
    console.log(chef, 'chef');
    return ( chef && chef.owner && <View style={[styles.ownerStyles, CSS.flexRow, CSS.alignItemsCenter, CSS.justifySpaceBetween]}>
      <View style={styles.containerChef}>
        <ImageProfile user={chef.owner} widthImage={56} />
        {/* <Image style={styles.avataImg} source={{ uri: chef.owner && chef.owner.avatar }} /> */}
        <View style={[styles.containerRank, CSS.lightBoxShadow]}>
          <Image source={IMG.rankHome} style={styles.rankImg} />
        </View>
      </View>
      <View style={[CSS.flexCol, { justifyContent: 'flex-start', alignItems: 'flex-start' }]}>
        <Text style={[CSS.fontSize15, CSS.fontQuiBold, { lineHeight: 22 }]}>{chef.owner.name}</Text>
        <Text style={[styles.textTime]}>{chef.recipeAmount || 0} <Text style={[styles.textLight]}>{LANG_VN.RECIPE} |
        </Text> {chef.followingAmount || 0} <Text style={[styles.textLight]}>{LANG_VN.FOLLOW}</Text></Text>
      </View>
      <TouchableOpacity style={CSS.buttonFollow}>
        <Text style={CSS.textFollow}>{LANG_VN.FOLLOW}</Text>
      </TouchableOpacity>
    </View>)
  }

  renderInforRecipe = (recipe) => {
    const { rateAmount, starNum, minuteAmount } = this.state;
    
    return (recipe && <View style={[{ marginTop: -90, alignItems: 'center' }]}>
      <View style={[styles.recipeInfor, CSS.lightBoxShadow]}>
        <View style={[CSS.justifyContentCenter]}>
          <View style={CSS.pendingStatus}>
            <Text style={[CSS.pendingText, CSS.fontQuiMedium]}>
              {LANG_VN.PENDING}
            </Text>
          </View>
          <Text style={[CSS.fontQuiBold, styles.mgTop10, CSS.fontSize20, { color: '#001D12' }]}>{recipe.name}</Text>
          <View style={[CSS.flexRow, styles.mgTop10]}>
            <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
              {this.renderStar(recipe.starNum || 0)}
              <Text style={[CSS.fontQuiRegular, CSS.fontSize13, { color: '#000000', paddingLeft: 8, paddingRight: 11 }]}>
                {rateAmount} {LANG_VN.RATE}
              </Text>
              <Image style={styles.imageIcon} source={IMG.sandClokHome}></Image>
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
    </View>)
  }

  renderIngredient = (recipe) => {
    const price = 1000, amountOfPeople = 1;
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
              <IncreaterButtonWithoutNumber isPlus={true} />
            </View>
          </View>
        </View>
        <View style={[styles.ingrdientList, CSS.flexCol]}>
          <View style={[styles.rowIngredient, CSS.justifySpaceBetween, CSS.flexRow]}>
            <Text style={[{ textDecorationLine: 'underline', color: COLOR.greenColor }, CSS.fontSize14, CSS.fontQuiMedium]}>Mì Udon</Text>
            <Text style={[CSS.fontSize14, CSS.fontQuiRegular, { color: '#001D12' }]}>200gram</Text>
          </View>
          <Image style={{ width: '100%', height: 1 }} source={IMG.borderDot}></Image>
          <View style={[styles.rowIngredient, CSS.justifySpaceBetween, CSS.flexRow]}>
            <Text style={[{ color: '#001D12' }, CSS.fontSize14, CSS.fontQuiMedium]}>Tuong miso</Text>
            <Text style={[CSS.fontSize14, CSS.fontQuiRegular, { color: '#001D12' }]}>1/2 muỗng canh</Text>
          </View>
          <Image style={{ width: '100%', height: 1 }} source={IMG.borderDot}></Image>
        </View>
      </View>
    )
  }

  renderStep = () => {
    const { activeImage, minuteAmount } = this.state;
    return <View style={[styles.container]}>
      <View style={[CSS.flexRow, CSS.alignItemsCenter, CSS.justifySpaceBetween]}>
        <Text style={[{ color: '#444444', textTransform: 'uppercase' }, CSS.fontSize15, CSS.fontNuExBold]}>{LANG_VN.STEP_ACTION}</Text>
        <View style={[CSS.flexRow, CSS.alignItemsCenter, CSS.justifyContentCenter]}>
          <Image style={styles.imageIcon} source={IMG.sandClokHome}></Image>
          <Text style={[CSS.fontQuiRegular, CSS.fontSize13, { color: '#000000', paddingLeft: 4 }]}>
            {minuteAmount} {LANG_VN.MINUTE}
          </Text>
        </View>
      </View>
      {step.map((item, index) => {
        const data = {
          stepNumber: index + 1,
          infor: item,
          lastChild: step.length - 1 === index,
        }
        return <StepRecipeDetail key={index} data={data}></StepRecipeDetail>
      })}
    </View>
  }

  renderProgress = () => {
    const progress = []
    for (let j = 5; j >= 1; j--) {
      const row = <View key={j} style={[CSS.flexRow, CSS.justifySpaceBetween, CSS.alignItemsCenter, styles.rowRate]}>
        <Text style={[CSS.fontQuiMedium, CSS.fontSize13, styles.colorTextDark]}>{j} </Text>
        <Image style={[styles.imageStar, { marginRight: 5 }]} source={IMG.starYellow}></Image>
        <Progress.Bar progress={0.3} borderColor={'white'} unfilledColor={'rgba(58, 191, 87, 0.1)'} width={160} color={'#3ABF57'} />
        <Text style={[CSS.fontQuiRegular, CSS.fontSize13, styles.colorTextDark]}> 85%</Text>
      </View>
      progress.push(row);
    }
    return progress
  }

  renderRate = () => {
    return <View style={[styles.container]}>
      <View style={[CSS.flexRow, CSS.alignItemsCenter, CSS.justifySpaceBetween]}>
        <Text style={[{ color: '#444444', textTransform: 'uppercase' }, CSS.fontSize15, CSS.fontNuExBold]}>{LANG_VN.RATE}</Text>
      </View>
      <View style={[styles.contentRate, CSS.flexRow, CSS.justifySpaceBetween]}>
        <View style={[styles.boxRate, CSS.alignItemsCenter, CSS.justifyContentCenter]}>
          <Text style={[CSS.fontSize30, CSS.fontQuiBold, styles.colorTextDark]}>4.7<Text style={[CSS.fontSize18, CSS.fontQuiLight]}>/ 5</Text></Text>
          <View style={[CSS.flexRow, CSS.alignItemsCenter, CSS.justifyContentCenter, { marginTop: 5, marginBottom: 10 }]}>
            {this.renderStar(3)}
          </View>
          <Text style={[CSS.fontQuiRegular, CSS.fontSize12, { color: '#767676' }]}>20 {LANG_VN.RATE}</Text>
        </View>
        <View style={[styles.detailRate]}>
          {this.renderProgress()}
        </View>
      </View>
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={[{ padding: 10, borderRadius: 5, marginTop: 30 }]} colors={['#3BB556', '#72C91C']} >
        <TouchableOpacity style={[CSS.alignItemsCenter, CSS.justifyContentCenter]} onPress={this.onPressSignin}>
          <Text style={[CSS.fontSize15, CSS.fontQuiBold, { color: '#FFFFFF' }]}>{LANG_VN.WRITE_COMMENT}</Text>
        </TouchableOpacity>
      </LinearGradient>
      <View style={[CSS.borderBottom, { marginTop: 22, marginBottom: -20 }]}></View>
      <View style={styles.commentRate}>
        <View style={{ marginRight: -15 }}>
          <ViewMoreHome type={''} viewMore={() => this.viewMore('')} />
        </View>
        {this.renderRowCommentRate()}
      </View>
    </View>
  }
  renderRowCommentRate = () => {
    return rowCommentRate.map((item, index) => {
      return <View key={index} style={[styles.rowCommentRate, index === rowCommentRate.length - 1 ? '' : CSS.borderBottom]}>
        <View style={[CSS.flexRow, { flex: 1 }]}>
          <ImageProfile user={item} widthImage={42}></ImageProfile>
          <View style={[CSS.flexCol, CSS.justifySpaceBetween, { flex: 1, paddingLeft: 10 }, styles.arrowLeft]}>
            <View style={[CSS.flexRow, CSS.justifySpaceBetween]}>
              <Text style={[CSS.fontQuiBold, CSS.fontSize14, { color: '#000' }]}>Louis Nguyễn</Text>
              <Text style={[CSS.fontQuiRegular, CSS.fontSize13, { color: '#767676' }]}>26/06/2019</Text>
            </View>
            <View style={[CSS.flexRow, CSS.alignItemsCenter, { paddingVertical: 8 }]}>
              {this.renderStar(3)}
            </View>
            <Text>Mẹ mình rất thích món ăn mình nấu dựa trên công thức này. Cám ơn bạn nhiều.</Text>
          </View>
        </View>
      </View>
    })
  }

  renderRowComment = () => {
    const { comment } = this.state
    return <View>
    {rowCommentRate.map((item, index) => {
      return <View key={index} style={[styles.rowCommentRate]}>
        <View style={[CSS.flexRow, { flex: 1 }]}>
          <ImageProfile user={item} widthImage={42}></ImageProfile>
          <Image resizeMode="contain" style={{ height: 20, width: 10, marginLeft: 10, marginRight: -2.5, marginTop: 8, zIndex: 1 }} source={IMG.num}></Image>
          <View style={[CSS.flexCol, CSS.justifySpaceBetween, styles.commentRow]}>
            <View style={[CSS.flexRow, CSS.justifySpaceBetween]}>
              <Text style={[CSS.fontQuiBold, CSS.fontSize14, { color: '#000' }]}>Louis Nguyễn</Text>
              <Text style={[CSS.fontQuiRegular, CSS.fontSize13, { color: '#767676' }]}>1 minutes</Text>
            </View>
            <Text style={{ marginTop: 10 }}>{item.comment}</Text>
          </View>
        </View>
      </View>
    })}
    <View style={[CSS.flexRow]}>
      <ImageProfile user={recipeDataDetail.owner} widthImage={42}></ImageProfile>
      <View style={{ flex: 1, marginLeft: 15 }}>
        <TextInputRender
          onChangeText={(value, err) =>
            this.onChangeText(value, err, "comment")
          }
          placeholder="Nhập bình luận"
          value={comment} />
      </View>
      <TouchableOpacity>
        <Text style={[CSS.fontQuiBold, CSS.fontSize15, { color: '#3ABF57', marginTop: 15, marginLeft: 5 }]}>Gửi</Text>
      </TouchableOpacity>
    </View>

  </View>

  }


  onChangeText = (value, err, type) => {
    this.setState({
      [type]: {
        value,
        err
      }
    });
  };


  render() {
    // let recipesDetail = this.state.data;
    const { imageHeader, recipeDetail } = this.state;
    console.log(this.state, 'imageHeader');
    return (
      <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={0}>
        <ScrollView>

          <SwiperImage height={300} listItems={imageHeader} />
          <View style={[styles.container]}>
            {this.renderInforRecipe(recipeDetail)}
            {this.renderOwner(recipeDetail)}
          </View>
          <View style={styles.horizontalFlash}></View>
          {this.renderIngredient(recipeDetail)}
          <View style={styles.horizontalFlash}></View>
          {this.renderStep()}
          <View style={styles.horizontalFlash}></View>
          {this.renderRate()}
          <View style={styles.horizontalFlash}></View>
          <ViewMoreHome type={LANG.COMMENT_PAGE} viewMore={() => this.viewMore('')} />
          <View style={styles.container}>
            {this.renderRowComment()}
            
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
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
    // position: 'absolute',
    width: 23,
    height: 23,
    bottom: 10,
    right: 10,
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
  rankImg: {
    width: 13,
    height: 12,
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