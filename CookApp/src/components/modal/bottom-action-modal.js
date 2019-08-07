import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Modal from 'react-native-modal';
import { LANG } from '../../lang/lang';
import { IMG, CSS, COLOR } from '../../utils/variables';
import navigationService from '../../services/navigation.service';
import { ROUTES } from '../../utils/routes';

export class BottomActionModal extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  openReportPage = () => {
    this.props.closeReport('report')
  }

  closeReport = () => {
    this.props.closeReport()
  };

  render() {
    const { isModalVisible, closeReport } = this.props
    return (
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={closeReport}
        onBackButtonPress={closeReport}
        swipeDirection={['down']}
        style={styles.modal}
      >
        <View style={styles.containerModel}>
          {/* <TouchableOpacity style={styles.barButton} onPress={this.closeReport}>
          <Image source={IMG.modalBar} style={styles.modalImg} />
        </TouchableOpacity> */}
          <TouchableOpacity style={styles.reportRow} onPress={this.openReportPage}>
            <Image source={IMG.reportRecipe} style={styles.reportImg} />
            <Text style={styles.reportText}>{LANG.REPORT_RECIPE}</Text>
          </TouchableOpacity>
          <View style={styles.lineReport} />
          <TouchableOpacity style={styles.reportRow} onPress={this.closeReport}>
            <Image source={IMG.closeReport} style={styles.closeImg} />
            <Text style={styles.reportText}>{LANG.CLOSE}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }
}


const styles = StyleSheet.create({
  containerModel: {
    width: '100%',
    height: '25%',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0
  },
  modalImg: {
    width: 56,
    height: 4,
  },
  reportRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '50%',
    paddingLeft: 20
  },
  reportImg: {
    width: 19,
    height: 18
  },
  closeImg: {
    width: 19,
    height: 16
  },
  reportText: {
    fontFamily: CSS.fontText,
    fontSize: 14,
    color: COLOR.blackReport,
    marginLeft: 10,
    marginBottom: 3
  },
  lineReport: {
    height: 1,
    backgroundColor: COLOR.lineColor,
    width: '100%'
  }
})