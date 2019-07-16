import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class IconWithNumber extends Component {
  render() {
    const { iconImg, number, iconStyle } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Image source={iconImg} style={iconStyle} />
        {number > 0 && (
          <View
            style={{
              // If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -5,
              top: -5,
              backgroundColor: 'red',
              borderRadius: 9,
              width: 18,
              height: 18,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 2,
              borderColor: 'white'
            }}
          >
            <Text style={{ color: 'white', fontSize: 11, fontWeight: 'bold' }}>
              {number}
            </Text>
          </View>
        )}
      </View>
    );
  }
}
