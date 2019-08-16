import { StyleSheet, Dimensions } from 'react-native';
import { CSS, COLOR } from '../../utils/variables';

const widthVer = Dimensions.get('window').width;

const imageHeight = 140;
const imageWidth = widthVer - 2 * CSS.padding15 - 2 * CSS.padding10;
const imageRatio = imageWidth / imageHeight;
const paddingContent = 10;


const styles = StyleSheet.create({
  frameVer: {
    // height: height + 2 * CSS.padding15,
    flex: 1,
    width: widthVer - 2 * CSS.padding15,
    borderRadius: 5,
    padding: paddingContent,
    backgroundColor: COLOR.whiteColor
  },
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleView: {
    flex: 8,
  },
  titleText: {
    fontFamily: CSS.fontTitle,
    fontSize: 14,
    lineHeight: 20,
    color: COLOR.blackColor
  },
  reportView: {
    flex: 1,
    alignItems: 'center',
    alignItems: 'flex-end'
  },
  dotImg: {
    width: 13,
    height: 3,
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
    height: 10,
    marginTop: 3
  },
  calendarImg: {
    width: 11,
    height: 11,
    marginTop: 3
  },
  personImg: {
    width: 10,
    height: 10,
    marginTop: 3
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
  recipeIMG: {
    width: '100%',
    height: '100%'
  },
  imgVer: {
    width: imageWidth,
    height: imageWidth / imageRatio ,
    marginTop: 16,
    borderRadius: 5,
    overflow: 'hidden'
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0
  },
  containerModel: {
    width: '100%',
    height: '25%',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  barButton: {
    paddingVertical: 8,
    marginLeft: widthVer / 2 - 56 / 2,
    width: 56
  },
  modalImg: {
    width: 56,
    height: 4,
  },
  reportRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height:'50%',
    paddingLeft: 20
  },
  reportImg: {
    width: 19,
    height: 18
  },
  infoImg: {
    width: 8,
    height: 8,
    marginRight: 4
  },
  closeImg: {
    width: 19,
    height: 16,    
  },
  arrowRightImg: {
    width: 12,
    height: 7,
    marginLeft: 3
  },
  reportText: {
    fontFamily: CSS.fontText,
    fontSize: 14,
    color: COLOR.blackReport,
    marginLeft: 10,
    marginBottom: 3
  },
  lineReport: {
    height: 1,
    backgroundColor: COLOR.lineColor,
    width: '100%'
  },
  titleTxt: {
    fontFamily: CSS.fontTitle,
    fontSize: 14,
    color: '#444444',
    marginTop: 20,
    marginLeft: 15
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0
  },
  rejectLabel: {
    paddingVertical: 2.5,
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor:  '#F95E49'
  },
  rejectText: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 12,
    lineHeight: 13,
    color: COLOR.whiteColor
  }
});

export default styles;
