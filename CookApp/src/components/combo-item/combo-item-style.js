import { StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default StyleSheet.create({
	container: {
    flex: 1,
    marginTop: 20,
  },
  frame: {
    height: 0.4*height,
    // padding: 12,
    fontSize: 18,
    width:width - 48,
    marginLeft: 12,
    borderRadius: 5,
  },
  endFrame: {
    marginRight: 12,
  },

  container2Item: {
    flex: 1,
  },
  container2Img: {
    flex: 1,
    flexDirection: 'row',
  },
  left2: {
    flex:1,
    marginRight: 2,
  },
  right2: {
    flex: 1,
    marginLeft: 2
  },
  textTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  left3: {
    flex: 2,
  },
  right3: {
    flex: 3,
    marginLeft: 4
  },
  up3: {
    flex: 1,
    marginBottom: 2,
  },
  down3: {
    flex: 1,
    marginTop: 2,
  },
  left4: {
    flex: 1,
    marginTop: 4,
    marginRight: 2,
  },
  right4: {
    flex: 1,
    marginTop: 4,
    marginLeft: 2,
  },
  up5: {
    flex: 1,
    marginLeft: 4,
    marginBottom: 2,
  },
  down5: {
    flex: 1,
    marginLeft: 4,
    marginTop: 2,
  }
  
});
