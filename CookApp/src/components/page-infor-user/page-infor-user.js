import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class PageInforUser extends Component {
  static propTypes = {
    prop: PropTypes
  }
  
  componentWillMount() {
    console.log('disss')
  }

  render() {
    return (
      <View>
        <Text> prop </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    fontFamily: 'Nunito',
    paddingHorizontal: 30,
    flex: 1,
    // height: '100%',
    // alignItems: 'stretch',
  },
  Input: {
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    flex: 1,
  },
  titlePage: {
    marginVertical: 25,
    fontSize: 16,
    color: '#001D12'
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginBottom: 20
  },
});