import { StyleSheet } from 'react-native';
import { COLOR, CSS } from '../../utils/variables';

export default StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: COLOR.whiteColor,
    // marginHorizontal: CSS.padding15,
    borderRadius: 10,
    // paddingBottom: 20,
    marginTop: CSS.padding15
  },
  frame: {
    height: 80,
    width: 80,
    marginTop: 20,
    // borderWidth: 2,
    // borderColor: 'red',
    marginHorizontal: 15
  },
  endFrame: {
    marginRight: 15,
  },
  containerTouch: {
    // flex: 2,
    // paddingLeft: CSS.padding10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    // flex: 1
  },
  imgCate: {
    width: 70,
    height: 50,
    borderRadius: 5,
    overflow: 'hidden'
  },
  cateText: {
    fontSize: 13,
    fontFamily: CSS.fontText,
    color: COLOR.blackName,
    textAlign: 'center',
    marginTop: 5
  }

});
