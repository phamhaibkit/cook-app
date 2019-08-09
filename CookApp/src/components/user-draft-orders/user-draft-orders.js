import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import { Image } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import userService from '../../services/user.service';
import styles from './user-draft-orders-style';
import { CSS, COLOR, IMG } from '../../utils/variables';
import { getCurrencyStr } from '../../utils/general';
import { LANG } from '../../lang/lang';

const { width } = Dimensions.get('window');

export default class UserDraftOrders extends Component {
  constructor(props) {
    super(props);
    const images = [
      'https://image-us.eva.vn/upload/2-2019/images/2019-06-13/thit-kho-trung-ngon-de-lam-cho-ca-gia-dinh-cung-thuong-thuc-thit-kho-trung-4-1560409608-313-width591height441.jpg',
      'https://image-us.eva.vn/upload/2-2019/images/2019-06-13/thit-kho-trung-ngon-de-lam-cho-ca-gia-dinh-cung-thuong-thuc-thit-kho-trung-4-1560409608-313-width591height441.jpg',
      'https://image-us.eva.vn/upload/2-2019/images/2019-06-13/thit-kho-trung-ngon-de-lam-cho-ca-gia-dinh-cung-thuong-thuc-thit-kho-trung-4-1560409608-313-width591height441.jpg',
      'https://image-us.eva.vn/upload/2-2019/images/2019-06-13/thit-kho-trung-ngon-de-lam-cho-ca-gia-dinh-cung-thuong-thuc-thit-kho-trung-4-1560409608-313-width591height441.jpg',
      'https://image-us.eva.vn/upload/2-2019/images/2019-06-13/thit-kho-trung-ngon-de-lam-cho-ca-gia-dinh-cung-thuong-thuc-thit-kho-trung-4-1560409608-313-width591height441.jpg',
      'https://image-us.eva.vn/upload/2-2019/images/2019-06-13/thit-kho-trung-ngon-de-lam-cho-ca-gia-dinh-cung-thuong-thuc-thit-kho-trung-4-1560409608-313-width591height441.jpg',
    ];
    this.state = {
      ...userService.userDraftOrders,
      modalVisible: false,
      images
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

  handleDeleteDraft = (id) => {
    alert(`Do you want to delete this draft? id=  ${id}` );
  }
  
  
  renderBlockImages = (images) => {
    const entire_padding = 15 * 4;
    const image_space = 8;
    const num_images_default = 4;
    const image_ratio = 72 / 52;
    const image_w = (width - entire_padding - image_space * (num_images_default - 1)) / num_images_default;
    const image_h = image_w / image_ratio;

    const images_length = images.length;
    const imageStyles = {width: image_w, height: image_h, marginRight: image_space, borderRadius: 5};

     if (images_length <= num_images_default) {
      return images.map((e, index)=>{
        return (
            <Image 
              source={{uri: e}} 
              style={imageStyles} 
              key={index} 
            />
          )
        })
     } else {
      return (images.map((e, index)=> {

        if(index < (num_images_default - 1)) {        
          return <Image 
            source={{uri: e}} 
            style={imageStyles} 
            key={index} />
         }
          else if(index === (num_images_default - 1)) {
          return <View key={index}>
                  <ImageBackground 
                    style={[imageStyles, {overflow: 'hidden'}]} 
                    source={{ uri: e }}
                  >
                    <LinearGradient
                      colors={[COLOR.gradientBlackTopColor, COLOR.gradientBlackBottomColor]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                      style={imageStyles}
                    />          
                  </ImageBackground>
                  <View style={[CSS.alignItemsCenter, CSS.justifyContentCenter, {flex: 1, width: image_w, height: image_h, marginTop: -image_h}]}>
                    <Text style={[CSS.fontQuiBold, CSS.fontSize14, {color: COLOR.whiteColor}]}>{ `+${images_length - num_images_default}`}</Text>            
                  </View> 
              </View>      
         } 
      }))
     }

  }

  renderDraftOrders = (draftOrder) => {
    return (
      <View style={styles.block} key={draftOrder.id}>
        <TouchableOpacity 
          underlayColor="transparent"
          style={{width: 22, height: 22, position: 'absolute', zIndex: 999, right: -10, top: -10, padding: 20}}
          onPress={() => this.handleDeleteDraft(draftOrder.id)}
        >
          <Image source={IMG.clearInput} style={{width: 22, height: 22}}/>
        </TouchableOpacity>
        <Text style={[CSS.fontQuiBold, CSS.fontSize14, { color: COLOR.oldPrice, marginBottom: 6, textTransform: 'capitalize'}]}>{ draftOrder.billName }</Text>
        <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
          <Image source={IMG.grayCalendar} style={{width: 15, height: 15, marginRight: 10}}/>
          <Text style={[CSS.fontQuiRegular, CSS.fontSize13, {color: '#767676'}]}>
            {LANG.SAVED_DAY} 
            <Text> { draftOrder.time }</Text>
          </Text>
        </View>
        <View>
          <Text style={styles.category}>{ LANG.DISH }</Text>
          <View style={ CSS.flexRow }>
            {this.renderBlockImages(this.state.images)}
          </View>
        </View>

        <View>
          <Text style={styles.category}>{ LANG.PRODUCT }</Text>
          <View style={ CSS.flexRow }>
            { draftOrder.products && draftOrder.products.map((e, index)=>{
              return (
                <Image source={{uri: e.productImage}} style={{width: 70, height: 52, marginRight: 8, borderRadius: 5 }} key={index} />
              )
            }) }

            {/* { this.renderBlockImages(draftOrder.products) } */}
          </View>
        </View>

        <Image 
          style={[CSS.w100, { height: 1, marginTop: 20, marginBottom: 15 }]} 
          source={IMG.borderDot}
          resizeMode="repeat"
          >
        </Image>

        <View style={[CSS.flexRow, CSS.justifySpaceBetween, CSS.alignItemsCenter]}>
            <Text style={[CSS.fontQuiBold, CSS.fontSize14, CSS.textUpperCase, {color: COLOR.oldPrice}]}>
              {LANG.PROVISIONAL_SUMS}                 
            </Text>
            <Text style={[CSS.fontQuiBold, CSS.fontSize16,  {color: '#EE0000'}]}>{ getCurrencyStr(draftOrder.totalPrice) }</Text>
        </View>
    </View>
    );
  }

  render() {
    const { draftOrders } = this.state;

    return (
      <View style={styles.container}>
        <FlatList 
          data = {draftOrders}
          renderItem = {({item, index}) => this.renderDraftOrders(item)}          
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}