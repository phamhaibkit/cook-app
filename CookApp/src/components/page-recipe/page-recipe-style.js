import { StyleSheet } from 'react-native';
import { COLOR, CSS } from '../../utils/variables';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.backgroundColor,
  },
  containerRecipe: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLOR.backgroundColor,
    paddingBottom: 25,
    marginTop: 30
  },
  containerCate: {
    backgroundColor: COLOR.backgroundColor,
  },
  containerSearch: {
    backgroundColor: COLOR.whiteColor,
    paddingHorizontal: CSS.padding15,
    paddingVertical: 8,
  },
  advertisement: {
    marginTop: 30,
    height: 120,
    marginHorizontal: CSS.padding15,
    borderRadius: 10,
    overflow: 'hidden'
  },
  adverImg: {
    height: 120,
    width: null
  },
  wrapContent: {
    paddingLeft: CSS.padding15
  },

  upRecipeView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginTop: 20,
    marginHorizontal: 30,
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'dashed',
    borderColor: COLOR.greenColor,
  },
  upImg: {
    width: 26,
    height: 17
  },
  upText: {
    fontSize: 15,
    color: COLOR.greenColor,
    fontFamily: CSS.fontTitle,
    marginLeft: 7,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  gradienView: {
    height: 35
  }
});
