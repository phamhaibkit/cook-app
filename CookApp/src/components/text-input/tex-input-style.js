import { StyleSheet } from 'react-native';

const inputBase = {
	fontFamily: "'Muli', sans-serif",
	borderColor: '#dadada',
	borderWidth: 1,
	padding: 12,
	borderRadius: 8,
	color: '#222222',
};

export default StyleSheet.create({
	inputLabel: {
		// ...inputBase,
		fontSize: 14,
		color: '#222222',
		marginBottom: 8,
		fontWeight: '700',
	},
	input: {
		...inputBase,
		marginBottom: 20,
	},
});
