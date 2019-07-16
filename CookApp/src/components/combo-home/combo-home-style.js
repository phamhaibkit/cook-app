import { StyleSheet } from 'react-native';
import { CSS, COLOR } from '../../utils/variables';

const widthCombo = 310;
const heightCombo = 235;
const imgHeghtCombo = 140;
const spaceImg = 4;
const widthImg = 290;
export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  frame: {
    height: heightCombo,
    // paddingHorizontal: CSS.padding10,
    fontSize: 18,
    width: widthCombo,
    marginLeft: CSS.padding15,
    borderRadius: 5
    // backgroundColor: COLOR.whiteColor
  },
  endFrame: {
    marginRight: CSS.padding15
  },
  containerWhite: {
    backgroundColor: COLOR.whiteColor,
    width: '100%',
    height: '100%',
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
    // backgroundColor: 'red'
  },
  container2Item: {
    paddingTop: 20
  },
  container2Img: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute'
    // top: -10
  },
  imgLeftView: {
    width: 123,
    height: imgHeghtCombo
  },
  imgRightView: {
    marginLeft: 4,
    width: 162,
    height: imgHeghtCombo
    // overflow: 'hidden'
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
  imgUp5: {
    width: 79,
    height: 70
  },
  imgDown3: {
    width: 162,
    height: 70,
    marginTop: 4
  },
  imgDown5: {
    width: 79,
    height: 70,
    marginTop: 4
  },
  imgRightUp5: {
    width: 80,
    height: 70,
    marginLeft: 4
  },
  imgRightDown5: {
    width: 80,
    height: 70,
    marginLeft: 4,
    marginTop: 4
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
    justifyContent: 'center'
  },
  lineLikeView: {
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center'
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
  img2RightView: {
    height: imgHeghtCombo,
    width: widthImg / 2 - spaceImg / 2,
    marginLeft: spaceImg
  },
  img4LeftUp: {
    height: imgHeghtCombo / 2 - spaceImg / 2,
    width: widthImg / 2 - spaceImg / 2
  },
  img4RighttUp: {
    height: imgHeghtCombo / 2 - spaceImg / 2,
    width: widthImg / 2 - spaceImg / 2,
    marginLeft: spaceImg
  },
  img4LeftDown: {
    marginTop: 4,
    height: imgHeghtCombo / 2 - spaceImg / 2,
    width: widthImg / 2 - spaceImg / 2
  }
});
