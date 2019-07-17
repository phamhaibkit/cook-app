import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Button } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import ImagePicker from 'react-native-image-picker';
import { LANG } from '../../lang/lang';
import { CSS, IMG } from '../../utils/variables';
import SigninByFacebook from '../signin-by-facebook/signin-by-facebook';
import TextInputRendernder from '../text-input/text-input';
import RadioSelect from '../radio-select/radio-select';
import DatePickerCustom from '../date-picker-custom/date-picker-custom';
import Avatar from '../avatar/avatar';


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
            key: 'male',
            name: 'Nam',
            icon: 'mars',
            active: false
          },
          {
            key: 'female',
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

  onChangeText = (value, err, type) => {
    this.setState({
      [type]: {
        value,
        err,
      },
    });
  };

  handleFinish = () => {
    console.log(this.state);
  }

  getInforFacebook = (inforFacebook) => {
    console.log(inforFacebook);
    this.setState({
      user: inforFacebook
    });
  }

  onChangeSelect = (value, err, type) => {
    this.setState({
      [type]: {
        value,
        err,
      },
    });
  }

  chooseFile = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [
        { name: 'fb', title: 'Choose Photo from Facebook' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  };

  render() {
    const { password, radioObject, placeBorn, placeLive, avatarSource, user } = this.state;
    console.log(avatarSource, 'avatarSource');
    console.log(IMG.userAvatar, 'aaaa');
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
          <Text style={[CSS.fontQuiRegular, CSS.fontSize13, { marginTop: 23, color: '#000000', marginBottom: 20, lineHeight: 16, letterSpacing: -0.02 }]}>{LANG.USER_INFOR_PAGE_DES}</Text>
          <SigninByFacebook titleButton="Sử dụng thông tin Facebook" getLoginFaceBookInfor={this.getInforFacebook} style={{ marginTop: 20 }} />
          <Text style={[{ marginTop: 20, color: '#898989' }, CSS.fontQuiRegular, CSS.fontSize13, CSS.textAlignCenter]}>Hoặc nhập thông tin</Text>
          <View style={[
            CSS.alignItemsCenter,
            CSS.justifyContentCenter,
            { marginBottom: 26, marginTop: 20 }]}>
            {/* {user ? <Avatar style={styles.Avatar} user={user} size={76} /> : <Image style={styles.Avatar} source={IMG.userAvatar} resizeMode="contain" />} */}

            {/* {avatarSource && <View><Image  source={avatarSource} resizeMode="contain" /><Text>aaaaa</Text></View>} */}
            {avatarSource ? <Image style={styles.Avatar} source={avatarSource} resizeMode="cover" /> : <Image style={styles.Avatar} source={IMG.userAvatar} resizeMode="contain" />}
            <TouchableOpacity style={styles.iconCamera} onPress={() => { this.chooseFile(); }} >
              <Image source={IMG.camera} resizeMode="contain" />
            </TouchableOpacity>
          </View>
          <TextInputRendernder
            onChangeText={(value, err) => this.onChangeText(value, err, 'placeLive')}
            title="Nơi sinh sống"
            placeholder="Nhập nơi sinh sống"
            value={placeLive}
          />
          <TextInputRendernder
            onChangeText={(value, err) => this.onChangeText(value, err, 'placeBorn')}
            title="Bạn sinh ra ở"
            placeholder="Nhập nơi sinh"
            value={placeBorn}
          />
          <RadioSelect onChangeSelect={value => this.onChangeSelect(value, '', 'sex')} radioObject={radioObject} />
          <DatePickerCustom changeDateSelected={value => this.onChangeSelect(value, '', 'dateOfBirth')} title="Ngày sinh" placeholder="Chọn ngày sinh" style={{ paddingVertical: 20 }} />
          <TextInputRendernder
            onChangeText={(value, err) => this.onChangeText(value, err, 'desctiption')}
            title="Mô tả"
            placeholder="Nhập mô tả về bản thân bạn"
            value={password}
            styleConfig={{ height: 60 }}
          />
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#3BB556', '#72C91C']} style={CSS.linearGradientButton}>
            <TouchableOpacity
              style={[
                CSS.buttonText,
                CSS.alignItemsCenter,
                CSS.justifyContentCenter]}
              onPress={this.handleFinish}>
              <Text style={CSS.textTitleButton}>Hoàn tất</Text>
            </TouchableOpacity>
          </LinearGradient>
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
    // position: 'relative',
    width: 76,
    height: 76,
    // borderRadius: '50%',
    borderRadius: 38,
  },
  iconCamera: {
    position: 'absolute',
    bottom: -8,
    right: '38%'
  }
});