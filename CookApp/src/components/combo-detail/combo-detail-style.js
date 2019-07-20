import { StyleSheet } from 'react-native';

import { CSS, COLOR } from '../../utils/variables';

const marginBottomBlock = 10;
const paddingContainer = 15;

export default styles = StyleSheet.create({
  container: {
    
  },
  topSection: {
    paddingHorizontal: paddingContainer,
    marginBottom: marginBottomBlock
  },
  dishInfo: {
    borderRadius: 5,
    padding: paddingContainer,
    backgroundColor: '#f2f2f2'
  },
  comboLabel:{
    position:'absolute',
    left: 15,
    top: -11,
    backgroundColor: COLOR.whiteColor,
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 5,
    fontSize: 12,
    color: '#3ABF57'
  },
  title: {
    fontSize: 20,
    lineHeight: 24,    
  },
  statisticalNumber: {
    flexDirection: 'row'
  },
  seperator: {
    width: 1,
    height: 12,
    backgroundColor: '#D3D3D3',
    marginHorizontal: 5
  },
  numberStyle: {
    fontSize: 13,
    fontFamily: CSS.fontText,
    color: COLOR.blackColor,
    letterSpacing: -0.5
  },
  textLight: {
    color: COLOR.madeIn
  },
  estHighlighttext: {
    color: '#3ABF57',
    fontSize: 20,
    lineHeight: 25
  }
});