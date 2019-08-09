import { StyleSheet, Dimensions } from 'react-native';
import { CSS } from '../../utils/variables';

const height = Dimensions.get('window').height;

export default (styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	modal: {
		backgroundColor: '#FFFFFF',
		height: (height * 3) / 4,
		width: '100%',
	},
}));
