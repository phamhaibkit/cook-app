import { StyleSheet, Dimensions } from 'react-native';

import { CSS, COLOR } from '../../utils/variables';

const height = 296;
const width = 310;
const paddingContent = 10;

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'trs',
    borderRadius: 5,
    marginTop: 15
    // marginHorizontal: CSS.padding15
  },
  frame: {
    height: height,
    width: width,
    backgroundColor: 'white',
    marginLeft: CSS.padding15,
    borderRadius: 5
  },
  endFrame: {
    marginRight: CSS.padding15
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
    color: COLOR.blackColor
  },
  reportView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingHorizontal: paddingContent,
    paddingTop: 11
  },
  dotImg: {
    width: 13,
    height: 3,
    marginTop: 10
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
  recipeView: {
    height: 140,
    marginTop: 18,
    marginHorizontal: paddingContent,
    borderRadius: 5,
    overflow: 'hidden'
  },
  recipeIMG: {
    width: '100%',
    height: '100%'
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
    paddingRight: paddingContent,
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
  saveView: {
    position:'absolute',
    top: paddingContent,
    right: paddingContent
  },
  saveImg: {
    width: 19,
    height: 20
  }
});


