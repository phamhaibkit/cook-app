import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import RecipeHighlightHome from '../recipe-highlight-home/recipe-highlight-home';
import { RECIPES } from '../../models/data';
import { COLOR } from '../../utils/variables';

export default class RecipeHighlightList extends Component {
  render() {
    return (
      <View style={{ flex: 1, paddingHorizontal: 15, backgroundColor: COLOR.backgroundColor }}>
        <RecipeHighlightHome recipes={RECIPES} />
      </View>
    );
  }
}