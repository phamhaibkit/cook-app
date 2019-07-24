import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import RecipeHighlightHome from '../recipe-highlight-home/recipe-highlight-home';
import { COLOR } from '../../utils/variables';

export default class RecipeHighlightList extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const { navigation } = this.props;
    const isHightLight = navigation && navigation.state.params;
    return (
      <View style={{ flex: 1, paddingHorizontal: 15, backgroundColor: COLOR.backgroundColor }}>
        <RecipeHighlightHome isHightLight={isHightLight}/>
      </View>
    );
  }
}