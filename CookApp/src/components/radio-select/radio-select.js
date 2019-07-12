import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import { CSS, IMG } from '../../utils/variables';

export default class RadioSelect extends Component {
  static propTypes = {
    // prop: PropTypes
    radioObject: PropTypes.any,
  }

  constructor(props) {
    super(props);

    this.state = {
      label: props.radioObject.label,
      arrayOption: props.radioObject.arrayObject,
    };
  }

  isCheck = (stt) => {
    const { arrayOption } = this.state;
    arrayOption.forEach((item, index) => {
      if (stt === index) {
        arrayOption[index].active = true;
      } else {
        arrayOption[index].active = false;
      }
    });
    this.setState({
      arrayOption,
    });
  }

  renderOption = (arrayOption) => {
    return arrayOption.map((item, index) => {
      return item.active ? <LinearGradient key={index} style={[styles.selectSection, CSS.alignItemsCenter, CSS.justifyContentCenter]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#3BB556', '#72C91C']} >
        <TouchableOpacity
          style={[CSS.flexRow, CSS.alignItemsCenter, CSS.justifyContentCenter]}
          onPress={() => this.isCheck(index)}>
          <Icon name={item.icon} size={20} color="white" style={styles.iconFacebook} />
          <Text style={[{ color: 'white' }, CSS.fontSize14, CSS.fontQuiRegular]}>{` ${item.name}`}</Text>
        </TouchableOpacity>

      </LinearGradient> : <TouchableOpacity
        key={index}
        style={[CSS.flexRow, styles.selectSection, CSS.alignItemsCenter, CSS.justifyContentCenter]}
        onPress={() => this.isCheck(index)}>
          <Icon name={item.icon} size={20} color="#3ABF57" style={styles.iconFacebook} />
          <Text style={[{ color: '#3ABF57' }, CSS.fontSize14, CSS.fontQuiRegular]}>{` ${item.name}`}</Text>
        </TouchableOpacity>;
    });
  }

  render() {
    const { arrayOption, label } = this.state;

    return (
      <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
        <View><Text style={[CSS.fontQuiBold, CSS.fontSize14, { paddingRight: 23, color: '#444444' }]}>{label}</Text></View>
        <View style={[CSS.flexRow, { borderColor: '#E0E0E0', borderWidth: 1, borderRadius: 5 }]}>
          {this.renderOption(arrayOption)}
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  selectSection: {
    height: 34,
    width: 80
  }
});
