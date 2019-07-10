import { StyleSheet, Dimensions } from 'react-native';
import { CSS } from '../../utils/variables';
const styles = StyleSheet.create({
	container: {
		fontFamily: 'Nunito',
		paddingHorizontal: 30,
		display: 'flex',
		flex: 1,
		// height: '100%',
		alignItems: 'stretch',
		justifyContent: 'center',
	},
	loginPage: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
	},
	titleText: {
		marginBottom: 20,
		fontFamily: CSS.fontBold,
		fontSize: 20,
		color: '#444444',
		textAlign: 'center',
		textTransform: 'uppercase',
	},
	nameApp: {
		fontFamily: CSS.fontBold,
		fontSize: 28,
		fontWeight: '900',
		color: '#3ABF57',
		textAlign: 'center'
	},
	logo: {
		marginBottom: 64,
		fontFamily: 'Nunito',
	},
	loginButton: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 20,
	},
	forgotButton: {
		justifyContent: 'flex-end',
		paddingBottom: 30,
		alignItems: 'flex-end'
	},
	forgotPassword: {
		// textDecorationLine: 'underline',
		color: '#3ABF57'
	},
	paddingVertical: {
		paddingVertical: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	Input: {
		borderColor: '#E0E0E0',
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 20,
		flex: 1,
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
	buttonText: {
		fontSize: 18,
		textAlign: 'center',
		margin: 10,
		color: '#ffffff',
		backgroundColor: 'transparent',
	},
	loginFacebookSection: { flex: 1, display: 'flex'},
	createNewButtonText: {
		fontSize: 15,
		color: '#3ABF57',
		textAlign: 'center',
		fontFamily: CSS.fontTitle,
	}, createNewButton: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 20,
	},
	image: {
		zIndex: -1,
		width: '100%',
		bottom: 0,
		height: 149,
		marginTop: -70
	},
});
export default styles;
