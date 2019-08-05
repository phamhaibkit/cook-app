import { StyleSheet } from 'react-native';
import { COLOR } from '../../utils/variables';

const overflowHeight = 75;

const styles = StyleSheet.create({
	container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'green'
  },
  userInfo: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginTop: -overflowHeight
  },
  staticNumber: {
    textAlign: 'center',
    color: COLOR.greenColor,
    fontSize: 20,
    fontFamily: 'Quicksand-Bold'
  }
});
export default styles;
