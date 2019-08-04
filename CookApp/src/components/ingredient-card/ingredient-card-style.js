import { StyleSheet } from 'react-native';
import { COLOR, CSS } from '../../utils/variables';

export default StyleSheet.create({
  cardWrap: {   
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
    borderColor: COLOR.greenColor,
    borderWidth: 1, 
    backgroundColor: 'rgba(58, 191, 87, 0.1)', 
    paddingVertical: 15, 
    paddingHorizontal: 10, 
    marginTop: 10, 
    borderRadius: 5,
  },
  actionBtnGroup: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
  },
  cardBorder: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#CECECE',
    width: '100%',
  },
  lastCard: {
    borderBottomWidth: 0,
    borderBottomColor: COLOR.whiteColor,
    paddingBottom: 0
  },
  rightTextCheckbox: {
    fontSize: 14,
    color: COLOR.oldPrice   
  },
  cardLabel: {
    color: COLOR.oldPrice,
    fontSize: 14
  },
});
