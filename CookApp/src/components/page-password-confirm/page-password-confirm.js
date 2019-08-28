import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';
import LinearGradient from 'react-native-linear-gradient';
import navigationService from '../../services/navigation.service';
import TextInputRender from '../text-input/text-input';
import { IMG, CSS, COLOR } from '../../utils/variables';
import { LANG } from '../../lang/lang';
import ModalComponent from '../modal/modal';
import authService from '../../services/auth.service';
import { handleError } from '../../utils/general';
import ErrorModalComponent from '../modal/errorModal';
import { validateForm } from './validation';


export default class PageConfirmPassword extends Component {
  constructor(props) {
    super(props);
    const params = _.get(this.props, 'navigation.state', {});
    this.state = {
      rePassword: '',
      password: '',
      params,
      content: {
        message: 'Chúc mừng bạn, mật khẩu đã được thiết lập thành công!',
        title: 'Thiết lập mật khẩu thành công'
      }
    };
    // const { params } = this.props.navigation.state;
  }

  componentDidMount() {
    const { navigation } = this.props;
    const params = navigation.getParam('params', {});
    console.log(params);
    this.setState({
      infor: params,
    });
  }

  onChangeText = (value, err, type) => {
    this.setState({
      [type]: value,
    });
  };

  handelConfirmPassword = () => {
    const isInvalidName = validateForm(this.state);
    if (isInvalidName) {
      const content = {
        message: isInvalidName,
        title: 'Lỗi'
      };
      this.setState({
        showErrorMessage: content,
      });
    } else {
      const { infor, password } = this.state;
      const userId = _.get(infor, 'data.userId');
      const secretKey = _.get(infor, 'data.secretKey');
      const data = {
        userId,
        password,
        secretKey,
      };
      authService.setPassword(data).then((res) => {
        navigationService.navigate('InforUser', { userInfor: res });
      }, (error) => {
        const content = {
          message: handleError(error),
          title: 'Lỗi'
        };
        this.setState({
          showErrorMessage: content,
        });
      });
    }
  }

  closeErrorModal = () => {
    this.setState({
      showErrorMessage: false
    });
  }

  render() {
    const { password, rePassword, params, content, showErrorMessage } = this.state;
    const pageName = _.get(params, 'params.pageName');
    return (
      <KeyboardAvoidingView style={{ flexGrow: 1 }} behavior="padding" keyboardVerticalOffset={40}>
        {showErrorMessage && <ErrorModalComponent onBackdropPress={this.closeErrorModal} content={showErrorMessage} />}
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
          <View style={[styles.container]}>
            <View style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <View style={{ flex: 1, }}>
                <Text style={[
                  styles.titlePage,
                  CSS.justifyContentCenter,
                  CSS.alignItemsCenter,
                  CSS.textAlignCenter,
                  CSS.fontNuExBold]}>
                  {pageName}
                </Text>
                <TextInputRender
                  onChangeText={(value, err) => this.onChangeText(value, err, 'password')}
                  title="Mật khẩu"
                  placeholder="Nhập Mật khẩu"
                  value={password}
                  secureTextEntry
                />
                <TextInputRender
                  onChangeText={(value, err) => this.onChangeText(value, err, 'rePassword')}
                  title="Nhập lại mật khẩu"
                  placeholder="Nhập lại mật khẩu"
                  value={rePassword}
                  secureTextEntry
                />
              </View>
              <ModalComponent content={content} />
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#3BB556', '#72C91C']} style={CSS.linearGradientButton}>
                <TouchableOpacity style={[styles.buttonText, CSS.alignItemsCenter, CSS.justifyContentCenter]} onPress={() => this.handelConfirmPassword()}>
                  <Text style={CSS.textTitleButton}>Tiếp tục</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </ScrollView >
      </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Nunito',
    paddingHorizontal: 30,
    flex: 1,
    height: '100%',
    alignItems: 'stretch',
  },
  Input: {
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    flex: 1,
  },
  titlePage: {
    marginVertical: 25,
    fontSize: 16,
    color: '#001D12'
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginBottom: 20
  },
});

PageConfirmPassword.propTypes = {
  props: PropTypes.any,
  navigation: PropTypes.any,
};
