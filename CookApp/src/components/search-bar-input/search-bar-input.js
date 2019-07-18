import React, { Component } from 'react';
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import { LANG } from '../../lang/lang';
import { IMG, COLOR, CSS } from '../../utils/variables';

export default class SearchBarInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value
    });
  }

  render() {
    const { value } = this.state;
    const { onChangeText, onCancel, onSearch, isFocus} = this.props;
    console.log('AAAAAAAAAAAAAA', value);
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
            autoFocus={isFocus}
            onChangeText={onChangeText}
            value={value}
          />
          <TouchableOpacity style={{ padding: 5, paddingHorizontal: 10 }} onPress={onSearch}>
            <Image source={IMG.searchGreen} style={{ width: 22, height: 22 }} />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', width: '15%' }}>
          <TouchableOpacity style={{ padding: 5 }} onPress={onCancel}>
            <Text style={{ fontFamily: CSS.fontTitle, fontSize: 15, color: COLOR.greenColor }}>{LANG.CANCEL}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
