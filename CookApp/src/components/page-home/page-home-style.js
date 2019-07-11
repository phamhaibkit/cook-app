import { StyleSheet } from 'react-native';
import { COLOR, CSS } from '../../utils/variables';

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: COLOR.backgroundColor,		
	},
	advertisement: {
    marginTop: 30,
		height: 120,
		marginHorizontal: CSS.padding15,
		borderRadius: 10,
		overflow: 'hidden',
	},
	adverImg: {
		height: 120,
		width: null,
	},
	wrapContent: {
		paddingLeft: CSS.padding15
	}
});
