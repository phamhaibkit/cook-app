import { StyleSheet, Dimensions } from 'react-native';
import { CSS, COLOR } from '../../utils/variables';

const { width } = Dimensions.get('window');
const containerPadding = 15;
const blockPadding = 10;
const spaceImg = 4;
const heightCombo = 235;
const imgHeghtCombo = 140;

// Horizontal
const widthCombo = 310;
const widthImg = 290;

// Vertical
const widthComboVertical = width - containerPadding * 2;
const widthImgVertical = widthComboVertical - blockPadding * 2;

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  containerFluid: { 
    height: '100%', 
    width: '100%' 
  },
  frame: {   
    fontSize: 18,
    width: widthCombo,
    height: heightCombo,
    marginLeft: CSS.padding15,
    borderRadius: 5    
  },
  frameVertical: {
    marginLeft: 0,
    marginTop: CSS.padding15 ,
    width: widthComboVertical
  },
  endFrame: {
    marginRight: CSS.padding15
  },
  endFrameVertical: {
    marginRight: 0,
    marginTop: CSS.padding15 
  },
  containerWhite: {
    backgroundColor: COLOR.whiteColor,
    borderRadius: 5,
    paddingHorizontal: CSS.padding10
  },
  containerImg: {
    flex: 1,
    flexDirection: 'row',
    height: imgHeghtCombo,
    width: widthImg,
    marginHorizontal: 10,
    borderRadius: 5,
    overflow: 'hidden'
  },
  containerImgVertical: {
    width: widthImgVertical
  },
  container2Item: {
    paddingTop: 20
  },
  container2Img: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute'
  },
  imgLeftView: {
    width: 123,
    height: imgHeghtCombo
  },
  imgLeftViewVertical: {
    width: 123 * widthImgVertical / 290,
    height: imgHeghtCombo * widthImgVertical / 290
  },
  imgRightView: {
    marginLeft: 4,
    width: 162,
    height: imgHeghtCombo
  },
  imgRightViewVertical: {
    width: 162 * widthImgVertical / 290,
    height: imgHeghtCombo * widthImgVertical / 290
  },
  addImgView: {
    flexDirection: 'row',
    width: 163,
    height: 70
  },
  imgUp3: {
    width: 162,
    height: 70
  },
  imgUp3Ver: {
    width: 162 * widthImgVertical / 290
  },
  imgUp5: {
    width: 79,
    height: 70
  },
  imgUp5Ver: {
    width: 79 * widthImgVertical / 290
  },
  imgDown3: {
    width: 162,
    height: 70,
    marginTop: 4
  },
  imgDown3Ver: {
    width: 162 * widthImgVertical / 290
  },
  imgDown5: {
    width: 79,
    height: 70,
    marginTop: 4
  },
  imgDown5Ver: {
    width: 79 * widthImgVertical / 290
  },
  imgRightUp5: {
    width: 80,
    height: 70,
    marginLeft: 4
  },
  imgRightUp5Ver: {
    width: 80* widthImgVertical / 290
  },
  imgRightDown5: {
    width: 80,
    height: 70,
    marginLeft: 4,
    marginTop: 4
  },
  imgRightDown5Ver: {
    width: 80* widthImgVertical / 290
  },
  textTitle: {
    fontSize: 14,
    fontFamily: CSS.fontTitle,
    marginTop: imgHeghtCombo - 10,
    color: COLOR.blackColor,
    lineHeight: 20,
    letterSpacing: -0.5
  },
  lineHori: {
    height: 1,
    backgroundColor: COLOR.lineHoriColor,
    marginTop: 10
  },
  containerTimePrice: {
    flexDirection: 'row',
    marginTop: 5
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  likeView: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 2
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
  ordersText: {
    fontSize: 13,
    marginTop: 5,
    lineHeight: 18,
    fontFamily: CSS.fontText,
    color: COLOR.blackColor
  },
  img2LeftView: {
    height: imgHeghtCombo,
    width: 143
  },
  img2LeftViewVertical: {
    width: widthImgVertical / 2 - spaceImg / 2
  },
  img2RightView: {
    height: imgHeghtCombo,
    width: widthImg / 2 - spaceImg / 2,
    marginLeft: spaceImg
  },
  img2RightViewVertical: {
    width: widthImgVertical / 2 - spaceImg / 2
  },
  img4LeftUp: {
    height: imgHeghtCombo / 2 - spaceImg / 2,
    width: widthImg / 2 - spaceImg / 2
  },
  img4LeftUpVertical: {
    width: widthImgVertical / 2 - spaceImg / 2
  },
  img4RightUp: {
    height: imgHeghtCombo / 2 - spaceImg / 2,
    width: widthImg / 2 - spaceImg / 2,
    marginLeft: spaceImg
  },
  img4RightUpVertical: {
    width: widthImgVertical / 2 - spaceImg / 2
  },
  img4LeftDown: {
    marginTop: 4,
    height: imgHeghtCombo / 2 - spaceImg / 2,
    width: widthImg / 2 - spaceImg / 2
  },
  img4RightDown: {
    marginLeft: spaceImg
  },
  img4LeftDownVertical: {
    width: widthImgVertical / 2 - spaceImg / 2
  },
  img4RightDown: {
    marginLeft: spaceImg
  }
});
