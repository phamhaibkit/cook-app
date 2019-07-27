import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class Advertiment extends Component {
  render() {
    const { data, paddingHori } = this.props;
    return (
      <View style={{
        marginTop: 30,
        height: 120,
        marginHorizontal: paddingHori,
        borderRadius: 10,
        overflow: 'hidden'
      }}>
        <Image style={{ height: 120, width: '100%' }} source={{ uri: data && data.image }} resizeMode="stretch" />
      </View>
    );
  }
}
