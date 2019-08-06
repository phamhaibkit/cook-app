import { StyleSheet } from 'react-native';

import { CSS, COLOR } from '../../utils/variables';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.backgroundColor,
    paddingVertical: 20,
    paddingHorizontal: 15
  },
  block: {
    backgroundColor: COLOR.whiteColor,
    paddingHorizontal: 15,
    paddingVertical: 20
  }
})
