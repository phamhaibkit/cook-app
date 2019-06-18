import { StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default StyleSheet.create({
	container: {
    flex: 1,
    marginTop: 20,
  },

	frame: {
    height: 100,
    width: 80,
    fontSize: 18,
    alignItems: 'center',
    marginLeft: 10,
    borderRadius: 5,
    // backgroundColor: 'blue',
    // padding: 10
  },
  endFrame: {
    marginRight: 12,
  },
  
  square: {
    backgroundColor: 'lightblue',
    height: 50,
    width: 50,
  },

  containerText: {
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  text: {
    textAlign: 'center'
  }

});
