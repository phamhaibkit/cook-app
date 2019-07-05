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
		flex: 1,
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 0,
		backgroundColor: '#fff',
		color: '#424242',
	},
	searchSection: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	searchIcon: {
		padding: 10,
	},
});


