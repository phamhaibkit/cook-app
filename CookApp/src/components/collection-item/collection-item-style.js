import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default StyleSheet.create({
  blockContainer: { 
    padding: 10, 
    backgroundColor: '#fff'
  }, 
  saveCollection: { 
    position: 'absolute', 
    bottom: 10, 
    right: 10, 
    padding: 8, 
    backgroundColor: '#fff', 
    borderRadius: 10 
  },
  saveIcon: { 
    height: 17, 
    width: 16 
  },
  blockContentWrap: { 
    position: 'absolute', 
    bottom: 15, 
    left: 15, 
    right: 15, 
    color: 'white' 
  },  
	collectionTitle: {
		fontSize: 16,
		marginBottom: 10,
		color: 'white',
		letterSpacing: -0.02
  },
  statisticalWrap: { 
    flex: 1, 
    flexDirection: 'row' 
  },
  recipeIcon: { 
    width: 12, 
    height: 7 
  },
  smallSaveIcon: { 
    width: 10, 
    height: 10 
  }, 
	separator: {
		marginHorizontal: 13,
		width: 1,
		height: 13,
		backgroundColor: 'white'
	},
	statisticalNumber: {
		marginLeft: 5,
		color: 'white'
	}
});
