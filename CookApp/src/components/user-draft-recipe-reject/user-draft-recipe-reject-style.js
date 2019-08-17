import { StyleSheet } from 'react-native';
import { CSS, COLOR } from '../../utils/variables';


const styles = StyleSheet.create({
  timeView: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginBottom: 5   
  },
  textTime: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 13,
    color: COLOR.blackColor
  },
  calendarImg: {
    width: 11,
    height: 11,
    marginRight: 5
  },
  textReason: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 14,
    color: '#0C0C0C',
    marginBottom: 5
  }
});

export default styles;
