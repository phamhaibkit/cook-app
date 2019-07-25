import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { IMG } from '../../utils/variables';
import InputSpinner from 'react-native-input-spinner';

export default class PlusSubsNumber extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: 1
    }
  }
  render() {
    return (
      <View >
        <InputSpinner
          style={{width: '100%', height: 40, alignItems: 'center', borderRadius: 5, borderColor: '#E0E0E0',borderWidth: 1}}
          max={1000}
          min={0}
          step={1}
          color={"white"}
          colorMax={"white"}
          colorMin={"white"}
          value={this.state.number}
          onChange={(num) => { console.log(num) }}
          buttonTextColor={'green'}
          colorPress= {'white'}
          fontSize={15}
          background= {'white'}
          buttonFontSize={30}
          rounded={false}
          buttonStyle={{width: 40, height: 40, borderRadius: 5, backgroundColor: 'transparent', borderColor: '#E0E0E0',borderWidth: 1}}
          />
          
      </View>
    );
  }
}