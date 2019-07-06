import { StyleSheet } from 'react-native';
import { COLOR } from '../../utils/variables';

const heightTreding = 50;
export default StyleSheet.create({
	container: {
		flex: 1,
	},

	frame: {
		height: heightTreding,
		width: 140,
		fontSize: 18,
		marginLeft: 10,
		borderRadius: 5,
		flexDirection: 'row',
		backgroundColor: 'white',
		padding: 4,
	},
	endFrame: {
		marginRight: 12,
	},

	square: {
		borderRadius: 4,
		flex: 1,
	},
	img: {
		width: 38,
		height: 42,
	},

	containerText: {
		flex: 2,
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	text: {
		// textAlign: 'center',
		fontWeight: 'bold',
	},
	belongHeader: {
		height: heightTreding / 2 - 5,
		backgroundColor: COLOR.headerColor,
	},
	halfTrend: {
		height: heightTreding / 2 + 5,
		width: '100%',
		position: 'absolute',
		top: heightTreding / 2 - 10,
		backgroundColor: COLOR.headerColor,
	},
});
