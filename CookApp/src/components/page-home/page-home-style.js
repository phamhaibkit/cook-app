import { StyleSheet } from 'react-native';
import { COLOR, CSS } from '../../utils/variables';

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: COLOR.backgroundColor,
		paddingLeft: CSS.padding15
	},
	wrapContent: {
		paddingRight: CSS.padding15
	}
});
