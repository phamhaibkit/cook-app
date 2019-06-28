import { StyleSheet, Dimensions } from 'react-native';
import { CSS } from '../../utils/variables';
const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		marginTop: 40,
		marginLeft: 24,
		marginRight: 24,
		alignItems: 'center'
	},
	headerLayoutLogin: {
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	titleText: {
		marginVertical: 10,
		fontSize: 25,
		fontWeight: 'bold',
		color: 'black',
	},
	logo: {
		width: 350,
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		width: '70%',
	},
	loginButton: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#f0f0f0',
		paddingVertical: 20,
	},
	forgotButton: {
		flex: 1,
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
	}
});
export default styles;
