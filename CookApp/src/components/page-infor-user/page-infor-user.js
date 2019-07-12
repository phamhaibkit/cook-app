import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Button } from 'react-native';
import PropTypes from 'prop-types';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import { LANG } from '../../lang/lang';
import { CSS, IMG } from '../../utils/variables';
import SigninByFacebook from '../signin-by-facebook/signin-by-facebook';
import TextInputRendernder from '../text-input/text-input';
import RadioSelect from '../radio-select/radio-select';


export default class PageInforUser extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  constructor(props) {
    super(props);
    this.state = {
      password: '',
      isDateTimePickerVisible: false,
      radioObject: {
        date: '',
        label: 'Giới tính',
        arrayObject: [
          {
            name: 'Nam',
            icon: 'mars',
            active: false
          },
          {
            name: 'Nữ',
            icon: 'venus',
            active: true
          },
        ]
      }
    };
    // const { params } = this.props.navigation.state;
  }

  componentWillMount() {


  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    const StartDate = moment(date).format('YYYY-MM-DD');

    this.setState({
      date: StartDate,
    });
    console.log(date, 'date');
    this.hideDateTimePicker();
  };

  render() {
    const { password, radioObject, isDateTimePickerVisible, date } = this.state;
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={[
            CSS.headerMargin,
            CSS.flexRow,
            CSS.justifySpaceBetween,
            CSS.alignItemsCenter]}>
            <Text>{' '}</Text>
            <Text style={[
              CSS.fontNuExBold,
              CSS.fontSize16,
              styles.color001D12,
              CSS.textAlignCenter]}>
              {LANG.INFOR_USER}
            </Text>
            <TouchableOpacity>
              <Text style={[
                CSS.fontQuiRegular,
                CSS.fontSize14,
                styles.color3ABF57]}>
                {LANG.SKIP}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={[CSS.fontQuiRegular, CSS.fontSize13, { marginTop: 23, color: '#000000', marginBottom: 20 }]}>{LANG.USER_INFOR_PAGE_DES}</Text>
          <SigninByFacebook style={{ marginTop: 20 }} />
          <Text style={[{ marginTop: 20, color: '#898989' }, CSS.fontQuiRegular, CSS.fontSize13, CSS.textAlignCenter]}>Hoặc nhập thông tin</Text>
          <View style={[CSS.alignItemsCenter, CSS.justifyContentCenter, { marginBottom: 26 }]}>
            <Image style={styles.Avatar} source={IMG.userAvatar} resizeMode="contain" />
            <TouchableOpacity style={styles.iconCamera} >
              <Image source={IMG.camera} resizeMode="contain" />
            </TouchableOpacity>
          </View>
          <TextInputRendernder
            onChangeText={(value, err) => this.onChangeText(value, err, 'password')}
            title="Nơi sinh sống"
            placeholder="Nhập nơi sinh sống"
            value={password}
            styleConfig={styles.Input}
            secureTextEntry
          />
          <TextInputRendernder
            onChangeText={(value, err) => this.onChangeText(value, err, 'password')}
            title="Bạn sinh ra ở"
            placeholder="Nhạp nơi sinh"
            value={password}
            styleConfig={styles.Input}
            secureTextEntry
          />
          <RadioSelect radioObject={radioObject} />
          <TouchableOpacity style={[{ borderColor: '#E0E0E0', borderRadius: 5, borderWidth: 1, padding: 12 }, CSS.flexRow, CSS.justifySpaceBetween]} onPress={this.showDateTimePicker}>
            <Text>{date || ''}</Text>
            <Image source={IMG.calendar} resizeMode="contain" />
          </TouchableOpacity>
          <DateTimePicker
            isVisible={isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
          />
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    fontFamily: 'Nunito',
    paddingHorizontal: 30,
    flex: 1,
  },
  color001D12: {
    color: '#001D12'
  },
  color3ABF57: {
    color: '#3ABF57'
  },
  Avatar: {
    marginTop: 20,
    position: 'relative'
  },
  iconCamera: {
    position: 'absolute',
    bottom: -8,
    right: '38%'
  }
});