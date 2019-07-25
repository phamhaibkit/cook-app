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
import { kFormatter } from '../../utils/general';
import homeService from '../../services/home.service';
import { LikeCommentShare } from '../like-comment-share/like-comment-share';

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
const {height, width} = Dimensions.get('window');
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

  renderStar = (number) => {
    const star = [];
    const starYellow = <Image style={styles.imageStar} source={IMG.starYellow}></Image>
    const starGray = <Image style={styles.imageStar} source={IMG.starGrey}></Image>
    for (let i = 1; i <= number; i++) {
      star.push(starYellow);
    }
    for (let j = number; j < 5; j++) {
      star.push(starGray);
    }

    console.log(star)

    return star.map(item => {
      console.log(item)
      return (item)
    })
  }

  render() {
    // let recipesDetail = this.state.data;
    const { imageHeader, rateAmount, starNum, minuteAmount } = this.state;
    console.log(this.state, 'imageHeader');
    return (
      <ScrollView>
        <SwiperImage height={300} listItems={imageHeader} />
        <View style={[styles.container, { position: 'relative', marginTop: -90, alignItems: 'center' }]}>
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
             
               <LikeCommentShare item={recipeDataDetail}/>
            </View>
          </View>
          <View>
            <Text>
              Follower
            </Text>
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
  },
  recipeInfor: {
    // position: 'absolute',
    // top: - 90,
    // left: 15,
    // right: 15,
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
});