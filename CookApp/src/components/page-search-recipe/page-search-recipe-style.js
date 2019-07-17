import { StyleSheet } from 'react-native';
import { COLOR, CSS } from '../../utils/variables';

const paddingHori = 15;
const marTop = 20;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  bestSellText: {
    color: '#888888',
    fontSize: 15,
    fontFamily: CSS.fontNutito,
    marginTop: marTop,
    marginLeft: paddingHori
  },

});
