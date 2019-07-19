import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { CSS } from '../../utils/variables';

const img = {
  uri:
    'https://image.shutterstock.com/image-photo/mix-fresh-green-fruits-on-260nw-571146373.jpg'
};


export default class Advertiment extends Component {
  render() {
    const { paddingHori } = this.props;
    return (
      <View style={{
        marginTop: 30,
        height: 120,
        marginHorizontal: paddingHori,
        borderRadius: 10,
        overflow: 'hidden'
      }}>
        <Image style={{ height: 120, width: null }} source={img} resizeMode="cover" />
      </View>
    );
  }
}
