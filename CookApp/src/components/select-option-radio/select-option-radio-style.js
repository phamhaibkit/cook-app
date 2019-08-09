import { StyleSheet } from 'react-native';
import { CSS } from '../../utils/variables';
const componentMargin = 20;

export default (styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
	},
	containerLabel: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 12,
		paddingBottom: componentMargin,
		borderBottomWidth: 0.5,
		borderBottomColor: 'rgb(153,153,153)',
	},
	labelText: {
		fontSize: 16,
		fontFamily: CSS.fontTitle,
		color: '#000000',
	},
	labelRightText: {
		fontSize: 16,
		color: '#585858',
	},
	radioGroup: {},
	radioButton: {
		borderBottomWidth: 0.5,
		borderBottomColor: 'rgb(153,153,153)',
		paddingTop: 25,
		paddingBottom: 25,
	},
	radioText: {
		fontSize: 16,
		marginLeft: 12,
	},
}));
