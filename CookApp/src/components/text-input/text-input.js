import React, { Component } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { IMG, CSS } from '../../utils/variables';
import styles from './tex-input-style';

export class TextInputRender extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { title, placeholder, value, onChangeText, error, inputErrorStyle, secureTextEntry, styleConfig, icon, noMargin } = this.props;
    return <View style={[!noMargin ? styles.inputSection : {}]}>
      {title && <Text style={[CSS.fontSize14, { fontFamily: CSS.fontTitle, color: '#444444', marginBottom: 6 }]}>{title}</Text>}
      <View style={styles.SectionStyle}>
        {icon && <View style={styles.ImageStyle}>
          <Image
            source={icon}
            style={styles.image}
            resizeMode="contain"
          />
        </View>}

        <TextInput
          value={value}
          style={[styles.Input, icon ? { paddingLeft: 20 } : '', CSS.fontQuiRegular, styleConfig ? styleConfig : '']}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          underlineColorAndroid="transparent"
          onChangeText={onChangeText}
          placeholderTextColor="#CECECE"
          placeholderStyle={CSS.placeholderStyle}
        />
      </View>
    </View>;
  }
}

export default TextInputRender;


