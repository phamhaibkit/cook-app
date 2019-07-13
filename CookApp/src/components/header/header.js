import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSS } from '../../utils/variables';

export default class Header extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <View style={{ backgroundColor: 'red', flex: 1 }}>
        <Text style={[CSS.fontNuExBold, CSS.textAlignCenter]}> ấdasdasdasd </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    flex: 1,
    fontSize: 16,
  }
});
