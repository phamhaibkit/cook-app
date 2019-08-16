import { StyleSheet } from 'react-native';
import { COLOR } from '../../utils/variables';

const overflowHeight = 75;

const styles = StyleSheet.create({
	container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: COLOR.backgroundColor
  },
  userInfo: {
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginTop: -overflowHeight
  },
  statisticalNumber: {
    textAlign: 'center',
    color: COLOR.greenColor,
    fontSize: 20,
    fontFamily: 'Quicksand-Bold'
  },
  statisticalText: {
    textAlign: 'center',
    color: COLOR.oldPrice,
    fontSize: 13,
    fontFamily: 'Quicksand-Regular'
  },
  buttonContainerStyle: {
    width: '50%'
  },
  buttonStyles: {
    width: '100%',
    borderWidth: 0.8,
    borderColor: COLOR.greenColor
  },
  buttonTitleStyle: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 15,
    color: COLOR.greenColor
  }
});
export default styles;
