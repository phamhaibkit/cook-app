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
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {number}
            </Text>
          </View>
        )}
      </View>
    );
  }
}
