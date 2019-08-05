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
    marginTop: 7
  },
  dot: {
    width: 5,
    height: 5,
    backgroundColor: '#F3F5F5',
    borderRadius: 2.5,
    // marginLeft: 10
  },
  dotNext: {
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
  step2View: {
    alignItems: 'center',
    // justifyContent: 'center',
    flex: 3
  },
  numberStep: {
    fontSize: 15,
    fontFamily: CSS.fontTitle
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
});
