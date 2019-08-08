import { StyleSheet } from 'react-native';

import { CSS, COLOR } from '../../utils/variables';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: 'red'
  },
  block: {
    backgroundColor: COLOR.whiteColor,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginBottom: 15
  }
})
