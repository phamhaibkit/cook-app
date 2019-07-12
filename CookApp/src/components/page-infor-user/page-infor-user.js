import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { LANG } from '../../lang/lang';
import { CSS, IMG } from '../../utils/variables';
import SigninByFacebook from '../signin-by-facebook/signin-by-facebook';
import TextInputRendernder from '../text-input/text-input';

export default class PageInforUser extends Component {
  static propTypes = {
    prop: PropTypes
  }

  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
    // const { params } = this.props.navigation.state;
  }

  componentWillMount() {
  }

  render() {
    const { password } = this.state;
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
          <View style={[CSS.flexRow]}>
            <View><Text>Giới tính</Text></View>
            <View>
              <Text>sadasd</Text>

              {/* <Image source={IMG.male} resizeMode="contain" /> */}
              {/* <LinearGradient style={{ width: 34 }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#3BB556', '#72C91C']} >
                <TouchableOpacity
                  onPress={() => console.log()}>
                  <Text>sadasd</Text>
                </TouchableOpacity>
              </LinearGradient> */}
            </View>

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