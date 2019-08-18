import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';

import { LANG } from '../../lang/lang';
import { CSS, IMG, COLOR } from '../../utils/variables';

export default class UserDraftOrderDetail extends Component {
  constructor(props){
    super(props);
    const draftOrder = {
      billName: "Đơn hàng hay mua 1",
      recipes: [
        {
        recipeImage: "https://image-us.eva.vn/upload/2-2019/images/2019-06-13/thit-kho-trung-ngon-de-lam-cho-ca-gia-dinh-cung-thuong-thuc-thit-kho-trung-4-1560409608-313-width591height441.jpg",
        name: "Thịt Kho Trứng",
        id: 1
        },
        {
        recipeImage: "https://media.ex-cdn.com/EXP/media.phunutoday.vn/files/phamdong/2017/03/08/cong-thuc-nau-canh-hen-chua-ngon-nhat-danh-cho-mua-he-phunutodayvn-4-1015-phunutoday.jpg",
        name: "Canh chua hến",
        id: 2
        }
      ],
      totalPrice: 200000,
      id: 1,
      time: "12/10/2018 12:10:10",
      products: [
      {
        productImage: "https://csfood.vn/wp-content/uploads/2016/06/Tr%E1%BB%A9ng-g%C3%A0-g%E1%BB%99c-V.Food-h%E1%BB%99p-4-qu%E1%BA%A3.jpg",
        name: "Trứng gà VietGap",
        id: 1
        }
      ]
    }
    this.state ={
      draftOrder
    }
  }
  
  renderRecipes = (recipes) => {
    if(recipes){
      return recipes.map((recipe)=>{
        return (<View key={recipe.id} style={[CSS.block, CSS.frameWrap, {padding: 10}]}>
          <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
            <Image style={{width: 60, height: 50, borderRadius: 3}} source={{uri: recipe.recipeImage}}/>
            <View>
              <Text>{ recipe.name }</Text>
              <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
                <View>
                  <Image source={IMG.recipe} style={{width: 13, height: 10, marginRight: 6}}/>
                  <Text>Hoàng Kiều Nga</Text>
                </View>
                <View style={{width: 1, height: 11,  backgroundColor: 'black'}}></View>
                <View>
                  <Image source={IMG.clock} style={{width: 13, height: 10, marginRight: 6}}/>
                  <Text>60 { LANG.MINUTE }</Text>
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
        return (<View key={product.id} style={[CSS.block, CSS.frameWrap, {padding: 10}]}>
          <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
            <Image style={{width: 60, height: 50, borderRadius: 3}} source={{uri: recipe.recipeImage}}/>
            <View>
              <Text>{ productImage.name }</Text>
              <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
                <View>
                  <Image source={IMG.productImage} style={{width: 13, height: 10, marginRight: 6}}/>
                  <Text>Hoàng Kiều Nga</Text>
                </View>
                <View style={{width: 1, height: 11,  backgroundColor: 'black'}}></View>
                <View>
                  <Image source={IMG.clock} style={{width: 13, height: 10, marginRight: 6}}/>
                  <Text>60 { LANG.MINUTE }</Text>
                </View>
              </View>
            </View>
          </View>
        </View>)
      });
    }
  }
  render() {
    const { navigation } = this.props;
    // const draftOrder = navigation.getParam('draftOrder', {}); 
    const { draftOrder } = this.state;

    return (
      <View style={CSS.draftContainer}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <Text style={CSS.textUpperCase}>{ LANG.RECIPE }</Text>
            { this.renderRecipes(draftOrder.recipes) }
            <Text style={CSS.textUpperCase}>{ LANG.PRODUCT }</Text>
            { this.renderProducts(draftOrder.products) }
          </View>
        </ScrollView>
      </View>
    )
  }
}
