import { StyleSheet, Dimensions } from 'react-native';
import { CSS, COLOR } from '../../utils/variables';

const { width } = Dimensions.get('window');
const widthCart = 58;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.backgroundColor,
    flex: 1
  },
  containerHeader: {
    flexDirection: 'row',
    backgroundColor: COLOR.whiteColor,
    paddingVertical: 8,
  },
  containerSearch: {
    width: width - widthCart,
    paddingLeft: CSS.padding15
  },  
  cartButton: {
    width: widthCart,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5
  },
  containerTrend : {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  trendLabelText: {
    fontSize: 15,
    color: COLOR.blackColor,
    marginTop: 20,
    marginLeft: CSS.padding15,
    fontFamily: CSS.fontBold
  },
  trendButton: {
    flexDirection: 'row',
    marginLeft: CSS.padding15,
    marginTop: CSS.padding15,
    paddingHorizontal: CSS.padding15,
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: COLOR.whiteColor
  },
  trendText: {
    fontSize: 14,
    fontFamily: CSS.fontText,
    color: COLOR.blackName
  }
});
export default styles;
