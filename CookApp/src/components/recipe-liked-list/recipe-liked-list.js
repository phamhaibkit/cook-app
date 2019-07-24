import React, { Component } from 'react';
import { View } from 'react-native';
import RecipeHighlightHome from '../recipe-highlight-home/recipe-highlight-home';
import { COLOR } from '../../utils/variables';

export default class RecipeLikedList extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const { navigation } = this.props;
    const isLiked = navigation && navigation.state.params;
    return (
      <View style={{ flex: 1, paddingHorizontal: 15, backgroundColor: COLOR.backgroundColor }}>
        <RecipeHighlightHome isLiked={isLiked}/>
      </View>
    );
  }
}