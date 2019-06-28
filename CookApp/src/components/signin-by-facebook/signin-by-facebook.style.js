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
		color: 'black',
		// textDecorationLine: 'underline',
		fontSize: 16,
		// marginBottom: 30,
	},
	loginFbView: {
		width: '100%',
	},
	loginWithFacebook: {
		backgroundColor: '#f0f0f0',
		width: '100%',
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 20
	}
});
