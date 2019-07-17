import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import SearchBarInput from '../search-bar-input/search-bar-input';
import MostSearched from '../most-searched/most-searched';
import { LANG } from '../../lang/lang';
import styles from './page-search-recipe-style';
 
export default class PageSearchRecipe extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBarInput />
        <Text style={styles.bestSellText}>{LANG.BEST_SEARCH}</Text>
        <MostSearched label={LANG.RECIPE}/>
      </View>
    );
  }
}