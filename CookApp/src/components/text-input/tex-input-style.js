import { StyleSheet } from 'react-native';
import { CSS } from '../../utils/variables';

export default StyleSheet.create({
  Input: {
    flex: 1,
    color: 'black',
    fontSize: 14,
    height: 40,
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
  },

  ImageStyle: {
    alignItems: 'center',
    borderRightColor: '#E0E0E0',
    borderRightWidth: 1,
    paddingRight: 10,
    height: 20,

  },
  inputSection: {
    marginBottom: 20,
  },
  image: {
    padding: 10,
    margin: 0,
    height:20,
    width: 20,
  },
  placeholderStyle: {
    fontSize: 14,
    color: '#CECECE',
  }
});
