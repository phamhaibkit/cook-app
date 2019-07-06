import { StyleSheet } from 'react-native';
import { COLOR } from '../../utils/variables';

const padding = 12;
export default StyleSheet.create({
	containerAnimated: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		backgroundColor: 'transparent',
	},
	containerSearch: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		justifyContent: 'center',
		height: 55,
		paddingLeft: padding,
		paddingTop: padding,
		paddingBottom: 5,
		backgroundColor: COLOR.headerColor,
	},
	appNameView: {
		paddingHorizontal: padding,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	appNameTxt: {
		color: 'white',
		fontSize: 22,
		fontWeight: 'bold',
		marginTop: 10,
	},
	cartView: {
		position: 'absolute',
		right: 5,
		zIndex: 2,
		top: 10,
		paddingVertical: 5,
		paddingHorizontal: 8,
	},
});
