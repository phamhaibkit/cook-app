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
	Input: {
		flex: 1,
		paddingLeft: 20,
		color: 'black',
		fontSize: 14
	},
	SectionStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#E0E0E0',
		// height: 40,
		borderRadius: 5,
		flex: 1,
		width: '100%',
		padding: 10,
	},

	ImageStyle: {
		alignItems: 'center',
		borderRightColor: '#E0E0E0',
		borderRightWidth: 1,
		paddingRight: 10,
	},
	inputSection: {
		marginBottom: 20,
	},
	image: {
		padding: 10,
		margin: 5,
		height: 16,
		width: 16,
		resizeMode: 'stretch',
	}
});


