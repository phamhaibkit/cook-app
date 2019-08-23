import { StyleSheet, Dimensions } from 'react-native';
import { COLOR, CSS } from '../../utils/variables';

const { width } = Dimensions.get('window');

const widthFrame = (width - 3 * CSS.padding15) / 2
const widthImg = widthFrame - 2 * CSS.padding10;
const heightImg = widthImg / 2 + 15;
export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.backgroundColor,
  },
  containerlabel: {
    paddingVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  frame: {
    height: 288,
    backgroundColor: COLOR.whiteColor,
    width: widthFrame,
    marginLeft: CSS.padding15,
    marginTop: CSS.padding15,
    borderRadius: 10,
    padding: CSS.padding10,
  },
  endFrame: {
    marginBottom: CSS.padding15,
  },
  imgView: {
    width: widthImg,
    height: heightImg,
    overflow: 'hidden',
    borderRadius: 4,
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
    top: 15,
    right: 15,
    borderRadius: 13,
  },
  containerDiscount: {
    position: 'absolute',
    top: heightImg,
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
    fontSize: 13,
    fontFamily: CSS.fontText,
    lineHeight: 18,
    color: COLOR.madeIn
  },
  titleView: {
    marginTop: 12
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: CSS.fontTitle,
    color: COLOR.blackColor
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5
  },
  newPrice: {
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
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLOR.borderAddCart,
    position: 'absolute',
    bottom: CSS.padding10,
    left: CSS.padding10
  },
  quantityView: {
    position: 'absolute',
    bottom: CSS.padding10,
    left: CSS.padding10,
    width: '100%'
  },
  addCartText: {
    color: COLOR.greenColor,
    fontFamily: CSS.fontText,
    fontSize: 15,
    alignSelf: 'center',
    marginBottom: 4
  },
  adsView: {
    paddingHorizontal: CSS.padding15
  }
});
