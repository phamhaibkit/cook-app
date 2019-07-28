import { StyleSheet } from 'react-native';

import { CSS, COLOR } from '../../utils/variables';

const marginBottomBlock = 10;
const paddingContainer = 15;
const overflowHeight = 90;
const overflowComboLabel = 11;

export default styles = StyleSheet.create({
  container: {},
  blockContainer: {
    backgroundColor: COLOR.whiteColor,
    paddingHorizontal: 15,
    marginBottom: marginBottomBlock
  },
  dishInfo: {
    position: 'absolute',
    top: - overflowHeight,
    zIndex: 999,
    left: paddingContainer,
    right: paddingContainer,
    borderRadius: 5,
    padding: paddingContainer,
    backgroundColor: COLOR.whiteColor
  },
  promotionInfo: {
    paddingTop: overflowHeight + overflowComboLabel + 30,
    paddingBottom: 30
  },
  comboLabel:{
    position:'absolute',
    overflow: 'hidden',
    left: 15,
    top: -11,
    backgroundColor: COLOR.whiteColor,
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 10,
    fontSize: 12,
    color: COLOR.greenColor,
    borderWidth: 0.5,
    borderColor: COLOR.greenColor,
  },
  title: {
    color: COLOR.blackColor,
    fontSize: 20
  },
  statisticalNumber: {
    flexDirection: 'row'
  },
  seperator: {
    width: 1,
    height: 12,
    backgroundColor: '#D3D3D3',
    marginHorizontal: 6
  },
  cardSeparator: {
    height: 50, 
    width: 1, 
    backgroundColor: COLOR.lineColor,
    marginHorizontal: 10
  },
  horizontalSeparator: {
    width: '100%', 
    height: 2, 
    backgroundColor: COLOR.lineHoriColor,
    marginTop: 15
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
  textDescription: { 
    textAlign: 'center', 
    color: COLOR.oldPrice,
    marginTop: 5 
  },
  estimatePrice: {
    overflow: 'hidden',
    borderRadius: 5,
    marginTop: 15,
    backgroundColor: COLOR.searchBarIos
  },
  estHighlightText: {
    color: COLOR.greenColor,
    fontSize: 20,
    lineHeight: 25
  },
  w50percentage: {
    width: '49%',
    textAlign: 'center',
    alignItems: 'center'
  },
  sectionTitle: {  
    fontSize: 15, 
    color: '#444444'
  },
  ingredients: {
    paddingTop: 15,
    paddingBottom: 30
  },
  cardLabel: {
    color: COLOR.oldPrice,
    fontSize: 14
  },
  rightTextCheckbox: {
    fontSize: 14,
    color: COLOR.oldPrice   
  },
  selectAll: {
    marginTop: 20,
    paddingLeft: 15
  },
  cardBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#CECECE'
  },
  customCheckBox: {
    width: 22, 
    height: 22, 
    backgroundColor: COLOR.whiteColor,
    borderColor: COLOR.greenColor,
    borderWidth: 1, 
    borderRadius: 5, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  cardWrap: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center',  
    borderColor: COLOR.greenColor,
    borderWidth: 1, 
    backgroundColor: 'rgba(58, 191, 87, 0.1)', 
    paddingVertical: 15, 
    paddingHorizontal: 10, 
    marginLeft: 32, 
    marginTop: 10, 
    borderRadius: 5
  },
  actionBtnGroup: {
    flex: 2, 
    flexDirection: 'row', 
    justifyContent: 'flex-end'
  }
});