import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import navigationService from '../../services/navigation.service';
import { LANG } from '../../lang/lang';
import { IMG, COLOR, CSS } from '../../utils/variables';

export default class SearchBarHeader extends Component {
  onPress= () => {
    navigationService.navigate('Search', { name: 'HaiPham' })
  }
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={this.onPress}
      >
        <View
          style={{
            height: 38,
            flexDirection: 'row',
            paddingHorizontal: CSS.padding15,
            borderRadius: 5,
            alignItems: 'center',
            backgroundColor: COLOR.whiteColor,
            justifyContent: 'space-between'
          }}
        >
          <Text
            style={{ fontFamily: CSS.fontText, color: '#AAAAAA', fontSize: 15 }}
          >
            {LANG.SEARCH}
          </Text>
          <Image source={IMG.searchGreen} style={{ width: 22, height: 22 }} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
