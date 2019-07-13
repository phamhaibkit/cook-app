import { StyleSheet, Dimensions } from 'react-native';
import { CSS, COLOR } from '../../utils/variables';

const containerPadding = 15;
const { width } = Dimensions.get('window');

// suppose ratio is imgheight/imgwidth
const blockRatio = 0.7536;
const imgComboRatio = 0.4831;
const imageRatio1st = 1.1459;
const imageRatio2nd = 0.4167;
const imgLeftSideVsRightSideRatio = 0.7527; // based on width
const spaceImg = 4;

const blockWidth = width - containerPadding * 2;
const blockHeight = blockWidth * blockRatio;

const imgComboWidth = blockWidth - (containerPadding * 2);
const imgComboHeight = imgComboWidth * imgComboRatio;

const imgLeftSideHeight = imgComboHeight;
const imgRightSideHeight = imgComboHeight;

const imgLeftSideWidth = imgLeftSideHeight / imageRatio1st;

const imgRightSideWidth = imgRightSideHeight / imageRatio2nd;

export default StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 6,
	},
	frame: {
		height: blockHeight,
		fontSize: 18,
		width: blockWidth,
		marginLeft: CSS.padding15,
		borderRadius: 5,
		marginTop: 15
	},
	endFrame: {
		marginRight: CSS.padding15,
	},
	containerWhite: {
		width: '100%',
		height: '100%',
		borderRadius: 5,
		paddingHorizontal: CSS.padding10,
	},
	containerImg: {
		flex: 1,
		flexDirection: 'row',
		height: imgComboHeight,
		width: imgComboWidth,
		marginHorizontal: 10,
		borderRadius: 5,
    overflow: 'hidden'
	},
	container2Item: {
		paddingTop: 20,
	},
	container2Img: {
		flex: 1,
		flexDirection: 'row',
    position: 'absolute',
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
    color: COLOR.blackColor,
    lineHeight: 20,
    letterSpacing: -0.5
  },
  lineHori: {
		height: 1,
    backgroundColor: COLOR.lineHoriColor,
    marginTop: 10
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
    width: imgComboWidth / 2 - spaceImg / 2
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
    marginTop: 4,
    height: imgComboHeight / 2 - spaceImg / 2,
    width: imgComboWidth / 2 - spaceImg / 2,
  }
});
