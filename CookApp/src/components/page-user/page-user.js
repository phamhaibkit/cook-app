
import React, { Component } from 'react';
//import react in our code.
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
//import all the basic component we have used

export default class PageUser extends Component {
  //Detail Screen to show from any Open detail button
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Page User!</Text>
      </View>
    );
  }
}