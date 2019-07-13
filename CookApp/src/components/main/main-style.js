import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center'
    // justifyContent: 'space-around',
  },
  image: {
    width: 320,
    height: 320
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
    marginTop: 40
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: 20
  },
  home: {
    width: 21,
    height: 22
  },
  store: {
    width: 26,
    height: 24
  },
  recipe: {
    width: 29,
    height: 22
  },
  bell: {
    width: 21,
    height: 24
  },
  individual: {
    width: 22,
    height: 22
  }
});
