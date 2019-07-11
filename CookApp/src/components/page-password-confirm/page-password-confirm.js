import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';
import TextInputRender from '../text-input/text-input';
import { IMG, CSS } from '../../utils/variables';


export default class PageConfirmPassword extends Component {
  constructor(props) {
    super(props);
    const params = _.get(this.props, 'navigation.state', {});
    this.state = {
      rePassword: '',
      password: '',
      params,
    };
    // const { params } = this.props.navigation.state;
  }

  onChangeText = () => {

  }

  render() {
    const { password, rePassword, params } = this.state;
    const pageName = _.get(params, 'params.pageName');
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[styles.container]}>
          <View style={{
            flex: 1,
            display: 'flex',
          }}>
            <Text>{pageName}</Text>
            <TextInputRender
              onChangeText={(value, err) => this.onChangeText(value, err, 'password')}
              title="Password"
              placeholder="Nhập Mật khẩu"
              value={password}
              styleConfig={styles.Input}
              secureTextEntry
            />
            <TextInputRender
              onChangeText={(value, err) => this.onChangeText(value, err, 'rePassword')}
              title="Nhập lại mật khẩu"
              placeholder="Nhập lại mật khẩu"
              value={rePassword}
              styleConfig={styles.Input}
              secureTextEntry
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Nunito',
    paddingHorizontal: 30,
    display: 'flex',
    flex: 1,
    // height: '100%',
    alignItems: 'stretch',
  },
  Input: {
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    flex: 1,
  },
});

PageConfirmPassword.propTypes = {
  props: PropTypes.any,
  navigation: PropTypes.any,
};
