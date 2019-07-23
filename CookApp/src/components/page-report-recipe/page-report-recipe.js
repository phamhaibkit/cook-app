import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import navigationService from "../../services/navigation.service";

import { COLOR, CSS } from '../../utils/variables';
import { LANG } from '../../lang/lang';
import styles from './page-report-recipe-style';

const reasonData = [
  { name: 'Thieu dung dan', id: 1, select: false },
  { name: 'Xau xuc pham nguoi nhin', id: 2, select: false },
  { name: 'Khong thay ngon gi ca', id: 3, select: false },
  { name: 'Cha ra gi', id: 4, select: false },
  { name: 'Khong con gi de dien ta', id: 5, select: false },
  { name: 'Qua chi la tho bao', id: 6, select: false },
  { name: 'Khac', id: 7, select: false }
];
export default class PageReportRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reason: {},
      data: reasonData
    };
  }

  selectReason = (reasonRow) => {
    console.log('selectReason==', reasonRow);
    const { data } = this.state;
    data.map((item, index) => {
      if (item.id === reasonRow.id) {
        item.select = true;
        return item;
      } else {
        item.select = false;
        return item;
      }
    });
    this.setState({
      reason: reasonRow,
      data: data
    });
  };

  renderReason = (data) => {
    return data.map((item, index) => (
      <View
        key={index}
        style={styles.shadowView}
      >
        <LinearGradient
          colors={item.select ? [COLOR.gradientLeft, COLOR.gradientRight] : [COLOR.whiteColor, COLOR.whiteColor]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ flex: 1 }}
        >
          <TouchableOpacity
            style={styles.reasonButton}
            onPress={() => {
              this.selectReason(item);
            }}
          >
            <Text style={{ fontFamily: CSS.fontText, color: item.select ? COLOR.whiteColor : COLOR.blackColor }}>{item.name}</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    ));
  }

  bottomButton = () => {
    return (
      <LinearGradient
        colors={[COLOR.gradientLeft, COLOR.gradientRight]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.bottomView}
      >
        <TouchableOpacity
          style={[styles.reasonButton, { alignItems: 'center' }]}
          onPress={() => {
            navigationService.goBack();
          }}
        >
          <Text style={styles.textBottom}>{LANG.SEND_REPORT}</Text>
        </TouchableOpacity>
      </LinearGradient>
    )
  }

  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={{ marginBottom: 50 }}>
          {this.renderReason(data)}
          {data[6].select && (
            <View style={styles.inputView}>
              <TextInput multiline={true} numberOfLines={4} placeholder={LANG.REQUIRE_REPORT} style={styles.inputText}/>
            </View>
          )}
        </ScrollView>
        {this.bottomButton()}
      </View>
    );
  }
}
