import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';

import { LANG } from '../../lang/lang';
import { CSS, IMG, COLOR } from '../../utils/variables';
import styles from './user-draft-order-detail-style';
import { HeaderScroll } from '../dynamic-component/header-scroll/header-scroll';
import { getCurrencyStr } from '../../utils/general';

export default class UserDraftOrderDetail extends Component {
  constructor(props){
    super(props);
    const draftOrder = {
      billName: "Đơn hàng hay mua 1",
      recipes: [
        {
          recipeImage: "https://image-us.eva.vn/upload/2-2019/images/2019-06-13/thit-kho-trung-ngon-de-lam-cho-ca-gia-dinh-cung-thuong-thuc-thit-kho-trung-4-1560409608-313-width591height441.jpg",
          name: "Thịt Kho Trứng",
          chefName: 'Hoàng Thị Kiều Nga',
          cookTime: 60,
          id: 1
        },
        {
          recipeImage: "https://media.ex-cdn.com/EXP/media.phunutoday.vn/files/phamdong/2017/03/08/cong-thuc-nau-canh-hen-chua-ngon-nhat-danh-cho-mua-he-phunutodayvn-4-1015-phunutoday.jpg",
          name: "Canh chua hến",
          chefName: 'Bình Tăng',
          cookTime: 50,
          id: 2
        },
        {
          recipeImage: "https://media.ex-cdn.com/EXP/media.phunutoday.vn/files/phamdong/2017/03/08/cong-thuc-nau-canh-hen-chua-ngon-nhat-danh-cho-mua-he-phunutodayvn-4-1015-phunutoday.jpg",
          name: "Cơm âm phủ",
          chefName: 'Trung Lư',
          cookTime: 80,
          id: 3
        }
      ],
      totalPrice: 200000,
      id: 1,
      time: "12/10/2018 12:10:10",
      products: [
        {
          productImage: "https://csfood.vn/wp-content/uploads/2016/06/Tr%E1%BB%A9ng-g%C3%A0-g%E1%BB%99c-V.Food-h%E1%BB%99p-4-qu%E1%BA%A3.jpg",
          name: "Trứng gà VietGap",
          madeIn: 'Mỹ',
          price: 35000,
          weightUnit: '100g',
          id: 1
        },
        {
          productImage: "https://static9.nguyentandung.biz/files/2013/03/chinsu-food-cafe-that-1-220313.jpg",
          name: "Nước mắm chinsu",
          madeIn: 'Nhật bổn',
          price: 25000,
          weightUnit: '100g',
          id: 2
        },
      ]
    }
    this.state ={
      draftOrder
    }
  }
  
  renderRecipes = (recipes) => {
    if(recipes){
      return recipes.map((recipe)=>{
        return (<View key={recipe.id} style={[CSS.block, CSS.lightBoxShadow, styles.blockCustom]}>
          <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
            <Image style={{width: 60, height: 50, borderRadius: 3}} source={{uri: recipe.recipeImage}}/>
            <View style={{paddingLeft: 10}}>
              <Text style={styles.title}>{ recipe.name }</Text>
              <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
                <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
                  <Image source={IMG.recipeSolid} style={{width: 13, height: 10, marginRight: 6}}/>
                  <Text style={styles.textLabel}>{ recipe.chefName }</Text>
                </View>
                <View style={styles.separator}></View>
                <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
                  <Image source={IMG.sandClokHome} style={{width: 13, height: 10, marginRight: 6}}/>
                  <Text style={styles.textLabel}>{ recipe.cookTime } { LANG.MINUTE }</Text>
                </View>
              </View>
            </View>
          </View>
        </View>)
      });
    }
  }

  renderProducts = (products) => {
    if(products){
      return products.map((product)=>{
        return (<View key={product.id} style={[CSS.block, CSS.lightBoxShadow, styles.blockCustom]}>
          <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
            <Image style={{width: 60, height: 50, borderRadius: 3}} source={{uri: product.productImage}}/>
            <View style={{paddingLeft: 10}}>
              <Text style={styles.title}>{ product.name }</Text>
              <Text style={[CSS.fontSize13, {color: COLOR.madeIn}]}>{ product.madeIn }</Text>
              <View style={[CSS.flexRow]}>
                <Text style={[CSS.fontQuiBold, CSS.fontSize18, { color: '#ee0000'}]}>{ getCurrencyStr(product.price) }</Text>
                <Text style={[CSS.fontSize12, { marginTop: 9 }]}>/{ product.weightUnit }</Text>
              </View>
            </View>
          </View>
        </View>)
      });
    }
  }
  render() {
    const { navigation } = this.props;
    const draftOrderParam = navigation.getParam('draftOrder', {}); 
    const { draftOrder } = this.state;

    return (
      <HeaderScroll  colorBorderDefault="#D2D2D2" colorDefault="#fff" colorPageName="#000" borderWidthDefault={1} pageName={ draftOrderParam.billName }>
        <View style={[CSS.draftContainer, {marginTop: 50}]}>
          <View style={CSS.frameWrap}>
            <Text style={[CSS.textUpperCase, styles.category]}>{ LANG.RECIPE }</Text>
            { this.renderRecipes(draftOrder.recipes) }
            <Text style={[CSS.textUpperCase, styles.category]}>{ LANG.PRODUCT }</Text>
            { this.renderProducts(draftOrder.products) }
          </View>
        </View>
      </HeaderScroll>
    );
  }
}
