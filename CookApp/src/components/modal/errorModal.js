import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";
import Modal from "react-native-modal";
import _ from 'lodash'
import { IMG, CSS } from "../../utils/variables";

export default class ErrorModalComponent extends Component {
  static propTypes = {
    content: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    }
  }

  render() {
    const { content, onBackdropPress } = this.props;
    const title = _.get(content, 'title', '');
    const message = _.get(content, 'message', '');
    return (
      <View>
        <Modal isVisible={true} style={[CSS.justifyContentCenter, CSS.alignItemsCenter, { zIndex: 1 }]}
          onBackdropPress={() => onBackdropPress()}>
          <View style={[{ backgroundColor: 'transparent', width: 280, height: 200 }, CSS.justifyContentCenter, CSS.alignItemsCenter]}>
            <View style={[{ zIndex: 99, backgroundColor: 'white', width: 280, height: 150, borderRadius: 3, paddingHorizontal: 24, zIndex: 1 }, CSS.justifyContentCenter, CSS.alignItemsCenter]}>

              <Text style={[CSS.fontNuExBold, CSS.fontSize18, CSS.textAlignCenter, { color: '#001D12', textTransform: 'uppercase' }]}>{title}</Text>
              <Text style={[CSS.fontQuiRegular, CSS.fontSize15, CSS.textAlignCenter, { marginTop: 10 }]}>{message}</Text>
            </View>
          </View>

        </Modal>
      </View>
    );
  }
}