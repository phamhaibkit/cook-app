import React, { Component } from 'react';
import { TouchableHighlight, View, Image } from 'react-native';

import { CSS, COLOR, IMG } from '../../utils/variables';
import styles from './increater-button-without-number-style';

export default class IncreaterButtonWithoutNumber extends Component {
  render() {
    const { isPlus, btnStyle, onPress } = this.props;
    const borderBtnColor = isPlus ? COLOR.greenColor : COLOR.lightGrayColor;
    const imageBtnSrc =  isPlus ? IMG.plusSign : IMG.substractSign;
    const imageBtnWide = isPlus ? {width: 12, height: 12} : {width: 13, height: 1};
    return (        
      <View style={btnStyle}>
        <TouchableHighlight 
          style={[{ borderColor: borderBtnColor }, styles.buttonStyle,  CSS.alignItemsCenter, CSS.justifyContentCenter]}
          onPress={onPress}
        > 
          <Image source={imageBtnSrc} style={imageBtnWide}/>
        </TouchableHighlight>
      </View>   
    );
  }
}
