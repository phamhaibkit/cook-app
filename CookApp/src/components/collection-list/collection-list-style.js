import { StyleSheet, Dimensions } from 'react-native';
import { COLOR } from '../../utils/variables';

const { width } = Dimensions.get('window');
const containerPadding = 15;
const blockPadding = 10;
const imageRatio = 0.65517;

const widthAfterCalculate = width - 2 * (containerPadding + blockPadding);

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.backgroundColor,		
    flex: 1,
    paddingHorizontal: 15,
  },
  imgBgWrap: {
    width: widthAfterCalculate,
    height: widthAfterCalculate * imageRatio,
  },
  blockMargin: {
    marginTop: 15
  }
});


