import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Image } from 'react-native-elements';

import styles from './user-draft-recipe-style';
import { CSS, COLOR, IMG } from '../../utils/variables';
import { LANG } from '../../lang/lang';
import userService from '../../services/user.service';

export default class UserDraftRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...userService.getUserDraftRecipe
    }
  }

  componentDidMount() {
    this.getDraftRecipes(1);
  }

  getDraftRecipes = (userId) => {
    userService.getUserDraftRecipe(userId).then(() => {      
      this.setState({
        ...userService.getUserDraftRecipe
      });
    });
  }  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.block}>
        <Image source={IMG.clearInput} style={{width: 22, height: 22, position: 'absolute', right: -26, top: -26}}/>
          <Text style={[CSS]}>Mì Udon Súp Miso và Thịt Heo Cay</Text>       
          <View style={[CSS.flexRow]}>
            <Image source={IMG.grayCalendar} style={{width: 15, height: 15}}/>
            <Text>
              {LANG.SAVED_DAY}
              <Text>19:32 - 04/06/2019</Text>
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

