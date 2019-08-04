import { StyleSheet } from 'react-native';

import { COLOR } from '../../utils/variables';

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	leftTxt: {
		marginRight: 10,
	},
	rightTxt: {	
				marginLeft: 10	
	},
	checkBox: {
		width: 14,
		height: 10,
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
	}
});