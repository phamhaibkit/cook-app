import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Image } from 'react-native-elements';
import _ from 'lodash';

import { CSS, COLOR, IMG } from '../../utils/variables';
import { LANG } from '../../lang/lang';
import userService from '../../services/user.service';
import ConfirmModal from '../../components/modal/confirm-modal';
import Spinner from '../spinner/spinner';

export default class UserDraftRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...userService.userDraftRecipes,
      modalVisible: false,
      currentConfirmId: 0,
    }
  }

  componentDidMount() {
    this.getDraftRecipes(1);
  }

  getDraftRecipes = (userId) => {
    userService.getUserDraftRecipe(userId).then(() => {      
      this.setState({
        ...userService.userDraftRecipes
      });
    });
  }  

  showConfirmModal = id => {
    this.setState({
      modalVisible: true,
      currentConfirmId: id
    });
  }

  handleDeleteConfirm = () => {
    const { draftRecipes, currentConfirmId } = this.state;
    const filtered = _.filter(draftRecipes, (e) => {
      return e.id !== currentConfirmId;
    });

    this.setState({
      draftRecipes: filtered,
      modalVisible: false
    });
  }

  renderDraftRecipe = (draftRecipe, index) => {
    const { draftRecipes } = this.state;
    const blockStyles = (draftRecipes.length - 1) === index ? [CSS.block, {marginBottom: 20}] : CSS.block;

    return (
      <View style={CSS.frameWrap} key={draftRecipe.id}>
        <View style={[blockStyles, CSS.lightBoxShadow]}>                      
          <Text style={[CSS.fontQuiBold, CSS.fontSize14, { color: COLOR.oldPrice, marginBottom: 6}]}>{ draftRecipe.name }</Text>       
          <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
            <Image source={IMG.grayCalendar} style={CSS.calendarIcon}/>
            <Text>
              {LANG.SAVED_DAY}
              <Text>{ draftRecipe.createTime }</Text>
            </Text>
          </View>
        </View>

        <TouchableOpacity 
          underlayColor="transparent"
          style={CSS.closeBtn}
          onPress={() => this.showConfirmModal(draftRecipe.id)}
        >
          <Image source={IMG.clearInput} style={[CSS.w100, CSS.h100]}/>
        </TouchableOpacity>  
      </View>
    );
  }

  render() {
    const { draftRecipes, modalVisible, loading } = this.state;
    console.log('draftRecipes ', draftRecipes);

    return (
      <View style={CSS.draftContainer}>
        {
          loading ? <Spinner /> :(
            <View>
              <ConfirmModal
                modalVisible={modalVisible}
                onPressDelete={this.handleDeleteConfirm}
                content={{
                  title: `${LANG.DELETE_RECIPE_DRAFT}`,
                  message: `${LANG.DELETE_RECIPE_DRAFT_CONFIRM}`
                }}           
              />
              <View style={{marginTop: 5}}></View>
              <FlatList 
                data = {draftRecipes}
                renderItem = {({item, index}) => this.renderDraftRecipe(item, index)}          
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
              />
            </View>
          )
        }
      </View>
    );
  }
}

