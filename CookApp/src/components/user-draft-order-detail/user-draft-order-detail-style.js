import { StyleSheet } from 'react-native';

import { COLOR } from '../../utils/variables';

export default StyleSheet.create({  
  category: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 15,
    color: '#444',
    marginBottom: 10
  },
  title: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 14,
    color: '#001D12'
  },
  blockCustom: {
    padding: 10,
    marginBottom: 10
  },
  separator: {
    width: 0.8, 
    height: 11, 
    backgroundColor: COLOR.madeIn, 
    marginHorizontal: 8
  },
  textLabel: {
    fontSize: 13,
    color: '#000',
    fontFamily: 'Quicksand-Regular'
  }
})
