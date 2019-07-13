import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { IMG, CSS } from '../../utils/variables';

export default class DatePickerCustom extends Component {
  static propTypes = {
    title: PropTypes.any,
    placeholder: PropTypes.string,
    changeDateSelected: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
    };
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = (date) => {
    const { changeDateSelected } = this.props;
    const StartDate = moment(date).format('DD-MM-YYYY');

    this.setState({
      date: StartDate,
    });
    changeDateSelected(StartDate);
    this.hideDateTimePicker();
  };

  render() {
    const { isDateTimePickerVisible, date } = this.state;
    const { title, placeholder } = this.props;
    return (
      <View style={{ paddingVertical: 20 }}>
        {title && <Text style={[CSS.fontSize14, { fontFamily: CSS.fontTitle, color: '#444444', marginBottom: 6 }]}>{title}</Text>}
        <TouchableOpacity style={[{ borderColor: '#E0E0E0', borderRadius: 5, borderWidth: 1, padding: 12 }, CSS.flexRow, CSS.justifySpaceBetween]} onPress={this.showDateTimePicker}>
          {date ? <Text style={[CSS.fontQuiRegular, CSS.fontSize14]}>{date}</Text> : <Text style={CSS.placeholderStyle}>{placeholder}</Text>}
          <Image source={IMG.calendar} resizeMode="contain" />
        </TouchableOpacity>
        <DateTimePicker
          isVisible={isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
      </View>

    );
  }
}
