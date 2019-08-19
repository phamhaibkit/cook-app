import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import RecipeHighlightHome from '../recipe-highlight-home/recipe-highlight-home';
import { COLOR, CSS, IMG } from '../../utils/variables';
import recipeService from '../../services/recipe.service';
import { LANG } from '../../lang/lang';
import BackButton from '../back-button/back-button';
import navigationService from '../../services/navigation.service';
import { ROUTES } from '../../utils/routes';


export default class RecipeHighlightList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: LANG.RECIPE_HIGHLIGHT.name,
      headerLeft: <BackButton isGreen />,
      headerTitleStyle: {
        fontSize: 16,
        fontFamily: CSS.fontBold,
        color: "#001D12"
      },
      headerRight: <TouchableOpacity onPress={navigation.getParam('naviToSearch')} style={{paddingHorizontal: 15}}>
        <Image source ={IMG.searchGreen} style={{width: 22, height: 22}}/>
      </TouchableOpacity>,
      headerTitleContainerStyle: {
        flex: 1,
        justifyContent: "center",
        shadowRadius: 0,
        shadowOffset: {
          height: 0
        }
      }
    };
  };

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

  componentDidMount() {
    this.props.navigation.setParams({ naviToSearch: this.naviToSearch });
  }

  naviToSearch = () => {
    navigationService.navigate(ROUTES.pageSearchRecipe.key)
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