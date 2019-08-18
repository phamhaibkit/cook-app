import React, { Component } from 'react';
import { ActivityIndicator, View, Text, Dimensions, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import { Image } from 'react-native-elements';

import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';

import userService from '../../services/user.service';
import styles from './user-draft-orders-style';
import { CSS, COLOR, IMG } from '../../utils/variables';
import { getCurrencyStr } from '../../utils/general';
import { LANG } from '../../lang/lang';
import ConfirmModal from '../../components/modal/confirm-modal';
import navigationService from '../../services/navigation.service';
import { ROUTES } from '../../utils/routes';

const { width } = Dimensions.get('window');

export default class UserDraftOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...userService.userDraftOrders,
      modalVisible: false,
      currentConfirmId: 0,
    }    
  }

  componentDidMount() {
    this.getDraftOrders(1);
  }

  getDraftOrders = (userId) => {
    userService.getUserDraftOrders(userId).then(() => {      
      this.setState({
        ...userService.userDraftOrders
      });
    });
  } 

  showConfirmModal = id => {
    this.setState({
      modalVisible: true,
      currentConfirmId: id
    });
  }

  handleDeleteConfirm = () => {
    const { draftOrders, currentConfirmId } = this.state;
    const filtered = _.filter(draftOrders, (e) => {
      return e.id !== currentConfirmId;
    });

    this.setState({
      draftOrders: filtered,
      modalVisible: false
    });
  }
  
  renderBlockImages = (recipes) => {
    const entire_padding = 15 * 4;
    const image_space = 8;
    const num_images_default = 4;
    const image_ratio = 72 / 52; // based on design
    const image_w = (width - entire_padding - image_space * (num_images_default - 1)) / num_images_default;
    const image_h = image_w / image_ratio;

    const images_length = recipes.length;
    const imageStyles = {width: image_w, height: image_h, marginRight: image_space, borderRadius: 5};

    return recipes.map((e, index) => {
      if(index < (num_images_default - 1)) {
        return (
          <Image 
            source={{uri: e.recipeImage || e.productImage}} 
            style={imageStyles} 
            key={index}
            PlaceholderContent={<ActivityIndicator />} 
          />
        )
      }
      else if (index === (num_images_default - 1)) {
        return (
          <View key={index}>
              <ImageBackground 
                style={[imageStyles, {overflow: 'hidden'}]} 
                source={{ uri: e.recipeImage || e.productImage }}
              >
                <LinearGradient
                  colors={[COLOR.gradientBlackTopColor, COLOR.gradientBlackBottomColor]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={imageStyles}
                />          
              </ImageBackground>
              <View style={[CSS.alignItemsCenter, CSS.justifyContentCenter, {flex: 1, width: image_w, height: image_h, marginTop: -image_h}]}>
                <Text style={[CSS.fontQuiBold, CSS.fontSize14, {color: COLOR.whiteColor}]}>{ `+${images_length - num_images_default}` }</Text>            
              </View> 
          </View>)
      }
    });
  }

  goToDetail = (draftOrder) => {
    navigationService.navigate(ROUTES.userDraftOrderDetail.key, {draftOrder});
  }

  renderDraftOrder = (draftOrder, index) => {
    const { draftOrders } = this.state;
    const blockStyles = (draftOrders.length - 1) === index ? [CSS.block, {marginBottom: 20}] : CSS.block;

    return (
      <TouchableOpacity key={draftOrder.id} onPress={() => this.goToDetail(draftOrder)}>
        <View style={CSS.frameWrap} >
          <View style={[blockStyles, CSS.lightBoxShadow]}>        
            <Text style={[CSS.fontQuiBold, CSS.fontSize14, { color: COLOR.oldPrice, marginBottom: 6, textTransform: 'capitalize'}]}>{ draftOrder.billName }</Text>
            <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
              <Image source={IMG.grayCalendar} style={CSS.calendarIcon}/>
              <Text style={[CSS.fontQuiRegular, CSS.fontSize13, {color: '#767676'}]}>
                {LANG.SAVED_DAY} 
                <Text> { draftOrder.time }</Text>
              </Text>
            </View>
            <View>
              <Text style={styles.category}>{ LANG.DISH }</Text>
              <View style={ CSS.flexRow }>
                {this.renderBlockImages(draftOrder.recipes)}
              </View>
            </View>

            <View>
              <Text style={styles.category}>{ LANG.PRODUCT }</Text>
              <View style={ CSS.flexRow }>
                { this.renderBlockImages(draftOrder.products) }
              </View>
            </View>

            <Image 
              style={[CSS.w100, { height: 1, marginTop: 20, marginBottom: 15 }]} 
              source={IMG.borderDot}
              resizeMode="repeat"
            />

            <View style={[CSS.flexRow, CSS.justifySpaceBetween, CSS.alignItemsCenter]}>
                <Text style={[CSS.fontQuiBold, CSS.fontSize14, CSS.textUpperCase, {color: COLOR.oldPrice}]}>
                  {LANG.PROVISIONAL_SUMS}                 
                </Text>
                <Text style={[CSS.fontQuiBold, CSS.fontSize16,  {color: '#EE0000'}]}>{ getCurrencyStr(draftOrder.totalPrice) }</Text>
            </View>
          </View>

          <TouchableOpacity 
            underlayColor="transparent"
            style={CSS.closeBtn}
            onPress={() => this.showConfirmModal(draftOrder.id)}
          >
            <Image source={IMG.clearInput} style={[CSS.w100, CSS.h100]}/>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { draftOrders, modalVisible } = this.state;

    return (
      <View style={CSS.draftContainer}>
         <ConfirmModal
          modalVisible={modalVisible}
          onPressDelete={this.handleDeleteConfirm}
          content={{
            title: `${LANG.DELETE_ORDER_DRAFT}`,
            message: `${LANG.DELETE_ORDER_DRAFT_CONFIRM}`
          }}           
        />
        <View style={{marginTop: 5}}></View>
        <FlatList 
          data = {draftOrders}
          renderItem = {({item, index}) => this.renderDraftOrder(item, index)}          
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}