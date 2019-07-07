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
	titleText: {
		marginTop: 64,
		marginBottom: 20,
		fontSize: 25,
		fontWeight: 'bold',
		color: 'black',
		textAlign: 'center',
		textTransform: 'uppercase'
	},
	loginButton: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 20,
	},
	forgotButton: {
		justifyContent: 'flex-end',
		paddingBottom: 10,
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
		marginBottom: 20,
		flex: 1,
	}
});
export default styles;
