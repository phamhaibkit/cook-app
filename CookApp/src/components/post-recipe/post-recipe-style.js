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
  stepView: {
    alignItems: 'center',
    flex: 2,
  },
  stepViewCenter: {
    flexDirection: 'row',
    flex: 6,
  },
  dotView: {
    flex: 2,
    flexDirection: 'row',
    marginTop: 10
  },
  dotActive: {
    width: 5,
    height: 5,
    backgroundColor: COLOR.greenColor,
    borderRadius: 2.5,
    marginLeft: 10
  },
  dot: {
    width: 5,
    height: 5,
    backgroundColor: '#F3F5F5',
    borderRadius: 2.5,
    marginLeft: 10
  },
  stepTxt: {
    fontSize: 12,
    fontFamily: CSS.fontTitle,
    color: '#C0C1C1'
  },
  stepTxtActive: {
    fontSize: 12,
    fontFamily: CSS.fontTitle,
    color: '#444444'
  },
  stepTxtGreen: {
    fontSize: 12,
    fontFamily: CSS.fontTitle,
    color: COLOR.greenColor
  },
  step2View: {
    alignItems: 'center',
    // justifyContent: 'center',
    flex: 3
  },
  numberStep: {
    fontSize: 15,
    fontFamily: CSS.fontTitle,
    color: '#C0C1C1'
  },
  numberStepActive: {
    fontSize: 15,
    fontFamily: CSS.fontTitle,
    color: COLOR.whiteColor
  },
  activeStep: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center'
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
  }
});
