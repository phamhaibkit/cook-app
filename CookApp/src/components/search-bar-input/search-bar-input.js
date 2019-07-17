import React, { Component } from 'react';
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import { LANG } from '../../lang/lang';
import { IMG, COLOR, CSS } from '../../utils/variables';

export default class SearchBarInput extends Component {
  render() {
    const { onChangeText } = this.props;
    return (
      <View style={{
        flexDirection: 'row', height: 42, width: '100%', alignItems: 'center', paddingLeft: 15, paddingBottom: 8, borderBottomColor: COLOR.greyColor, borderBottomWidth: 0.5, 
      }}>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 15,
            paddingRight: 5,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: COLOR.searchBarIos,
            width: '85%'
          }}
        >
          <TextInput
            style={{ fontFamily: CSS.fontText, fontSize: 15, height: 40, flex: 1, backgroundColor: COLOR.searchBarIos }} 
            // autoFocus={true }
            onChangeText={onChangeText}
          />
          <TouchableOpacity style={{ padding: 5, paddingHorizontal: 10 }}>
            <Image source={IMG.searchGreen} style={{ width: 22, height: 22 }} />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', width: '15%' }}>
          <TouchableOpacity style={{ padding: 5 }}>
            <Text style={{ fontFamily: CSS.fontTitle, fontSize: 15, color: COLOR.greenColor }}>{LANG.CANCEL}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
