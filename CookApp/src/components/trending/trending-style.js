import { StyleSheet } from 'react-native';
import { COLOR, CSS } from '../../utils/variables';

const heightTreding = 60;
export default StyleSheet.create({
	container: {
		flex: 1,
	},

	frame: {
		height: heightTreding,
		width: 140,
		fontSize: 18,
		marginLeft: CSS.padding15,
		borderRadius: 5,
		flexDirection: 'row',
		backgroundColor: COLOR.whiteColor,
		padding: 4,
	},
	endFrame: {
		marginRight: CSS.padding15,
	},

	square: {
		borderRadius: 4,
    flex: 1,
	},
	img: {
		width: 40,
		height: 50,
	},

	containerText: {
		flex: 2,
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	text: {
		fontWeight: 'bold',
	},
	belongHeader: {
		height: heightTreding / 2 - 5,
	},
	halfTrend: {
		height: heightTreding / 2 + 5,
		width: '100%',
		position: 'absolute',
		top: heightTreding / 2 - 10,
	},
});
