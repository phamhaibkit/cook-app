import { StyleSheet, Dimensions } from 'react-native';
import { CSS, COLOR } from '../../utils/variables';

const widthHori = 310;
const heightHori = 283;
const widthVer = Dimensions.get('window').width;
const heightVer = Dimensions.get('window').height;
const paddingContent = 10;

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'trs',
    borderRadius: 5,
    // marginTop: 15
    alignItems: 'center'
    // marginHorizontal: CSS.padding15
  },
  frame: {
    height: heightHori,
    width: widthHori,
    backgroundColor: 'white',
    marginLeft: CSS.padding15,
    borderRadius: 5
  },
  endFrame: {
    marginRight: CSS.padding15
  },
  frameVer: {
    // height: heightVer / 4,
    width: widthVer - 2 * CSS.padding15,
    backgroundColor: 'white',
    marginTop: CSS.padding15,
    // paddingBottom: 5,
    borderRadius: 5
  },
  containerTitle: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleView: {
    flex: 8,
    paddingHorizontal: paddingContent,
    paddingTop: 11
  },
  titleText: {
    fontFamily: CSS.fontTitle,
    fontSize: 14,
    lineHeight: 20,
    color: COLOR.blackColor,
    marginLeft: paddingContent,
    marginTop: 4
  },
  reportView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingHorizontal: paddingContent,
    paddingTop: 11
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
  imageView: {
    height: 140,
    marginTop: 15,
    marginHorizontal: paddingContent,
    borderRadius: 5,
    overflow: 'hidden'
  },
  imageVer: {
    height: 170,
    marginTop: 15,
    marginHorizontal: paddingContent,
    borderRadius: 5,
    overflow: 'hidden'
  },
  recipeIMG: {
    width: '100%',
    height: '100%'
  },
  dateView: {
    flexDirection: 'row',
    marginTop:10,
    alignItems: 'center',
    paddingHorizontal: paddingContent
  },
  dateImg:{
    width: 12,
    height: 12
  },
  dateText: {
    fontSize: 12,
    lineHeight: 18,
    color: COLOR.dateEvent,
    fontFamily: CSS.fontText
  },
  lineHori: {
    height: 1,
    backgroundColor: COLOR.lineHoriColor,
    marginTop: 10
  },
  containerLoveCmt: {
    flexDirection: 'row',
    padding: paddingContent
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

});
