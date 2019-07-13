import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default StyleSheet.create({
	container: {
		flex: 1
  },
  imgBgWrap: {
    width: 290,
    height: 190
  },
  blockMargin: {
    marginLeft: 15
  }
});
