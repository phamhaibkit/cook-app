import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { CSS, COLOR, IMG } from '../../utils/variables';

export default class ImageProfile extends Component {
  static propTypes = {
    // user: PropTypes.Object
  }

  render() {
    const { user, widthImage } = this.props;
    let getLastCharacterName = '';
    if (!user.avatar) {
      const detailName = user.name ? user.name.split(' ') : '';
      getLastCharacterName = detailName ? detailName[detailName.length - 1].substring(0, 1) : 'A';
    }

    const styleCircle = {
      height: widthImage, width: widthImage, borderRadius: widthImage / 2
    };
    return (
      <View style={{position: 'relative'}}>
        {user.avatar
          ? <Image style={[styleCircle]} source={{ uri: user.avatar }} /> : <View style={[styleCircle, { backgroundColor: 'grey' }, CSS.justifyContentCenter, CSS.alignItemsCenter]}>
            <Text style={[CSS.fontQuiBold, { color: 'white' }]}>{getLastCharacterName}</Text></View>}
        {user.rank && <View style={[styles.containerRank, CSS.lightBoxShadowItem]}>
          <Image source={IMG.rankHome} style={styles.rankImg} />
        </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerRank: {
    position: 'absolute',
    backgroundColor: COLOR.whiteColor,
    bottom: 0,
    right: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#FFFEEE'
  },
  rankImg: {
    position: 'absolute',
    width: 17,
    height: 17,
  },
});