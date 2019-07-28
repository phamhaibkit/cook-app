import { StyleSheet, Dimensions } from 'react-native';
import { COLOR, CSS } from '../../utils/variables';

const widthItem = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    marginBottom: 20
  },
  shadowView: {
    width: widthItem - 2 * CSS.padding15,
    height: 40,
    marginHorizontal: CSS.padding15,
    marginVertical: 5,
    borderRadius: 5,
    shadowColor: COLOR.shadowColor,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 5,
    backgroundColor: 'white',
    overflow: 'hidden'
  },
  reasonButton: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    borderRadius: 5,
  },
  bottomView: {
    position: 'absolute',
    height: 40,
    bottom: 0,
    width: widthItem - 30,
    marginHorizontal: 15,
    borderRadius: 5
  },
  textBottom :{
    fontFamily: CSS.fontTitle,
    fontSize: 15,
    color: COLOR.whiteColor
  },
  inputView: {
    marginTop: 10,
    height: 80,
    width: widthItem - 2 * CSS.padding15,
    marginHorizontal: CSS.padding15,
    borderWidth: 1,
    borderColor: COLOR.lineColor,
    borderRadius: 5,
    justifyContent: 'flex-start'
  },
  inputText: {
    // borderWidth: 2,
    // borderColor: 'red'
  }

});
