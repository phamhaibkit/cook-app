/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native';
import Modal from 'react-native-modal';
import Advertiment from '../advertiment/advertiment';
import LikeCommentShare from '../like-comment-share/like-comment-share';
import { IMG } from '../../utils/variables';
import styles from './recipe-highlight-home-style';
import { LANG } from '../../lang/lang';
import navigationService from '../../services/navigation.service';
import { ROUTES } from '../../utils/routes';
import { getCurrencyStr, kFormatter } from '../../utils/general';
import homeService from '../../services/home.service';

export default class RecipeHighlightHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      recipe: {},
      recipes: [],
      ads: homeService.adsData,
    };
  }

  componentWillReceiveProps(nextProps){
    const newRecipes = nextProps.recipes;
    const {isLiked} = this.props;
    if(isLiked){
      newRecipes.map((item, index) => {
        item.isLiked = true;
      })
    }
    this.setState({
      recipes: newRecipes
    })
  }

  onPress = (item) => {
    console.log(item, 'item')
    navigationService.navigate(ROUTES.recipeDetail.key, { id: item.id});
  };

  onShare = (recipe) => {
    homeService.shareRecipe(recipe.id).then(() => {
      console.log('Share sucess!!', homeService.shareRecipeData)
    })
  };

  openReport = (item) => {
    this.setState({
      isModalVisible: true,
      recipe: item
    });
  };

  openReportPage = () => {
    const { recipe } = this.state;
    this.closeReport();
    navigationService.navigate(ROUTES.pageReportRecipe.key, { recipe })
  }

  closeReport = () => {
    this.setState({
      isModalVisible: false
    });
  };

  onPressLove = (recipe) => {
    const { recipes } = this.state;
    homeService.likeRecipe(recipe.id).then(() => {
      // recipes && recipes.map( (item, index) => {
      //   homeService.likedEventsData && homeService.likedRecipeData.likedRecipes.map((indexLiked) => {
      //     if(item.id === indexLiked){
      //       item.isLiked = true
      //     }
      //   })
      // })
      // this.setState({
      //   recipes: recipes
      // })
      console.log('likedDatatatat', recipes);
    })
  }

  onPressSave = (recipe) => {
    const { recipes } = this.state;
    console.log('onPressSave==', recipes);
  }

  renderFrame = (recipes) => {
    const { ads } = this.state;
    const { isHorizontal } = this.props;
    return recipes.map((item, index) => {
      const horizaltalStyle =
      recipes.length - 1 === index
        ? [styles.frame, styles.endFrame]
        : styles.frame;
      const priceFormat = getCurrencyStr(item.price);
      return (
        <View style={{ flex: 1 }} key={index}>
          <View style={isHorizontal ? horizaltalStyle : styles.frameVer}>
            <View style={styles.containerTitle}>
              <TouchableOpacity style={styles.titleView} onPress={()=>this.onPress(item)}>
                <Text numberOfLines={1} style={styles.titleText}>
                  {item.name}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.reportView}
                onPress={() => { this.openReport(item)}}
              >
                <Image style={styles.dotImg} source={IMG.reportHome} />
              </TouchableOpacity>
            </View>

            <View style={styles.containerTimePrice}>
              <View style={styles.priceView}>
                <Image style={styles.sandImg} source={IMG.sandClokHome} />
                <Text style={styles.textTime}>
                  {item.timeExecute}
                </Text>
              </View>
              <View style={styles.lineView}>
                <View style={styles.line} />
              </View>
              <View style={styles.dollaView}>
                <Image style={styles.dollaImg} source={IMG.dollaHome} />
                <Text style={styles.textTime}>
                  {priceFormat}
                </Text>
              </View>
              <View style={styles.lineView}>
                <View style={styles.line} />
              </View>
              <View style={styles.dollaView}>
                <Image style={styles.personImg} source={IMG.personHome} />
                <Text style={styles.textTime}>
                  {kFormatter(item.numPeople)}
                  <Text> {LANG.PERSON}</Text>
                </Text>
              </View>
            </View>

            <View>
              <View style={isHorizontal ? styles.recipeView : styles.imgVer}>
                <TouchableWithoutFeedback onPress={this.onPress}>
                  <Image style={styles.recipeIMG} source={{ uri: item.recipeImage }} />
                </TouchableWithoutFeedback>
              </View>
              <TouchableOpacity style={styles.containerChef}>
                <Image style={styles.avataImg} source={{ uri: item.owner && item.owner.avatar }} />
                <Text style={styles.nameChef}>{item.owner && item.owner.name}</Text>
                <Image style={styles.rankImg} source={IMG.rankHome} />
              </TouchableOpacity>
            </View>

            <LikeCommentShare item={item} onLove={this.onPressLove} onShare={this.onShare} onSave={this.onPressSave}/>
          </View>
          {/* {!isHorizontal && (index + 1) % 2 === 0 && <Advertiment data={ads} marginTop={10}/>} */}
        </View>
      )
    });
  };

  render() {
    const { isHorizontal, marTop } = this.props;
    const { isModalVisible, recipes } = this.state;
    return (
      <View style={[styles.container, { marginTop: marTop }]}>
        {recipes.length > 0 &&
          <ScrollView 
            horizontal={isHorizontal}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            {this.renderFrame(recipes)}
          </ScrollView>
        }
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={this.closeReport}
          onBackButtonPress={this.closeReport}
          swipeDirection={['down']}
          style={styles.modal}
        >
          <View style={styles.containerModel}>
            {/* <TouchableOpacity style={styles.barButton} onPress={this.closeReport}>
              <Image source={IMG.modalBar} style={styles.modalImg} />
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.reportRow} onPress={this.openReportPage}>
              <Image source={IMG.reportRecipe} style={styles.reportImg} />
              <Text style={styles.reportText}>{LANG.REPORT_RECIPE}</Text>
            </TouchableOpacity>
            <View style={styles.lineReport} />
            <TouchableOpacity style={styles.reportRow} onPress={this.closeReport}>
              <Image source={IMG.closeReport} style={styles.closeImg} />
              <Text style={styles.reportText}>{LANG.CLOSE}</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}
