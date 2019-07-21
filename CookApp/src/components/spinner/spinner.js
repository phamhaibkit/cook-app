import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { COLOR } from '../../utils/variables';

export default class Spinner extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', paddingTop: 30 }}>
        <ActivityIndicator size='small' color= {COLOR.greenColor} />
      </View>
    );
  }
}
