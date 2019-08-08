import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';

import styles from './user-draft-recipe-style';
import { CSS, COLOR, IMG } from '../../utils/variables';
import { LANG } from '../../lang/lang';
import userService from '../../services/user.service';
import ConfirmModal from '../../components/modal/confirm-modal';

export default class UserDraftRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...userService.userDraftRecipes,
      modalVisible: false,
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

  // setModalVisible(visible) {
  //   this.setState({modalVisible: visible});
  // }

  handleDeleteDraft = id => {
    this.setState({modalVisible: true});
  }

  handle = () => {

  }

  renderDraftRecipe = (draftRecipes) => {
    return (
      draftRecipes.map((item, index) => {
        return (
          <View style={styles.block} key={index}>
            <TouchableOpacity 
              underlayColor="transparent"
              style={{width: 22, height: 22, position: 'absolute', zIndex: 999, right: -10, top: -10}}
              onPress={() => this.handleDeleteDraft(item.id)}
            >
              <Image source={IMG.clearInput} style={{width: 22, height: 22}}/>
            </TouchableOpacity>          
            <Text style={[CSS.fontQuiBold, CSS.fontSize14, { color: COLOR.oldPrice, marginBottom: 6}]}>{ item.name }</Text>       
            <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
              <Image source={IMG.grayCalendar} style={{width: 15, height: 15, marginRight: 10}}/>
              <Text>
                {LANG.SAVED_DAY}
                <Text>{ item.createTime }</Text>
              </Text>
            </View>
          </View>
       );
      })
    );
  }

  render() {
    const { draftRecipes, modalVisible } = this.state;
    console.log('draftRecipes ', draftRecipes);

    return (
      <View style={styles.container}>
        <ConfirmModal
          modalVisible={modalVisible}
          onDeletePress={this.handle}
          content={{
            title: `${LANG.DELETE_ORDER_DRAFT}`,
            message: `${LANG.DELETE_ORDER_DRAFT_CONFIRM}`
          }}           
        />
        { draftRecipes && this.renderDraftRecipe(draftRecipes) }
      </View>
    );
  }
}

