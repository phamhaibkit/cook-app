import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { CSS, COLOR } from '../../utils/variables';

export default class GradientButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, onPress, inActive, style } = this.props;
    return (
      <LinearGradient 
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={inActive ? ['#DDDDDD','#DDDDDD'] : [COLOR.gradientLeft, COLOR.gradientRight]}
        style={
          [
            {
              borderRadius: 5,
              height: 40
            },
            style
          ]
        }
      >

        <TouchableOpacity
          style={
            [
              {
                height: 40,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              },
              style
            ]
          }
          onPress={() => onPress && onPress()}
          underlayColor={'transparent'}
          disabled={inActive}
        >
          <Text style={CSS.textTitleButton}>{label}</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}
