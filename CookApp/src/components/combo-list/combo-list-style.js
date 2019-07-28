import { StyleSheet, Dimensions } from 'react-native';
import { CSS, COLOR } from '../../utils/variables';

const containerPadding = 15;
const comboPadding = 10;
const blockMarginBottom = 15;
const overflowHeight = 20;
const { width } = Dimensions.get('window');

// suppose ratio is imgheight/imgwidth
const blockRatio = 0.7536;
const imgComboRatio = 0.4801;
const imageLeftSideRatio = 1.1459;
const imageRightSideRatio = 0.8469;
const imgLeftSideVsRightSideRatio = 0.7527; // based on width
const spaceImg = 4;

const blockWidth = width - containerPadding * 2;
const blockHeight = blockWidth * blockRatio;

const imgComboWidth = blockWidth - (comboPadding * 2);
const imgComboHeight = imgComboWidth * imgComboRatio;

const imgLeftSideHeight = imgComboHeight;
const imgRightSideHeight = imgComboHeight;

const imgLeftSideWidth = imgLeftSideHeight / imageLeftSideRatio;
const imgRightSideWidth = imgRightSideHeight / imageRightSideRatio;

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 15,
		paddingBottom: 15,
		backgroundColor: COLOR.backgroundColor
	},
	frame: {
		backgroundColor: COLOR.whiteColor,
		width: blockWidth,
		height: blockHeight - overflowHeight,	
		paddingHorizontal: 10,
		borderRadius: 5,
		marginTop: blockMarginBottom + overflowHeight
	},
	endFrame: {
		marginBottom: blockMarginBottom + overflowHeight
	},
	container2Img: {
		flex: 1,
		flexDirection: 'row',
		position: 'absolute',
		top: - overflowHeight
	},
	containerImg: {
		flex: 1,
		flexDirection: 'row',
		height: imgComboHeight,
		width: imgComboWidth,
		overflow: 'hidden'
	},
	statisticalNumber: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	separator: { 
		marginRight: 5,
		marginLeft: 13,
		color: '#d3d3d3' 
	},
	imgLeftViewRadius: {
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
		overflow: 'hidden',
	},
	imgRightViewRadius: {
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,
		overflow: 'hidden',
	},
	imgLeftView: {		
		width: imgLeftSideWidth,
		height: imgComboHeight,
	},
	imgRightView: {
		marginLeft: 4,
		width: imgRightSideWidth,
		height: imgComboHeight,
	},
	imgUp3: {
		width: imgRightSideWidth,
		height: (imgComboHeight - spaceImg) / 2 ,
  },
  imgUp5: {
		width: (imgRightSideWidth - spaceImg) / 2,
		height: (imgComboHeight - spaceImg) / 2 ,
	},
	imgDown3: {
		width: imgRightSideWidth,
		height: (imgComboHeight - spaceImg) / 2 ,
		marginTop: spaceImg,
  },
  imgDown5: {
		width: (imgRightSideWidth - spaceImg) / 2,
		height: (imgComboHeight - spaceImg) / 2 ,
		marginTop: spaceImg,
  },
  imgRightUp5: {
    width: (imgRightSideWidth - spaceImg) / 2,
    height: (imgComboHeight - spaceImg) / 2 ,
    marginLeft: 4,
  },
  imgRightDown5: {
    width: (imgRightSideWidth - spaceImg) / 2,
    height:(imgComboHeight - spaceImg) / 2 ,
    marginLeft: 4,
    marginTop: 4,
  },
	textTitle: {
		fontSize: 14,
		fontFamily: CSS.fontTitle,
		marginTop: imgComboHeight - 10,
		marginBottom: 3,
    color: COLOR.blackColor,
    lineHeight: 20,
    letterSpacing: -0.5
  },
  lineHori: {
		height: 1,
    backgroundColor: COLOR.lineHoriColor,
		marginTop: 10,
		marginHorizontal: - comboPadding,
  },
  ordersText:{
    fontSize: 13,
    marginTop: 5,
    lineHeight: 18,
    fontFamily: CSS.fontText,
    color: COLOR.blackColor
	},
  img2LeftView: {
    height: imgComboHeight,
		width: imgComboWidth / 2 - spaceImg / 2,
  },
  img2RightView: {
    height: imgComboHeight,
    width: imgComboWidth / 2 - spaceImg / 2,
    marginLeft: spaceImg
  },
  img4LeftUp: {
    height: imgComboHeight / 2 - spaceImg / 2,
    width: imgComboWidth / 2 - spaceImg / 2,
  },
  img4RighttUp: {
    height: imgComboHeight / 2 - spaceImg / 2,
    width: imgComboWidth / 2 - spaceImg / 2,
    marginLeft: spaceImg
  },
  img4LeftDown: {
    marginTop: spaceImg,
    height: imgComboHeight / 2 - spaceImg / 2,
    width: imgComboWidth / 2 - spaceImg / 2,
	},
	img4RightDown: {
		marginLeft: spaceImg,
		marginTop: spaceImg,
    height: imgComboHeight / 2 - spaceImg / 2,
    width: imgComboWidth / 2 - spaceImg / 2,
	}
});
