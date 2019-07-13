import { StyleSheet } from 'react-native';
import { CSS, COLOR } from '../../utils/variables';

const heightCombo = 141;
const widthCombo = 110;
const heighImg = 70;
const widthImg = 70;
export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  frame: {
    height: heightCombo,
    // paddingHorizontal: CSS.padding10,
    fontSize: 18,
    width: widthCombo,
    marginLeft: CSS.padding15,
    borderRadius: 5,
    // backgroundColor: COLOR.whiteColor
  },
  endFrame: {
    marginRight: CSS.padding15
  },
  containerWhite: {
    backgroundColor: COLOR.whiteColor,
    width: '100%',
    height: heightCombo - heighImg / 2,
    borderRadius: 5,
    paddingHorizontal: CSS.padding10,
    marginTop: heighImg / 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  container2Img: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute'
    // top: -10
  },
  containerImg: {
    height: heighImg,
    width: widthImg,
    borderRadius: heighImg / 2,
    overflow: 'hidden',
  },
  containerRank: {
    position: 'absolute',
    backgroundColor: COLOR.whiteColor,
    bottom:-5,
    right: 0,
    width: 24,
    height: 24,
    borderRadius:12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:0.5,
    borderColor:'#FFFEEE'
  },
  rankImg: {
    width: 13,
    height: 12,
  },
  nameText: {
    fontSize: 15,
    fontFamily: CSS.fontTitle,
    textAlign: 'center',
    color: COLOR.blackName
  }
});
