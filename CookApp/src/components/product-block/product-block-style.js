import { StyleSheet } from 'react-native';
import { COLOR, CSS } from '../../utils/variables';

export default StyleSheet.create({
  badgeStyle: {
    borderRadius: 7
  },
  badgeStyleRed: {
    backgroundColor: '#ee0000',
    width: 42,     
  },
  badgeStyleYellow: {
    backgroundColor: '#fecc4d'
  },
  badgeText: {
    color: COLOR.whiteColor,
    lineHeight: 12,
    fontFamily: 'Quicksand-Bold',
    fontSize: 12
  },
  discountBadgeContainer: {
    position: 'absolute', 
    bottom: -8, 
    left: 10,
  },  
  customCheckBox: {
    width: 22, 
    height: 22, 
    backgroundColor: COLOR.whiteColor,
    borderColor: COLOR.greenColor,
    borderWidth: 1, 
    borderRadius: 5, 
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 20,
    marginRight: 10
  },
  imgIngredientsWrap: {
    width: 98, 
    height: 60,
  },
  imgIngredients: {
    width: 100, 
    height: 60,
    borderRadius: 5,
    marginRight: 8,
  }, 
  img: {
    width: 20,
    height: 22
  },
  initialPrice: {
    fontSize: 15,
    textDecorationLine: 'line-through',
    marginBottom: 18,
    lineHeight: 20,
    color: COLOR.oldPrice
  },
  subIngredient: {
    width: 55,
    marginRight: 7
  }
});