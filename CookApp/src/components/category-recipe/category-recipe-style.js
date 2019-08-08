import { StyleSheet } from 'react-native';
import { COLOR, CSS } from '../../utils/variables';

export default StyleSheet.create({
  container: {
    borderRadius: 10,
    // paddingBottom: 20,
    marginTop: CSS.padding15
  },
  frame: {
    height: 80,
    width: 80,
    marginTop: 20,
    marginHorizontal: 15
  },
  endFrame: {
    marginRight: 15,
  },
  containerTouch: {
    alignItems: 'center',
    overflow: 'hidden',
  },
  imgCate: {
    width: 70,
    height: 50,
    borderRadius: 5,
    overflow: 'hidden'
  },
  categoryChecked: {
    width: 70,
    height: 50,
    overflow: 'hidden',
    position: 'absolute'
  },
  cateText: {
    fontSize: 13,
    fontFamily: CSS.fontText,
    color: COLOR.blackName,
    textAlign: 'center',
    marginTop: 5
  }

});
