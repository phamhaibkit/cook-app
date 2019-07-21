import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';

import styles from './increater-button-with-number-style';
import { IMG, COLOR } from '../../utils/variables';

export default class IncreaterButtonWithNumber extends Component {
  render() {
    const { currentQuantity, onPressDecreaseButton, onPressIncreaseButton } = this.props;
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.w30}
          onPress={onPressDecreaseButton}
          underlayColor={COLOR.whiteColor}
        >
          <Image source={IMG.substractSign} style={styles.substractSignImg}/>
        </TouchableHighlight>
        <Text style={[styles.w30, styles.countNumber]}>{currentQuantity}</Text>
        <TouchableHighlight
          style={styles.w30}
          onPress={onPressIncreaseButton}
          underlayColor={COLOR.whiteColor}
        >
          <Image source={IMG.plusSign} style={styles.plusSignImg}/>
        </TouchableHighlight>
      </View>
    );
  }
}
