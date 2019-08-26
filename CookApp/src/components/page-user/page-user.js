
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, AsyncStorage, Image, Dimensions } from 'react-native';
// import styles from './page-user-style';
// import { Avatar } from 'react-native-elements';

import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { LANG } from '../../lang/lang';
import Avatar from '../avatar/avatar';
import { IMG, CSS, ASYNC_STORAGE } from '../../utils/variables';
import { setAccountInfo } from '../../reducers/page-account-info.reducer';
import navigationService from '../../services/navigation.service';
import ImageProfile from '../image-profile/image-profile';
import { ROUTES } from '../../utils/routes';

const user = {
  name: 'Hoang Thi Kieu Nga',
  rank: 13,
  id: 7,
  avatar: ''
};

const { width } = Dimensions.get('window');

export class PageUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // user: null,
    };
  }

  componentWillMount() {
    console.log(JSON.stringify(user));
    console.log('asdasdasd');
    this.retrieveData();
  }

  logOut = () => {
    AsyncStorage.removeItem('userInfo');
    this.props.navigation.navigate('SignIn')
  }

  retrieveData = async () => {
    try {
      await AsyncStorage.getItem('userInfo').then((value) => {
        const user = JSON.parse(value);
        console.log(user, 'user');
      });
    } catch (error) {
      console.log(error, 'error');
    }
  };

  renderScreenLogin = () => {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.props.navigation.navigate('SignIn')}>
        <Text>Đăng nhập</Text>
      </TouchableOpacity>
    </View>;
  }

  renderItemManage = (arrayRender) => {
    return <View style={[CSS.flexCol, styles.content]}>
      {arrayRender.map((item, index) => {
        const { action, name } = item;
        return <TouchableOpacity key={index} onPress={() => action && action()}>
          <View style={[{ paddingBottom: 10 }, CSS.flexRow, CSS.justifySpaceBetween, CSS.alignItemsCenter]}>
            <Text style={[CSS.fontQuiMedium, CSS.fontSize15]}>{name}</Text>
            <Image source={IMG.arrowRightGreen} style={{ width: 24, height: 13 }} />
          </View>
          {index !== arrayRender.length - 1 && <Image style={{ width: '100%', height: 1, marginBottom: 10 }} source={IMG.borderDot} />}
        </TouchableOpacity>;
      })}
    </View>;
  }

  renderOrderManage = () => {
    const arrayOrderManage = [
      {
        name: LANG.ORDER,
        action: ''
      },
      {
        name: LANG.CODE_REDUCE_PRICE,
        action: ''
      },
      {
        name: LANG.DELIVERY_ADDRESS,
        action: ''
      },
      {
        name: LANG.ORDER_DRAFT,
        action: () => navigationService.navigate(ROUTES.userDraftOrder.key)
      }
    ];
    return this.renderItemManage(arrayOrderManage);
  }

  renderRecipeManage = () => {
    const arrayItem = [
      {
        name: LANG.YOUR_RECIPE,
        action: ''
      },
      {
        name: LANG.WAITING_ACCEPT_RECIPE,
        action: () => navigationService.navigate(ROUTES.userReviewingRecipe.key)
      },
      {
        name: LANG.RECIPE_DRAFT,
        action: () => navigationService.navigate(ROUTES.userDraftRecipe.key)
      },
      {
        name: LANG.SAVED_RECIPE,
        action: ''
      },
    ];
    return this.renderItemManage(arrayItem);
  }

  renderCookerManage = () => {
    const arrayItem = [
      {
        name: LANG.FOLLOWING,
        action: ''
      },
      {
        name: LANG.FOLLOWED,
        action: ''
      },
    ];
    return this.renderItemManage(arrayItem);
  }

  renderSettingManage = () => {
    const arrayItem = [
      {
        name: LANG.SETTINGS,
        action: ''
      },
    ];
    return this.renderItemManage(arrayItem);
  }

  render() {
    const { accountInfo } = this.props;
    return (
      <ScrollView style={styles.container}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={['#3BB556', '#72C91C']}
          style={[
            styles.button,
            {
              borderRadius: 0,
              paddingTop: 45,
              paddingBottom: 97,
            },
            CSS.justifySpaceBetween

          ]}
        >
          <View style={[CSS.flexRow, CSS.justifySpaceBetween, { paddingHorizontal: 15 }]}>
            <View style={[CSS.flexCol, { justifyContent: 'space-around' }]}>
              <Text style={[CSS.fontNuBlack, CSS.fontSize20, { color: '#fff' }]}>{user.name}</Text>
              <TouchableOpacity style={[CSS.flexRow, CSS.alignItemsCenter]} onPress={() => navigationService.navigate(ROUTES.userProfile.key)}>
                <Text style={[CSS.fontQuiRegular, CSS.fontSize13, { color: '#fff' }]}>Xem thông tin </Text>
                <Image source={IMG.arrowWhite} style={{ width: 12, height: 7 }} /></TouchableOpacity>
            </View>
            <ImageProfile user={user} widthImage={60} />
          </View>
        </LinearGradient>
        <View style={[styles.container, CSS.alignItemsCenter]}>
          <View style={[styles.containerList, CSS.justifyContentCenter]}>
            {this.renderOrderManage()}
            {this.renderRecipeManage()}
            {this.renderCookerManage()}
            {this.renderSettingManage()}
            <TouchableOpacity style={{ marginTop: 10 }} onPress={() => this.logOut()}>
              <Text style={[CSS.textAlignCenter, CSS.fontQuiBold, CSS.fontSize15, { color: '#FF0000', marginBottom: 30 }]}>Logout</Text>
            </TouchableOpacity>

          </View>
        </View>

      </ScrollView >
    );
  }
}


function mapStateToProps(state) {
  return {
    accountInfo: state.accountInfo,
    scrollTop: state.scrollTop,
  };
}

export default connect(
  mapStateToProps,
  { setAccountInfo }
)(PageUser);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerList: {
    flex: 1,
    marginTop: -60,
  },

  content: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    width: width - 30,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
    marginBottom: 15
  },

  topPageContainer: {
    paddingVertical: 20,
    flexDirection: 'row',
    // justifyContent:'space-around'
  },
  contentItems: {
    flexDirection: 'row',
    paddingVertical: 50,
  },
  inforUser: {
    flexDirection: 'column',
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    justifyContent: 'space-around'
  },
  avatar: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  userName: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
  },
  aboutUser: {
    flexDirection: 'row'
  },
  arrowRightImg: {
    width: 18,
    // height: 20,
  },
  arrowRightImgSmall: {
    width: 7,
    // height: 20,
  },
  viewBorderWidth: {
    height: 10,
    backgroundColor: '#fff'
  },
  draftUser: {
    paddingVertical: 10,
    flexDirection: 'row',
  },
  manageItems: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  },
  items: {
    justifyContent: 'center',
    // alignItems: 'center'
  }
});
