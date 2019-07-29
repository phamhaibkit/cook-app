import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { CSS, COLOR } from '../../utils/variables';

export default class GradientButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { start, end, colors, buttonLabel, onPress } = this.props;
    
    return (
      <LinearGradient start={ start } end={ end } colors={ colors } style={CSS.linearGradientButton}>
        <TouchableHighlight 
          style={[CSS.buttonText, CSS.alignItemsCenter, CSS.justifyContentCenter]} 
          onPress={onPress}
          underlayColor={COLOR.whiteColor}
        >
          <Text style={CSS.textTitleButton}>{ buttonLabel }</Text>
        </TouchableHighlight>
      </LinearGradient> 
    );
  }
}
