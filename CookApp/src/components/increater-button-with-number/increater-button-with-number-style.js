import { StyleSheet } from 'react-native';

import { COLOR } from '../../utils/variables';

export default StyleSheet.create({
  container: { 
    flexDirection: 'row', 
    backgroundColor: COLOR.whiteColor, 
    height: 27, 
    width: 93, 
    borderWidth: 1, 
    borderColor: COLOR.borderAddCart, 
    borderRadius: 5 
  },
  substractSignImg: {
    width: 10, 
    height: 1
  },
  plusSignImg: {
    width: 12,
    height: 12
  },
  w30: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
  },
  countNumber: {
    lineHeight: 27,
    paddingHorizontal: 12,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderLeftColor: COLOR.borderAddCart,
    borderRightColor: COLOR.borderAddCart
  }
});