import { StyleSheet } from 'react-native';
import { COLOR, CSS } from '../../utils/variables';

const widthImg = 200;
const heightImg = 120;
export default StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: COLOR.whiteColor,
    marginHorizontal: CSS.padding15,
    borderRadius: 10,
    paddingBottom: 20,
    marginTop: CSS.padding15
  },
  containerlabel: {
    paddingVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  frame: {
    height: 273,
    // fontSize: 18,
    width: 210,
    // marginLeft: 12,
    // borderColor: 'red',
    // borderWidth: 2,
    marginTop: 20
  },
  endFrame: {
    marginRight: CSS.padding10,
  },
  containerTouch: {
    // flex: 2,
    paddingLeft: CSS.padding10,
  },
  imgView: {
    width: widthImg,
    height: heightImg,
    overflow: 'hidden',
    borderRadius: 4
  },
  img: {
    width: widthImg,
    height: heightImg,
  },
  guarantImg: {
    backgroundColor: 'white',
    width: 26,
    height: 26,
    position: 'absolute',
    top: 10,
    right: 10,
    borderRadius: 13,
  },
  containerDiscount: {
    position: 'absolute',
    top: heightImg - 10,
    left: 20,
    flexDirection: 'row',
  },
  discount: {
    paddingHorizontal: 6,
    borderRadius: 10,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 3,
    backgroundColor: COLOR.redColor,
  },
  selling: {
    paddingHorizontal: 6,
    borderRadius: 10,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6,
    paddingBottom: 3,
    backgroundColor: COLOR.greenSelling,
  },
  discountText: {
    fontSize: 12,
    color: COLOR.whiteColor,
    fontFamily: CSS.fontTitle,
  },
  madeIn: {
    // marginVertical: 5,
    fontSize: 13,
    fontFamily: CSS.fontText,
    lineHeight: 18,
    color: COLOR.madeIn
  },
  titleView: {
    flex: 1,
    paddingTop: 15,
    // paddingHorizontal: 12
  },
  title:{
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: CSS.fontTitle,
    color: COLOR.blackColor
  },
  containerDown: {
    // paddingHorizontal: 10,
    marginTop: 20
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5
  },
  newPrice:{
    color: COLOR.redColor,
    fontSize: 18,
    fontFamily: CSS.fontTitle,
    lineHeight: 20
  },
  oldPrice: {
    fontSize: 15,
    textDecorationLine: 'line-through',
    marginBottom: 8,
    lineHeight: 20,
    color: COLOR.oldPrice
  },
  unitText: {
    fontSize: 10,
    fontFamily: CSS.fontText,
    color: '#767676',
    marginLeft: 5
  },
  addCart: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 200,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLOR.borderAddCart,
    marginLeft: 10
  },
  addCartText: {
    color: COLOR.addCartHome,
    fontFamily: CSS.fontText,
    fontSize: 15,
    alignSelf: 'center',
    marginBottom: 4
  }
});
