import { StyleSheet } from 'react-native';
import { COLOR, CSS } from '../../utils/variables';

const heightTreding = 60;
const widthTreding = 132;
const distanceTrending = 9;

export default StyleSheet.create({
  container: {
    flex: 1
  },
  containerTrending: {
    // marginLeft: 6
  },
  frame: {
    height: heightTreding,
    width: widthTreding,
    fontSize: 18,
    marginLeft: distanceTrending,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: COLOR.whiteColor,
    padding: 4
  },
  endFrame: {
    marginRight: CSS.padding15
  },
  square: {
    borderRadius: 5,
    flex: 1,
    overflow: 'hidden'
  },
  img: {
    width: 42,
    height: 52
  },
  containerText: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  text: {
    fontSize: 13,
    fontFamily: CSS.fontTitle,
    marginLeft: 5,
    lineHeight: 15,
    color: 'black'
  },
  belongHeader: {
    height: heightTreding / 2 - 5
  },
  halfTrend: {
    height: heightTreding / 2 + 5,
    width: '100%',
    position: 'absolute',
    top: heightTreding / 2 - 10
  }
});
