import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Modal from "react-native-modal";
import _ from 'lodash';

import {  CSS, COLOR } from "../../utils/variables";
import { LANG } from "../../lang/lang";

export default class ConfirmModal extends Component {
  constructor(props){
    super(props);
    this.state={
      isVisible: false
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({isVisible: nextProps.modalVisible})
  }

  hideModal = () => {
   this.setState({
     isVisible: false
   });
  }

  render() {
    const { content, onBackdropPress } = this.props;
    const title = _.get(content, 'title', '');
    const message = _.get(content, 'message', '');
    console.log('children render');
    return (
      <View>
        <Modal 
          isVisible={this.state.isVisible} 
          style={[CSS.justifyContentCenter, CSS.alignItemsCenter, { zIndex: 1 }]}
          onBackdropPress={this.hideModal}>
          <View style={{backgroundColor: COLOR.whiteColor, borderRadius: 3, overflow: 'hidden'}}>
            <View style={[{padding: 20}]}>
              <Text style={[CSS.fontNuExBold, CSS.fontSize20, { color: '#333'}]}>{title}</Text>
              <Text style={[CSS.fontQuiRegular, CSS.fontSize15, { marginTop: 15 }]}>{message}</Text>
            </View>
            <View style={[CSS.flexRow, CSS.alignItemsCenter, CSS.justifySpaceBetween, {marginTop: 20}]}>
              <Button
                title={LANG.CANCEL}                  
                containerStyle={[styles.buttonContainerStyle]}
                buttonStyle={[styles.buttonStyles]}
                titleStyle={styles.buttonTitleStyle}
                type="outline"
                onPress={this.hideModal}
              />
              <Button
                title={LANG.DELETE}
                buttonStyle={[styles.buttonStyles, { borderWidth: 0 }]}
                titleStyle={[styles.buttonTitleStyle, {color: COLOR.whiteColor}]}
                containerStyle={[styles.buttonContainerStyle]}
                type="outline"
                ViewComponent={LinearGradient} 
                linearGradientProps={{
                   start: { x: 0, y: 0 },
                   end: { x: 1, y: 1 } ,
                   colors: ['#3BB556', '#72C91C']
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainerStyle: {
    width: '50%'
  },
  buttonStyles: {
    width: '100%',
    paddingHorizontal: 25,
    borderWidth: 0.8,
    borderColor: '#f2f2f2'
  },
  buttonTitleStyle: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 15,
    color: COLOR.greenColor,    
  }
});