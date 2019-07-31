import React, { Component } from 'react';
import { View, Image, TextInput, Text, TouchableOpacity, Keyboard } from 'react-native';
import { LANG } from '../../lang/lang';
import { IMG, COLOR, CSS } from '../../utils/variables';
import navigationService from '../../services/navigation.service';

export default class SearchBarInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // isFocus: true,
      text: null
    }
  }

  // onFocus = () => {
  //   this.setState({
  //     isFocus: true
  //   })
  // }

  // onBlur = () => {
  //   this.setState({
  //     isFocus: false
  //   })
  // }
  onClear = () => {
    this.setState({
      text: null,
    })
  }

  onCancel = () => {
    this.onClear();
    // Keyboard.dismiss();
    navigationService.goBack();
  }

  onSearch = () => {
    this.props && this.props.onSearch();
  }

  onChangeText = (text) => {
    this.setState({
      text: text
    })
  }

  render() {
    const { text } = this.state;
    return (
      <View style={{ backgroundColor: COLOR.whiteColor, paddingHorizontal: CSS.padding15, paddingVertical: 8, flexDirection: 'row' }}>
        <View style={{ flex: 9, flexDirection: 'row', overflow: 'hidden', backgroundColor: '#F8F8F8', borderRadius: 10, paddingLeft: 10 }}>
          <TouchableOpacity style={{ flex: 1, height: 40, justifyContent: 'center', alignItems: 'center' }} onPress={this.onSearch}>
            <Image source={IMG.searchGreen} style={{ width: 22, height: 22 }} />
          </TouchableOpacity>
          <TextInput
            onFocus={this.onFocus}
            autoFocus={true}
            style={{ flex: 9, height: 40 }}
            onChangeText={(text) => this.onChangeText(text)}
            value={this.state.text}
          />
          {text && (
            <TouchableOpacity style={{ flex: 1, height: 40, justifyContent: 'center', alignItems: 'center' }} onPress={this.onClear}>
              <Image source={IMG.clearInput} style={{ width: 14, height: 14 }} />
            </TouchableOpacity>
          )}

        </View>

        <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }} onPress={this.onCancel}>
          <Text style={{ fontFamily: CSS.fontTitle, fontSize: 15, color: COLOR.greenColor }}>{LANG.CANCEL}</Text>
        </TouchableOpacity>

      </View>
    );
  }

}
