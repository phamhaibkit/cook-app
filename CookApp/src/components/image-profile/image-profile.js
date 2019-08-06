import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import PropTypes from 'prop-types';
import { CSS } from '../../utils/variables';

export default class ImageProfile extends Component {
  static propTypes = {
    // user: PropTypes.Object
  }

  render() {
    const { user, widthImage } = this.props;
    let getLastCharacterName = ''
    if(!user.avatar) {
      const detailName = user.name ? user.name.split(" ") : '';
      getLastCharacterName = detailName ? detailName[detailName.length - 1].substring(0,1) : 'A';
    }
    
    const styleCircle = {
      height: widthImage, width: widthImage, borderRadius: widthImage / 2
    }
    return (
      <View>
        {user.avatar ? <Image style={[styleCircle]} source={{ uri: user.avatar }} />: <View style={[styleCircle, {backgroundColor: 'grey'}, CSS.justifyContentCenter, CSS.alignItemsCenter]}><Text style={[CSS.fontQuiBold, {color: 'white'}]}>{getLastCharacterName}</Text></View>}
        
      </View>
    )
  }
}