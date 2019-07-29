import React, { Component } from 'react';
import { View } from 'react-native';
import RecipeHighlightHome from '../recipe-highlight-home/recipe-highlight-home';
import { COLOR } from '../../utils/variables';
import recipeService from '../../services/recipe.service';


export default class RecipeHighlightList extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: []
    }
    this.recipes;
  }

  componentWillMount() {
    recipeService.getRecipeHighLightList().then(() => {
      this.setState({
        recipes : recipeService.recipeHighLightData.recipes
      })
    })
  }
  render() {
    const { recipes } = this.state;
    return (
      <View style={{ flex: 1, paddingHorizontal: 15, backgroundColor: COLOR.backgroundColor }}>
        <RecipeHighlightHome recipes={recipes}/>
      </View>
    );
  }
}