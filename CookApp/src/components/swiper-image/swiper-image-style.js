import { StyleSheet } from 'react-native';

const paginationBottom = 100;
const dotColor = 'rgb(225,255,255)';
const dotWidth = 6;

export default styles = StyleSheet.create({
  paginationStyle: {
    position: 'absolute',
    bottom: paginationBottom,
  },
  dotStyle: {
		width: dotWidth,
		height: dotWidth,
		backgroundColor: dotColor,
		borderRadius: dotWidth,
		opacity: 0.5,
  },
  activeDotStyle: {
		width: dotWidth,
		height: dotWidth,
		backgroundColor: dotColor,
		borderRadius: dotWidth,
		opacity: 1,
	},
  slideImg: {
    width: '100%'
  }
})
