import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Modal from 'react-native-modal';

import { COLOR, CSS, IMG } from '../../utils/variables';
import {  LANG } from '../../lang/lang';
import styles from './user-reviewing-recipe-style';
import { getCurrencyStr, kFormatter } from '../../utils/general';
import userService from '../../services/user.service';

renderFrame = (recipes) => {
  console.log('renderFrame: ', recipes);
  recipes &&  (recipes.map((item, index) => {
    const horizaltalStyle =
    recipes.length - 1 === index
      ? [styles.frame, styles.endFrame]
      : styles.frame;
    return (
      <View style={[{ flex: 1, paddingVertical: 5 }, CSS.lightBoxShadowItem]} key={index}>
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
              <Image style={styles.personImg} source={IMG.personHome} />
              <Text style={styles.textTime}>
                {kFormatter(item.numPeople)}
                <Text> {LANG.PERSON}</Text>
              </Text>
            </View>
            <View style={styles.lineView}>
              <View style={styles.line} />
            </View>
            <View style={styles.dollaView}>
              <Image style={styles.dollaImg} source={IMG.dollaHome} />
              <Text style={styles.textTime}>
                20/11/2019, 19:32
              </Text>
            </View>
          </View>

          <View>
            <View style={isHorizontal ? styles.recipeView : styles.imgVer}>
              <TouchableWithoutFeedback onPress={this.onPress}>
                <Image style={styles.recipeIMG} source={{ uri: item.recipeImage }} />
              </TouchableWithoutFeedback>
            </View>
          </View>          
        </View>
      </View>
    )
  }));
}

class WaitingReviewRecipe extends Component {  
  render(){
    const { recipes } = this.props;

    return (<View style={styles.container}>
      <View style={[CSS.flexRow]}>
        <Image source={IMG.stickNote} style={{width: 18, height: 18, marginRight: 5}}/>
        <Text>{LANG.WAITING_NOTE}</Text>
        { renderFrame(recipes) }
      </View>
    </View>)
  }
}

class RejectRecipe extends Component {
  render(){
    const { recipes } = this.props;
    return <Text>RejectRecipe</Text>
  }
}

export default class UserReviewingRecipe extends Component {
  constructor(props){
    super(props);
    this.state = {
      waitingReviewRecipes: userService.waitingReviewRecipes
    }
  }

  componentDidMount(){
    this.getwaitingReviewRecipes(1);
  }

  getwaitingReviewRecipes = (userId) => {
    userService.getWaitingReviewRecipes(userId).then(() => {
      this.setState({
        waitingReviewRecipes: userService.waitingReviewRecipes
      })
    })
  }

  render() {
    const { waitingReviewRecipes } = this.state;

    console.log('waitingReviewRecipes ', waitingReviewRecipes);
    return (
      <ScrollableTabView 
        tabBarActiveTextColor ={COLOR.greenColor} 
        tabBarTextStyle={styles.tabBarTextStyle}
        tabBarUnderlineStyle ={styles.tabBarUnderlineStyle }
        tabBarInactiveTextColor="#999"
      >
        <WaitingReviewRecipe tabLabel="Chờ duyệt" recipes={waitingReviewRecipes.waiting_recipes}/>
        <RejectRecipe tabLabel="Từ chối" recipes={waitingReviewRecipes.reject_recipes}/>
      </ScrollableTabView>
    );
  }
}


