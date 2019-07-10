import { StyleSheet } from 'react-native';
import { CSS, COLOR } from '../../utils/variables';

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
		height: 60,
	},
	containerGadient: {
		flex: 1,
		paddingLeft: CSS.padding15,
		justifyContent: 'flex-end',
		paddingBottom: 5,
	},
	appNameView: {
		paddingHorizontal: CSS.padding15,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	appNameTxt: {
		color: COLOR.whiteColor,
    fontSize: 25,
    // lineHeight: 15,
		marginTop: 10,
    fontFamily: CSS.fontBold,
	},
	cartView: {
		position: 'absolute',
		right: 5,
		zIndex: 2,
		top: 10,
		paddingRight: 8,
	},
});
