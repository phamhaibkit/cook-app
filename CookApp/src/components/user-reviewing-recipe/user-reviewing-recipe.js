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
import Spinner from '../spinner/spinner';

class WaitingReviewRecipe extends Component { 
  constructor(props){
    super(props);
    this.state={
      isModalVisible: false,
      recipe: {}, 
    }
  }
  
  renderFrame = (recipes) => {
    if(!recipes.loading){
      return recipes.map((item, index) => { 
        const lastCardStyle = index === recipes.length - 1 ? { marginBottom: 20 } : {};
        return <ReviewRecipeItem 
          key={item.id}
          item={item}
          lastCardStyle={lastCardStyle}
          onDetailPress={() => this.gotoDetail(item.id)}
          onReportPress={this.openReport}
        />
    })};
  }

  gotoDetail = (id) => {
    alert('Go to recipe With id = ' + id);
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
    return (
      <View>
        {
          !!recipes.loading ? <Spinner /> :
          <View>
            <ScrollView 
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              <View style={[CSS.flexRow, CSS.frameWrap, {marginBottom: 5}]}>
                <Image source={IMG.stickNote} style={{width: 18, height: 18, marginRight: 5}}/>
                <Text style={[CSS.textAlignJustify, {flex: 9}]}>{LANG.WAITING_NOTE}</Text>        
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
        </View>
        }
      </View>
    );
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

  gotoDetail = (id) => {
    alert('Go to recipe With id = ' + id);
  }

  seeTheReason = (item) => {
    navigationService.navigate(ROUTES.userDraftRecipeReject.key, { item })
  }
  
  renderFrame = (recipes) => {
    if(!recipes.loading){
      return recipes.map((item, index) => { 
        const lastCardStyle = index === recipes.length - 1 ? { marginBottom: 20 } : {};
        return <ReviewRecipeItem 
          key={item.id}
          item={item}
          hasRejectLabel
          lastCardStyle={lastCardStyle}
          onDetailPress={() => this.gotoDetail(item.id)}
          onReportPress={this.openReport}
          onReasonPress={() => this.seeTheReason(item)}
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

    return (<View style={CSS.draftContainer}>   
      {
        !!recipes.loading ? <Spinner /> :
        (
          <View>
             <ScrollView 
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              <View style={{marginTop: 5}}></View>
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
          </View>
        )
      }
    </View>)
  }
}

export default class UserReviewingRecipe extends Component {
  constructor(props){
    super(props);
    this.state = {
      waitingReviewRecipes: userService.waitingReviewRecipes,
      userRejectRecipes: userService.userRejectRecipes
    }
  }

  componentDidMount(){
    this.getWaitingReviewRecipes(1);
    this.getUserRejectRecipes(1);
  }

  getWaitingReviewRecipes = (userId) => {
    userService.getWaitingReviewRecipes(userId).then(() => {
      this.setState({
        ...userService.waitingReviewRecipes
      })
    })
  }

  getUserRejectRecipes = (userId) => {
    userService.getUserRejectRecipes(userId).then(() => {
      this.setState({
        ...userService.userRejectRecipes
      })
    })
  }


  render() {
    const { waitingReviewRecipes, userRejectRecipes } = this.state;
    return (
      <ScrollableTabView 
        tabBarActiveTextColor ={COLOR.greenColor} 
        tabBarTextStyle={CSS.tabBarTextStyle}
        tabBarUnderlineStyle ={CSS.tabBarUnderlineStyle}
        tabBarInactiveTextColor="#999"
        tabStyle={[{borderWidth: 0, borderColor: '#fff', paddingBottom: 0}]}        
        underlineStyle={{borderColor: 0, borderColor: '#fff'}}
      >
        <WaitingReviewRecipe tabLabel={LANG.WAITING_ACCEPT} recipes={waitingReviewRecipes}/>
        <RejectRecipe tabLabel={LANG.REJECT} recipes={userRejectRecipes}/>
      </ScrollableTabView>
    );
  }
}


