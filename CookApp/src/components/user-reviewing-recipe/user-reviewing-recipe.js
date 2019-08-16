import React, { Component } from 'react';
import { ActivityIndicator , Text, View, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Modal from 'react-native-modal';

import { COLOR, CSS, IMG } from '../../utils/variables';
import { LANG } from '../../lang/lang';
import styles from './user-reviewing-recipe-style';
import userService from '../../services/user.service';
import navigationService from '../../services/navigation.service';
import { ROUTES } from '../../utils/routes';
import ReviewRecipeItem from '../review-recipe-item/review-recipe-item';

class WaitingReviewRecipe extends Component { 
  constructor(props){
    super(props);
    this.state={
      isModalVisible: false,
      recipe: {}
    }
  }
  
  renderFrame = (recipes) => {
    console.log('renderFrame: ', recipes);
    if(recipes){
      return recipes.map((item, index) => { 
        const lastCardStyle = index === recipes.length - 1 ? { marginBottom: 15 } : {};
        return <ReviewRecipeItem 
          key={item.id}
          item={item}
          lastCardStyle={lastCardStyle}
          onDetailPress={this.openReport}
          onReportPress={this.openReport}
          onReasonPress={this.openReport}
        />
    })};
  }

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

  render(){
    const { recipes } = this.props;

    return (<View style={[CSS.draftContainer, {backgroundColor: COLOR.backgroundColor}]}>   
      <ScrollView 
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={[CSS.flexRow, CSS.frameWrap]}>
          <Image source={IMG.stickNote} style={{width: 18, height: 18, marginRight: 5}}/>
          <Text>{LANG.WAITING_NOTE}</Text>        
        </View>
        { this.renderFrame(recipes) }
      </ScrollView>
      <Modal
        isVisible={this.state.isModalVisible}
        onBackdropPress={this.closeReport}
        onBackButtonPress={this.closeReport}
        swipeDirection={['down']}
        style={styles.modal}
      >
        <View style={styles.containerModel}>
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
    </View>)
  }
}

class RejectRecipe extends Component {
  constructor(props){
    super(props);
    this.state={
      isModalVisible: false,
      recipe: {}
    }
  }

  seeTheReason = (id) => {
    navigationService.navigate(ROUTES.userDraftRecipeReject.key)
  }
  
  renderFrame = (recipes) => {
    if(recipes){
      return recipes.map((item, index) => { 
        const lastCardStyle = index === recipes.length - 1 ? { marginBottom: 15 } : {};
        return <ReviewRecipeItem 
          key={item.id}
          item={item}
          hasRejectLabel
          lastCardStyle={lastCardStyle}
          onDetailPress={this.openReport}
          onReportPress={this.openReport}
          onReasonPress={() => this.seeTheReason(item.id)}
        />
    })};
  }

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

  render(){
   const { recipes } = this.props;

    return (<View style={[CSS.draftContainer, {backgroundColor: COLOR.backgroundColor}]}>   
      <ScrollView 
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        { this.renderFrame(recipes) }
      </ScrollView>
      <Modal
        isVisible={this.state.isModalVisible}
        onBackdropPress={this.closeReport}
        onBackButtonPress={this.closeReport}
        swipeDirection={['down']}
        style={styles.modal}
      >
        <View style={styles.containerModel}>
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
    </View>)
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


