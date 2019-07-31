import React, { Component } from 'react';
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import { LANG } from '../../lang/lang';
import { IMG, COLOR, CSS } from '../../utils/variables';

export default class SearchBarInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFocus: false
    }
  }

  onFocus = () => {
    this.setState({
      isFocus: true
    })
    this.props.onFocus();
  }

  onBlur = () => {
    this.setState({
      isFocus: false
    })
    this.props.onBlur();
  }

  onCancel = () => {
    this.props.onCancel();  
  }

  onSearch = () => {
    this.props.onSearch();  
  }

  render() {
    const { isFocus } = this.state;
    return (
      <View style={{backgroundColor: COLOR.whiteColor, paddingHorizontal: CSS.padding15, paddingVertical: 8,flexDirection: 'row'}}>
          <View style={{ flex: 9,flexDirection: 'row', overflow: 'hidden', backgroundColor: '#F8F8F8', borderRadius: 10, paddingHorizontal: 15}}>
            <TextInput onFocus={this.onFocus} onBlur={this.onBlur} style={{ flex: 9, height: 40}}/>
            <TouchableOpacity style={{ flex: 1, height: 40,  justifyContent: 'center', alignItems: 'center'}} onPress={this.onSearch}>
              <Image source={IMG.searchGreen} style={{ width: 22, height: 22 }} />
            </TouchableOpacity>
          </View>
          {isFocus && (
            <TouchableOpacity style={{flex: 1, alignItems: 'flex-end',justifyContent: 'center'}} onPress={this.onCancel}>
              <Text style={{fontFamily: CSS.fontTitle, fontSize: 15, color: COLOR.greenColor}}>{LANG.CANCEL}</Text>
            </TouchableOpacity>
          )}
        </View>
    );
  }

}
