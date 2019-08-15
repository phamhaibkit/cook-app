import { StyleSheet, Dimensions } from 'react-native';
import { CSS, COLOR } from '../../utils/variables';

const height = 296;
const width = 310;
const paddingContent = 10;
const widthVer = Dimensions.get('window').width;


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginVertical: 20
  },
  frameVer: {
    // height: height + 2 * CSS.padding15,
    width: widthVer - 2 * CSS.padding15,
    marginVertical: CSS.padding10,
    borderRadius: 5
  },
  endFrameVer: {},
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
    width: widthVer - 2 * CSS.padding15 - 2 * CSS.padding10,
    height: 140 + 2 * CSS.padding15,
    marginTop: 18,
    marginHorizontal: paddingContent,
    borderRadius: 5,
    overflow: 'hidden'
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
  closeImg: {
    width: 19,
    height: 16
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
});

export default styles;
