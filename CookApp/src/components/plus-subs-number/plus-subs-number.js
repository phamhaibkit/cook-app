import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { IMG, CSS, COLOR } from '../../utils/variables';

export default class PlusSubsNumber extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {incrementCart, decrementCart, number} = this.props;
    return (
      <View style={{width: '100%', height: 40, flexDirection: 'row', borderRadius: 5, borderColor: COLOR.borderAddCart, borderWidth: 1, alignItems: 'center'}}>
        <TouchableOpacity style={{flex: 1, paddingVertical: 17,paddingHorizontal: 5, alignItems: 'center'}} onPress={decrementCart}>
          <Image source={IMG.substractSign} style={{width: 15, height: 1}}/>
        </TouchableOpacity>
        <View style={{width: 1, height: 40, backgroundColor: COLOR.borderAddCart}}/>
        <View style={{flex: 4, alignItems: 'center'}}>
          <Text style={{fontSize: 18, fontFamily: CSS.fontText, color: COLOR.blackName}}>{number}</Text>
        </View>
        <View style={{width: 1, height: 40, backgroundColor: COLOR.borderAddCart}}/>
        <TouchableOpacity style={{flex: 1, paddingVertical: 12, paddingHorizontal: 5, alignItems: 'center'}} onPress={incrementCart}>
          <Image source={IMG.plusSign} style={{width: 15, height: 15}}/>
        </TouchableOpacity>
      </View>
    );
  }
}
