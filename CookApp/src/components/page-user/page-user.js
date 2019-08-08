
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, AsyncStorage, Image } from 'react-native';
// import styles from './page-user-style';
// import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import { LANG } from '../../lang/lang';
import Avatar from '../avatar/avatar';
import { IMG, CSS } from '../../utils/variables';
import { setAccountInfo } from '../../reducers/page-account-info.reducer';
import navigationService from '../../services/navigation.service';
import ImageProfile from '../image-profile/image-profile';
const user =  {
  "name": "Hoang Thi Kieu Nga",
  "rank": 13,
  "id": 7,
  "avatar": ""
}
export class PageUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentWillMount() {
    this.retrieveData();
    this.logOut();
  }

  logOut = () => {
    AsyncStorage.removeItem('userInfo');
  }

  retrieveData = async () => {
    try {
      await AsyncStorage.getItem('userInfo').then((value) => {
        const user = JSON.parse(value);
        this.setState({
          user,
        });
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
    return <View style={[styles.manageItems, CSS.padding20]}>
      {arrayRender.map((item, key) => {
        const { action } = item;
        return <View key={key} style={styles.contentItems} onPress={() => action()}>
          <View>
            {/* <Avatar style={styles.avatar} user={user} size={80} /> */}
          </View>
          <View style={styles.items}>
            <Text>{item.name}</Text>
          </View>
          <View style={CSS.iconImage}>
            <Image source={IMG.arrowRight} style={styles.arrowRightImgSmall} resizeMode="contain" />
          </View>
        </View>;
      })}
    </View>;
  }

  renderManageDraft = () => {
    const arrayItemDraft = [
      {
        name: 'Đăng nhập',
        action: () => navigationService.navigate('SignIn')
      },
      {
        name: LANG.RECIPE_DRAFT,
        action: ''
      },
      {
        name: LANG.ORDER_DRAFT,
        action: ''
      }
    ];
    return this.renderItemManage(arrayItemDraft);
  }

  renderRecipeWatingAccept = () => {
    const arrayItem = [
      {
        name: LANG.RECIPE_WAITING,
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
      {
        name: LANG.SAVED_RECIPE,
        action: ''
      },
    ];
    return this.renderItemManage(arrayItem);
  }

  renderOrderManage = () => {
    const arrayItem = [
      {
        name: LANG.ORER,
        action: ''
      },
      {
        name: LANG.DISCOUNT_CODE,
        action: ''
      },
      {
        name: LANG.DELIVERY_ADDRESS,
        action: ''
      },
    ];
    return this.renderItemManage(arrayItem);
  }

  renderSetupManage = () => {
    const arrayItem = [
      {
        name: LANG.SETUP,
        action: ''
      },
    ];
    return this.renderItemManage(arrayItem);
  }


  render() {
    const { accountInfo } = this.props;
    let userInfor = '';
    return (
      <ScrollView style={styles.container}>
        <ImageProfile user={user} widthImage={42}></ImageProfile>
        <View style={styles.viewBorderWidth} />
        <View style={styles.draftUser}>
          {this.renderManageDraft()}
        </View>
        <View style={styles.viewBorderWidth} />
        <View style={styles.draftUser}>
          {this.renderRecipeWatingAccept()}
        </View>
        <View style={styles.viewBorderWidth} />
        <View style={styles.draftUser}>
          {this.renderCookerManage()}
        </View>
        <View style={styles.viewBorderWidth} />
        <View style={styles.draftUser}>
          {this.renderOrderManage()}
        </View>
        <View style={styles.viewBorderWidth} />
        <View style={styles.draftUser}>
          {this.renderSetupManage()}
        </View>
      </ScrollView>
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
