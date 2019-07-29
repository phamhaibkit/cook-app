import React, { Component } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SwiperImage from '../swiper-image/swiper-image';
import { COMBO_DETAIL } from '../../models/data';
import { StyleSheet } from 'react-native';
import { CSS, IMG, COLOR } from '../../utils/variables';
import { LANG } from '../../lang/lang';
import { LANG_VN } from '../../lang/lang-vn';
import { kFormatter, formatNumberWithDot } from '../../utils/general';
import homeService from '../../services/home.service';
import { LikeCommentShare } from '../like-comment-share/like-comment-share';
import LinearGradient from 'react-native-linear-gradient';
import IncreaterButtonWithoutNumber from '../increater-button-without-number/increater-button-without-number';

const recipeDataDetail = {
  "likeTimes": 53,
  "owner": {
    "name": "Trần Thị T",
    "rank": 13,
    "id": 7,
    "avatar": "https://photo-2-baomoi.zadn.vn/w1000_r1/2019_01_25_329_29473537/097a1d26bc6755390c76.jpg"
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
      ...homeService.homeData
    }
  }

  componentDidMount() {

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
    return (<View style={[styles.ownerStyles, CSS.flexRow, CSS.alignItemsCenter, CSS.justifySpaceBetween]}>
      <View style={styles.containerChef}>
        <Image style={styles.avataImg} source={{ uri: chef.owner && chef.owner.avatar }} />
        <View style={[styles.containerRank, CSS.lightBoxShadow]}>
          <Image source={IMG.rankHome} style={styles.rankImg} />
        </View>
      </View>
      <View style={[CSS.flexCol]}>
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
    return (<View style={[{ marginTop: -90, alignItems: 'center' }]}>
      <View style={[styles.recipeInfor, CSS.lightBoxShadow]}>
        <View style={[CSS.justifyContentCenter]}>
          <View style={CSS.pendingStatus}>
            <Text style={[CSS.pendingText, CSS.fontQuiMedium]}>
              {LANG_VN.PENDING}
            </Text>
          </View>
          <Text style={[CSS.fontQuiBold, styles.mgTop10, CSS.fontSize20, { color: '#001D12' }]}>Mì Udon Súp Miso và Thịt Heo</Text>
          <View style={[CSS.flexRow, styles.mgTop10]}>
            <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
              {this.renderStar(starNum)}
              <Text style={[CSS.fontQuiRegular, CSS.fontSize13, { color: '#000000', paddingLeft: 8, paddingRight: 11 }]}>
                {rateAmount} {LANG_VN.RATE}
              </Text>
              <Image style={styles.imageIcon} source={IMG.sandClokHome}></Image>
              <Text style={[CSS.fontQuiRegular, CSS.fontSize13, { color: '#000000', paddingLeft: 4 }]}>
                {minuteAmount} {LANG_VN.MINUTE}
              </Text>
            </View>
          </View>
          <Text style={[CSS.fontQuiRegular, styles.mgTop10, CSS.fontSize14, { color: '#001D12' }]}>
            Món mì udon được nấu cùng nước súp miso đậm đà, thanh nhẹ, cùng với điểm
            nhấn là thịt ba chỉ cay và hồng sâm Hàn Quốc sẽ khiến bạn bất ngờ vì hương vị độc đáo đấy ạ!
        </Text>
          <LikeCommentShare item={recipe} />
        </View>
      </View>
    </View>)
  }

  renderIngredient = () => {
    const price = 1000, amountOfPeople = 1;
    return (
      <View style={[styles.container]}>
        <View style={[CSS.flexRow, CSS.alignItemsCenter, CSS.justifySpaceBetween]}>
          <Text style={[{ color: '#444444' }, CSS.fontSize15, CSS.fontNuExBold]}>{LANG_VN.INGREDIENT}</Text>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={[{ padding: 10, borderRadius: 5 }]} colors={['#3BB556', '#72C91C']} >
            <TouchableOpacity style={[CSS.alignItemsCenter, CSS.justifyContentCenter]} onPress={this.onPressSignin}>
              <Text style={[CSS.fontSize15, CSS.fontQuiBold, { color: '#FFFFFF' }]}>{LANG_VN.BUY_INGREDIENT}</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={[{ paddingVertical: 20 }, styles.cardBorder]}>
          <View style={styles.cardWrap}>
            <View style={{ flex: 3, flexDirection: 'row' }}>
              <View style={{ flex: 3 }}>
                <Text style={[styles.cardLabel, CSS.fontQuiRegular]}>{LANG.MEAL}:</Text>
                <Text style={[styles.cardLabel, CSS.fontQuiRegular]}>{LANG.ESTIMATE_PRICE}:</Text>
              </View>
              <View style={{ flex: 2 }}>
                <Text style={[styles.cardLabel, CSS.fontQuiMedium]}>{amountOfPeople}{LANG.SPACE}{LANG.PERSON}</Text>
                <Text style={[styles.cardLabel, CSS.fontQuiMedium]}>{formatNumberWithDot(price)}{LANG.SPACE}{LANG.VIETNAM_DONG}</Text>
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

  render() {
    // let recipesDetail = this.state.data;
    const { imageHeader, rateAmount, starNum, minuteAmount } = this.state;

    console.log(this.state, 'imageHeader');
    return (
      <ScrollView>
        <SwiperImage height={300} listItems={imageHeader} />
        <View style={[styles.container]}>
          {this.renderInforRecipe(recipeDataDetail)}
          {this.renderOwner(recipeDataDetail)}
        </View>
        <View style={styles.horizontalFlash}></View>
        {this.renderIngredient()}
        <View style={styles.horizontalFlash}></View>
        <View style={[styles.container]}>
          <View style={[CSS.flexRow, CSS.alignItemsCenter, CSS.justifySpaceBetween]}>
            <Text style={[{ color: '#444444', textTransform: 'uppercase' }, CSS.fontSize15, CSS.fontNuExBold]}>{LANG_VN.STEP_ACTION}</Text>
            <View style={[CSS.flexRow, CSS.alignItemsCenter, CSS.justifyContentCenter]}>
              <Image style={styles.imageIcon} source={IMG.sandClokHome}></Image>
              <Text style={[CSS.fontQuiRegular, CSS.fontSize13, { color: '#000000', paddingLeft: 4 }]}>
                {minuteAmount} {LANG_VN.MINUTE}
              </Text>
            </View>
          </View>
          <View style={[styles.stepsSection]}>
            <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
              <Image style={{ height: 6, width: 6, marginRight: 5 }} source={IMG.greenCircle}></Image>
              <Text style={[CSS.fontSize14, CSS.fontQuiBold, styles.colorTextDark]}>Bước 1</Text>
            </View>
            <View style={styles.stepImages}>
              {
                imageHeader.map((item)=> {
                  return <Image source={{ uri: item }} style={{height: 82, width: 142}}></Image>
                })
              }
            </View>
          </View>
        </View>
      </ScrollView>
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
    marginLeft: 3,
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
  stepsSection: {
    flex: 1,
    marginTop: 22
  }
});