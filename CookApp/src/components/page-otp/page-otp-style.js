import { StyleSheet, Dimensions } from 'react-native';
import { CSS } from '../../utils/variables';

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		display: 'flex',
		flex: 1,
		// height: '100%',
		alignItems: 'stretch',
		justifyContent: 'center',
	},

	titleText: {
		marginBottom: 20,
		fontSize: 25,
		fontWeight: 'bold',
		color: '#444444',
		textAlign: 'center',
		textTransform: 'uppercase',
	},
	linearGradient: {
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 5,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: 40,
		marginBottom: 20
	},
	textTitleButton: {
		fontSize: 15,
		fontWeight: 'bold',
		color: '#FFFFFF'
	},
	createNewButtonText: {
		fontWeight: 'bold',
		fontSize: 15,
		color: '#3ABF57',
		textAlign: 'center'
	}, createNewButton: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 20,
	},
	image: {
		// position: 'absolute',
		width: '100%',
		bottom: 0,
		height: 149,
		marginTop: -70
	},
	inputInform: {
		color: '#001D12'
	},
	color767676: {
		color: '#767676'
	},
	phoneInfor: {
		marginBottom: 26,
	},
	otpInput: {
		marginBottom: 49,
	},
	sendCode: {
		marginBottom: 52,
	},
	reSendCode: {
		justifyContent: 'center',
		width: 118,
		marginBottom: 30,
		borderRadius: 5,
		borderColor: '#E0E0E0',
		borderWidth: 1,
		padding: 13,
		fontFamily: CSS.fontText,
	},
	reSendCodeDuring: {
		fontFamily: CSS.fontTitle,
		color: '#3ABF57',
		paddingLeft: 4,
	},
	agreeOtP: {
		marginBottom: 20,
	}
});
export default styles;
