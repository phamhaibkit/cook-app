import { StyleSheet, Dimensions } from 'react-native';
import { CSS } from '../../utils/variables';
const styles = StyleSheet.create({
	container: {
		padding: 15,
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
	headerLayoutLogin: {
	},
	titleText: {
		marginVertical: 10,
		fontSize: 25,
		fontWeight: 'bold',
		color: 'black',
		textAlign: 'center'
	},

	image: {
		// width: '70%',
	},
	loginButton: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#f0f0f0',
		paddingVertical: 20,
	},
	forgotButton: {
		justifyContent: 'flex-end',
		paddingBottom: 10,
		alignItems: 'flex-end'
	},
	forgotPassword: {
		textDecorationLine: 'underline',
	},
	paddingVertical: {
		paddingVertical: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	nameApp: {
		fontFamily: 'Nunito',
		fontSize: 28,
		fontWeight: '900',
		color: '#3ABF57',
		textAlign: 'center'
	},
	Input: {
		borderColor: '#E0E0E0',
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 20
	}
});
export default styles;
