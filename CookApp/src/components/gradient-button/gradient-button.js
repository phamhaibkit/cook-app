import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { CSS, COLOR } from '../../utils/variables';

export default class GradientButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, onPress, inActive } = this.props;
    return (
      <LinearGradient 
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={inActive ? ['#DDDDDD','#DDDDDD'] : [COLOR.gradientLeft, COLOR.gradientRight]}
        style={{
          borderRadius: 5,
          height: 40
        }}>

        <TouchableOpacity
          style={{
            height: 40, width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => onPress && onPress()}
          underlayColor={'transparent'}
        >
          <Text style={CSS.textTitleButton}>{label}</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}
