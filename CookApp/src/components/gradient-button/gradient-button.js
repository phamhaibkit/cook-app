import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { CSS } from '../../utils/variables';

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
          underlayColor={'transparent'}
          onPress={onPress}
        >
          <Text style={CSS.textTitleButton}>{ buttonLabel }</Text>
        </TouchableHighlight>
      </LinearGradient> 
    );
  }
}