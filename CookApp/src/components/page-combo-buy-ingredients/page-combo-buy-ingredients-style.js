import { StyleSheet } from 'react-native';
import { COLOR, CSS } from '../../utils/variables';

export default StyleSheet.create({
  paddingHorizontal15: {
    paddingHorizontal: 15
  },
  paddingVertical20: {
    paddingVertical: 20
  },
  backgroundWhite: {
    backgroundColor: 'white'
  },
  detailPage: {
    backgroundColor: '#f4f4f4',
  },
  IngredientSection: {
    backgroundColor: COLOR.whiteColor,
    paddingVertical: 20,
    marginBottom: 10
  },
  customCheckBox: {
    borderColor: COLOR.borderAddCart
  },
  tags: {
    marginLeft: 6,
    paddingVertical: 0,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: COLOR.borderAddCart
  }
});
