import React, { Component } from 'react';
import { View } from 'react-native';
import RecipeHighlightHome from '../recipe-highlight-home/recipe-highlight-home';
import { COLOR } from '../../utils/variables';
import recipeService from '../../services/recipe.service';

export default class RecipeLikedList extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: []
    }
  }

  componentWillMount() {
    recipeService.getRecipeLikedList(1).then(() => {
      this.setState({
        recipes: recipeService.recipeLikedData.recipes
      })
    })
  }
  
  render() {
    const { recipes } = this.state;
    return (
      <View style={{ flex: 1, paddingHorizontal: 15, backgroundColor: COLOR.backgroundColor }}>
        <RecipeHighlightHome recipes={recipes} isLiked/>
      </View>
    );
  }
}