import React, { Component } from 'react';
import { View} from 'react-native';
import { Image } from 'react-native-elements';

export default class Advertiment extends Component {
  render() {
    const { data, paddingHori, marginTop } = this.props;
    return (
      <View style={{
        marginTop: marginTop,
        height: 120,
        marginHorizontal: paddingHori,
        borderRadius: 10,
        overflow: 'hidden'
      }}>
        <Image 
          style={{ height: 120, width: '100%' }}
          source={{ uri: data && data.image}}
          resizeMode="stretch"
          />
      </View>
    );
  }
}
