import { StyleSheet, Dimensions } from 'react-native';
import { CSS, COLOR } from '../../utils/variables';

const width = Dimensions.get('window').width;

const marginTop = 24; 
const heighImg = 22; 
export default StyleSheet.create({
  container: {
    flex: 1, 
    paddingHorizontal: 15
  },
  containerFrame: {
    height: 240,
    marginTop: marginTop,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLOR.borderColor,
    // padding: 15
  },
  deleteView: {
    position: 'absolute',
    right: - heighImg / 2,
    top: marginTop - heighImg / 2
  },  
  deleteImg: {
    width: 22,
    height: heighImg
  },
  imagesView: {
    flexDirection: 'row',
    marginTop: 15,
    paddingHorizontal: 3
  },
  stepTxt: {
    fontFamily: CSS.fontTitle,
    color: '#444444',
    fontSize: 14,
    marginLeft: 10
  },
  imgBtn: {
    height: 60,
    width: (width - 30 - 20 - 7*3) / 4,
    borderWidth: 1,
    borderColor: '#AFB1B0',
    borderStyle: 'dashed',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 7
  },
  postImg: {
    width: 22,
    height: 21
  },
  upRecipeView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'dashed',
    borderColor: COLOR.greenColor,
  },
  upImg: {
    width: 14,
    height: 14
  },
  upText: {
    fontSize: 15,
    color: COLOR.greenColor,
    fontFamily: CSS.fontTitle,
    marginLeft: 7,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 5,
    height: 100,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginTop: 20
  },
});
