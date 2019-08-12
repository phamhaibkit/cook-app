import { StyleSheet } from 'react-native';
import { CSS, COLOR } from '../../utils/variables';

export default StyleSheet.create({
  headerTitleStyle: {
    fontSize: 16,
    fontFamily: CSS.fontBold,
    color: "#001D12"
  },
  headerTitleContainerStyle: {
    flex: 1,
    justifyContent: "center",
    shadowRadius: 0,
    shadowOffset: {
      height: 0
    }
  },
  saveDraftBtn: {
    paddingRight: 15,
    paddingVertical: 5
  },
  saveDraftTxt: {
    fontSize: 15,
    fontFamily: CSS.fontTitle,
    color: COLOR.greenColor
  },
  container: {
    flex: 1, 
    // paddingHorizontal: 15
  },
  spaceBorder: {
    height: 10,
    backgroundColor: COLOR.backgroundColor,
    marginTop: 10
  },
  titleTxt: {
    fontFamily: CSS.fontTitle,
    fontSize: 14,
    color: '#444444',
    marginTop: 20
  },
  dropView: {
    height: 40,
    borderWidth: 1,
    borderColor: COLOR.borderColor,
    borderRadius: 5,
    justifyContent: 'center',
    marginTop: 7
  },
  containerFrame: {
    flexDirection: 'row',
    height: 80,
    marginTop: 15
  },
  leftFrame: {
    width: '90%',
    borderWidth: 1,
    borderColor: COLOR.borderColor,
    borderRadius: 5
  },
  rightFrame: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  upIngre: {
    flex: 1,
    paddingLeft: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  borderBottom: {
    borderBottomColor: COLOR.borderColor,
    borderBottomWidth: 1,
  },
  leftIngre: {
    flex: 1,
    height: '100%',
    justifyContent: 'center'
  },
  borderRight: {
    borderRightColor: COLOR.borderColor,
    borderRightWidth: 1,
  },
  deleteImg: {
    width: 22,
    height: 22
  },
  textInput: {
    width: '100%'
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
  bottomBtn: {
    marginTop: 31,
    marginBottom: 22,
    // marginHorizontal: 15
  },
});
