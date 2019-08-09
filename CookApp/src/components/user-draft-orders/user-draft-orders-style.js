import { StyleSheet } from 'react-native';

import { CSS, COLOR } from '../../utils/variables';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.backgroundColor,
    paddingTop: 15
  },
  block: {
    backgroundColor: COLOR.whiteColor,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginBottom: 15,
    borderRadius: 5,
    marginHorizontal: 15
  },
  category: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 14,
    lineHeight: 18,
    color: '#444',
    marginBottom: 10,
    marginTop: 15
  }
})
