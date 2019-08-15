import React, { Component } from 'react';
import { ActivityIndicator , Text, View, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Modal from 'react-native-modal';

import { COLOR, CSS, IMG } from '../../utils/variables';
import { LANG } from '../../lang/lang';
import styles from './user-reviewing-recipe-style';
import { getCurrencyStr, kFormatter } from '../../utils/general';
import userService from '../../services/user.service';

renderFrame = (recipes) => {
  console.log('renderFrame: ', recipes);
  if(recipes){
    return recipes.map((item) => {
      return (
        <View style={[{ flex: 1 }]} key={item.id}>
          <View style={[styles.frameVer,  CSS.lightBoxShadow]}>
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
                  {item.executeTime}
                </Text>
              </View>            
              <View style={styles.lineView}>
                <View style={styles.line} />
              </View>
              <View style={styles.dollaView}>
                <Image style={styles.personImg} source={IMG.personHome} />
                <Text style={styles.textTime}>
                  {kFormatter(item.numberPeople)}
                  <Text> {LANG.PERSON}</Text>
                </Text>
              </View>
              <View style={styles.lineView}>
                <View style={styles.line} />
              </View>
              <View style={styles.dollaView}>
                <Image style={styles.calendarImg} source={IMG.grayCalendar} />
                <Text style={styles.textTime}>
                  {item.createTime}
                </Text>
              </View>
            </View>

            <View>
              <View style={styles.imgVer}>
                <TouchableWithoutFeedback onPress={this.onPress}>
                  <Image 
                    style={styles.recipeIMG} 
                    source={{ uri: item.recipeImage }}
                    PlaceholderContent={<ActivityIndicator />}
                   />
                </TouchableWithoutFeedback>
              </View>
            </View>          
          </View>
        </View>
      )
  })};
}

class WaitingReviewRecipe extends Component {  
  render(){
    const { recipes } = this.props;

    return (<View style={CSS.draftContainer}>   
      <ScrollView 
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={[CSS.flexRow]}>
          <Image source={IMG.stickNote} style={{width: 18, height: 18, marginRight: 5}}/>
          <Text>{LANG.WAITING_NOTE}</Text>        
        </View>
        {renderFrame(recipes)}
      </ScrollView>
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
        ...userService.waitingReviewRecipes
      })
    })
  }

  render() {
    const { waitingReviewRecipes } = this.state;

    console.log('waitingReviewRecipes ', waitingReviewRecipes);
    return (
      <ScrollableTabView 
        tabBarActiveTextColor ={COLOR.greenColor} 
        tabBarTextStyle={CSS.tabBarTextStyle}
        tabBarUnderlineStyle ={CSS.tabBarUnderlineStyle }
        tabBarInactiveTextColor="#999"
      >
        <WaitingReviewRecipe tabLabel={LANG.WAITING_ACCEPT} recipes={waitingReviewRecipes.waiting_recipes}/>
        <RejectRecipe tabLabel={LANG.REJECT} recipes={waitingReviewRecipes.reject_recipes}/>
      </ScrollableTabView>
    );
  }
}


