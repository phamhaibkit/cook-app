import { StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default StyleSheet.create({
	container: {
		flex: 1,
  },
	frame: {
    height: 0.32*height,
    // fontSize: 18,
    width:width - 48,
    backgroundColor: 'lightblue',
    marginLeft: 12,
  },
  endFrame: {
    marginRight: 12,
  },
  containerImg: {
    flex: 1,
    padding: 12,
    // borderRadius: 5,
  },
  emptyContent: {
    flex: 7,
  },  
  containerContent: {
    flex:3,
  },
  tile: {
    flex: 1,
    flexDirection:'row',
  },
  left: {
    flex: 9,
    // borderColor: 'red',
    // borderWidth: 2,
    paddingRight: 5,
    // justifyContent: 'flex-end',
  },
  right: {
    flex: 1,
    // borderColor: 'blue',
    // borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    // justifyContent: 'flex-end',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  normalText: {
    fontSize: 12
  },
  image: {
    width: 20,
    height: 20
  },
});
