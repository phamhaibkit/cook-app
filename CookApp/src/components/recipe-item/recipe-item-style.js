import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default StyleSheet.create({
	container: {
		flex: 1,
		color: 'white'
	},
	collectionTitle: {
		fontSize: 16,
		marginBottom: 10,
		color: 'white',
		letterSpacing: -0.02
	},
	separator: {
		marginHorizontal: 13,
		width: 1,
		height: 13,
		backgroundColor: 'white'
	},
	statisticalNumber: {
		marginLeft: 5,
		color: 'white'
	}
});
