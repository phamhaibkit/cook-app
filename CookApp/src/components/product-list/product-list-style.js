import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get ('window').width;
const height = Dimensions.get ('window').height;
export default StyleSheet.create ({
  container: {
    flex: 1,
  },
  containerlabel: {
    paddingVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  frame: {
    height: 0.35 * height,
    // fontSize: 18,
    width: width / 2 + 30,
    // backgroundColor: 'lightblue',
    // marginLeft: 12,
    marginTop: 12,
    // borderColor: 'red',
    // borderWidth: 2
  },
  endFrame: {
    marginRight: 12,
  },
  containerTouch: {
    flex: 2,
    paddingLeft: 10,
  },
  containerDown: {
    flex: 1,
  },
  img: {
    flex: 3,
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
    bottom: -8,
    left: 10,
    flexDirection: 'row',
  },
  discount: {
    // paddingVertical: 3,
    paddingHorizontal: 5,
    backgroundColor: 'red',
    borderRadius: 4,
  },
  selling: {
    marginLeft: 5,
    paddingHorizontal: 5,
    backgroundColor: 'green',
    borderRadius: 4,
  },
  discountText: {
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  madeIn: {
    marginVertical: 5,
    fontSize: 12
  },
  titleView: {
    flex: 1,
    paddingTop: 15,
    // paddingHorizontal: 12
  },
  title:{
    fontWeight: 'bold'
  },
  containerDown: {
    paddingHorizontal: 10
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  newPrice:{
    color: 'red',
    fontSize: 16
  },
  oldPrice: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    marginLeft: 5
  },
  addCart: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4
  },
  addCartText: {
    color: 'green'
  }
});
