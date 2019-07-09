import { StyleSheet, Dimensions } from 'react-native';
// import { CSS } from '../../utils/variables';

export default styles = StyleSheet.create({
	container: {
		display: 'flex',
		alignItems: 'center',
		// backgroundColor: 'red',
		justifyContent: 'center',
	},
	textLogin: {
		flex: 1,
		// position: 'absolute',
	},
	buttonLogin: {
		// opacity: 0,
		display: "none",
	},
	loginWithFacebookText: {
		fontWeight: 'bold',
		fontSize: 15,
		color: '#FFFFFF',
	},
	loginFbView: {
		width: '100%',
	},
	loginWithFacebook: {
		backgroundColor: '#4967AD',
		width: '100%',
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		height: 40,
		borderRadius: 5,
		position: 'relative'
	},
	iconFacebook: {
		position: 'absolute',
		left: 18,
		width: 40,
		// paddingHorizontal: 18,
		paddingVertical: 10,
		borderRightColor: 'rgba(255, 255, 255, 0.2)',
		borderRightWidth: 2,
	}
});
