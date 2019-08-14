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
    right: 20, 
    padding: 7, 
    backgroundColor: '#fff', 
    borderRadius: 10 
  },
  saveCollectionHor: {
    bottom: 20,
  },
  saveCollectionVer: {
    top: 20,
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
		marginBottom: 7,
		color: 'white',
		letterSpacing: -0.02
  },
  statisticalWrap: { 
    flex: 1, 
    flexDirection: 'row',
    height: 13
  },
  recipeIcon: { 
    width: 13, 
    height: 9 
  },
  smallSaveIcon: { 
    width: 9, 
    height: 10 
  }, 
  eyeIcon: {
    width: 14,
    height: 9
  },
	separator: {
		marginHorizontal: 8,
		width: 0.5,
		height: 13,
		backgroundColor: 'white'
	},
	statisticalNumber: {
    fontSize: 13,
		marginLeft: 5,
		color: 'white'
  }
});
