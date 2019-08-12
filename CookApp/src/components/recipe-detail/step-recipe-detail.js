import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSS, IMG } from '../../utils/variables';

export default class StepRecipeDetail extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  constructor(props) {
    super(props);
    this.state = {
      activeImage: 0,
    };
  }

  render() {
    const { data } = this.props;
    const { stepImages, stepDetail } = data.infor;
    const { activeImage } = this.state;
    return <View style={[styles.stepsSection, !data.lastChild ? CSS.borderBottom : '']}>
      <View style={[CSS.flexRow, CSS.alignItemsCenter, { marginBottom: 7 }]}>
        <Image style={{ height: 6, width: 6, marginRight: 5 }} source={IMG.greenCircle} />
        <Text style={[CSS.fontSize14, CSS.fontQuiBold, styles.colorTextDark]}>Bước {data.stepNumber}</Text>
      </View>
      {stepImages && stepImages.length !== 0 && <View style={[styles.stepImages]}>
        <Image style={[{ height: 214, width: '100%', borderRadius: 5, marginBottom: 5 }]} source={{ uri: stepImages[activeImage] }} />
        <View style={[CSS.flexRow, CSS.alignItemsCenter, CSS.justifyContentCenter]}>
          {
            stepImages.map((itemImage, index) => {
              return <TouchableOpacity
                style={{ paddingHorizontal: 1 }}
                onPress={() => {
                  this.setState({
                    activeImage: index
                  });
                }}
                key={index}><View>
                  <Image source={{ uri: itemImage }} style={{ height: 66, width: 85, borderRadius: 5, tintColor: 'white' }} />
                  <Image source={{ uri: itemImage }} style={{ height: 66, width: 85, borderRadius: 5, position: 'absolute', opacity: activeImage === index ? 1 : 0.3 }} />
                </View>
              </TouchableOpacity>;
            })}
        </View>
      </View>}

      <View style={[{ marginTop: 7 }]}>
        <Text style={[CSS.fontSize14, CSS.fontQuiRegular, { lineHeight: 24 }]}>
          {stepDetail}
        </Text>
      </View>
    </View>;
  }
}

const styles = StyleSheet.create({
  stepsSection: {
    flex: 1,
    marginTop: 22,
    paddingBottom: 15,
  },
});