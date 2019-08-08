import { StyleSheet } from 'react-native';

import { CSS, COLOR } from '../../utils/variables';

export default StyleSheet.create({

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

});
