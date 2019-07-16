import { StyleSheet, Dimensions } from 'react-native';

import { CSS, COLOR } from '../../utils/variables';

const { width } = Dimensions.get('window');
const containerPadding = 15;
const contentPadding = 10;
const overflowHeight = 90;

const basedRecipeFrameRation = 296 / 345;
const basedRecipeImgRatio =  141 / 323;
const frameWidth = width - containerPadding * 2;
const frameHeight = basedRecipeFrameRation * frameWidth;

const frameImgWidth = frameWidth - (contentPadding * 2);
const frameImgHeight = basedRecipeImgRatio * frameImgWidth;



export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.backgroundColor,
    borderRadius: 5,
    paddingHorizontal: CSS.padding15
  },
  comboDescriptionWrap: {
    position: 'absolute',
    zIndex: 1000,
    top: - overflowHeight,
    left: containerPadding,
    padding: 15,
    backgroundColor: COLOR.whiteColor,
    borderRadius: 5
  },
  comboTitle: {
    color: COLOR.blackColor,
    fontSize: 20,
    lineHeight: 20
  },
  comboDescription: {
    color: COLOR.blackColor,
    fontSize: 14,
    lineHeight: 1.714
  },
  topRecipes: {
    marginTop: overflowHeight
  },
  frame: {
    height: frameHeight,
    width: frameWidth,
    backgroundColor: 'white',
    marginTop: CSS.padding15,
    borderRadius: 5
  },
  endFrame: {
    marginBottom: CSS.padding15
  },
  containerTitle: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleView: {
    flex: 8,
    paddingHorizontal: contentPadding,
    paddingTop: 11
  },
  titleText: {
    fontFamily: CSS.fontTitle,
    fontSize: 14,
    lineHeight: 20,
    color: COLOR.blackColor
  },
  reportView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingHorizontal: contentPadding,
    paddingTop: 11
  },
  dotImg: {
    width: 13,
    height: 3,
    marginTop: 10
  },
  containerTimePrice: {
    flexDirection: 'row',
    paddingHorizontal: contentPadding,
    marginTop: 5
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  lineView: {
    marginLeft: contentPadding,
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
    paddingLeft: contentPadding
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
  recipeView: {
    height: frameImgHeight,
    marginTop: 18,
    marginHorizontal: contentPadding,
    borderRadius: 5,
    overflow: 'hidden'
  },
  recipeIMG: {
    width: frameImgWidth,
    height: frameImgHeight
  },
  containerChef: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: -12,
    left: 25,
    height: 26,
    backgroundColor: COLOR.whiteColor,
    borderRadius: 20,
    paddingLeft: 3,
    paddingRight: contentPadding,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#ffeeee'
  },
  avataImg: {
    width: 20,
    height: 20,
    borderRadius: 10
  },
  rankImg: {
    width: 13,
    height: 12,
    marginLeft: 5,
    marginBottom: 3
  },
  nameChef: {
    fontFamily: CSS.fontTitle,
    fontSize: 12,
    color: COLOR.blackColor,
    marginLeft: 5
  },
  lineHori: {
    height: 1,
    backgroundColor: COLOR.lineHoriColor,
    marginTop: 10
  },
  containerLoveCmt: {
    flexDirection: 'row',
    padding: contentPadding
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
    position:'absolute',
    top: contentPadding,
    right: contentPadding
  },
  saveImg: {
    width: 19,
    height: 20
  }
});


