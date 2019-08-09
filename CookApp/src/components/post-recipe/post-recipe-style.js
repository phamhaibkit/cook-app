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
    flex: 1
  },
  containerSteps: {
    flexDirection: 'row',
    marginTop: 10
  },
  spaceView: {
    flex: 1,
  },
  checkedImg: {
    width: 12,
    height: 9
  },
  spaceBorder: {
    height: 10,
    backgroundColor: COLOR.backgroundColor,
    marginTop: 10
  },
  containerInput: {
    paddingHorizontal: 15
  },  
  addImg: {
    width: 38,
    height: 36
  },
  addImgBtn: {
    marginTop: 20,
    height: 150,
    // width: '100%',
    borderWidth: 1,
    borderColor: '#AFB1B0',
    borderRadius: 5,
    borderStyle: 'dashed',
    backgroundColor: 'rgba(221,221,221, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addImgTxt: {
    fontFamily: CSS.fontTitle,
    fontSize: 14,
    color: '#969696',
    marginTop: 13
  },
  addImgLimit: {
    fontSize: 12,
    fontFamily: CSS.fontText,
    color: '#919191'
  },
  titleTxt: {
    fontFamily: CSS.fontTitle,
    fontSize: 14,
    color: '#444444',
    marginTop: 20
  },
  textInput: {
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 15,
    marginTop: 6
  },
  tagView: {
    height: 40,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'red'
  },
  bottomBtn: {
    marginTop: 31,
    marginBottom: 22,
    marginHorizontal: 15
  },
  dropView: {
    height: 40,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  arrowDownGreen: {
    width: 10,
    height: 6
  }
});
