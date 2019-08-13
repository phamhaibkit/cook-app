import React, { Component } from 'react';
import { View, Image, TextInput, Text, TouchableOpacity, Keyboard } from 'react-native';
import { LANG } from '../../lang/lang';
import { IMG, COLOR, CSS } from '../../utils/variables';
import navigationService from '../../services/navigation.service';

export default class SearchBarInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      text: nextProps.textData
    });
  }

  onClear = () => {
    this.setState({
      text: '',
    });
  }

  onCancel = () => {
    this.onClear();
    navigationService.goBack();
  }

  onSearch = () => {
    const { text } = this.state;
    this.props.onSearch && this.props.onSearch(text);
  }

  render() {
    const { text } = this.state;
    const { onChangeText } = this.props;
    return (
      <View style={{ backgroundColor: COLOR.whiteColor, paddingHorizontal: CSS.padding15, paddingVertical: 8, flexDirection: 'row' }}>
        <View style={{ flex: 9, flexDirection: 'row', overflow: 'hidden', backgroundColor: '#F8F8F8', borderRadius: 10, paddingLeft: 10 }}>
          <TouchableOpacity style={{ flex: 1, height: 40, justifyContent: 'center', alignItems: 'center' }} onPress={this.onSearch}>
            <Image source={IMG.searchGreen} style={{ width: 22, height: 22 }} />
          </TouchableOpacity>
          <TextInput
            autoFocus
            style={{ flex: 9, height: 40 }}
            onChangeText={(text) => { onChangeText(text)}}
            value={text}
          />
          {!!text && (
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
