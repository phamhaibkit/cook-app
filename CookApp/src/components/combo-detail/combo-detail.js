import React, { Component } from 'react';
import { View, Text, Button, Checkbox, TouchableHighlight } from 'react-native';

import styles from './combo-detail-style';
import { IMG, CSS, COLOR } from '../../utils/variables';
import { RECIPES, SLIDER_IMAGES } from '../../models/data';
import { LANG } from '../../lang/lang';
import SwiperImage from '../swiper-image/swiper-image';
import { ScrollView } from 'react-native-gesture-handler';
import { COLLECTION_DETAIL } from '../../models/data';

export default class ComboDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.recipeDetail = COLLECTION_DETAIL;
  }

  render() {
    let recipesDetail = this.recipeDetail;
    return (
      <ScrollView>
        <SwiperImage height={300} listItems={ recipesDetail.sliderImages }/>
        <View style={styles.container}>
          <View style={styles.topSection}>
            <View style={[styles.dishInfo, CSS.lightBoxShadow]}>
              <Text style={[styles.comboLabel, CSS.fontQuiMedium]}>
                {LANG.COMBO_CAPITALIZE}
              </Text>
              <Text style={[styles.title, CSS.fontQuiMedium]}>Thịt bò xào khoai tây + Mì udon súp miso và thịt heo + Canh rong biển</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.statisticalNumber}>
                  <Text style={styles.numberStyle}>498</Text>
                  <Text style={[styles.numberStyle, styles.textLight]}> {LANG.ORDER_OWNER}</Text>
                </View>
                <View style={styles.seperator}></View>
                <View style={styles.statisticalNumber}>
                  <Text style={styles.numberStyle}>200</Text>
                  <Text style={[styles.numberStyle, styles.textLight]}> {LANG.VIEW}</Text>
                </View>
              </View>
              <View style={styles.estimatePrice}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Text style={[styles.estHighlighttext, CSS.fontQuiBold]}>335000 {LANG.VIETNAM_DONG}</Text>
                    <Text>{LANG.ESTIMATE_PRICE_LOWERCASE}</Text>
                  </View>
                  <View style={{height: 50, width: 1, backgroundColor: '#d3d3d3', marginHorizontal: 10}}></View>
                  <View>
                    <View style={{ flexDirection: 'row', backgroundColor: '#F8F8F8', paddingHorizontal: 32, paddingTop: 14 }}>
                      <TouchableHighlight
                        style={styles.button}
                        onPress={this.onPress}
                      >
                        <Text></Text>
                      </TouchableHighlight>
                      <Text>1</Text>
                      <TouchableHighlight
                        style={styles.button}
                        onPress={this.onPress}
                      >
                        <Text> + </Text>
                      </TouchableHighlight>
                    </View>
                    <Text>{ LANG.MEAL_LOWERCASE }</Text>
                  </View> 
                </View>               
                <Text>Có thể chọn lại khẩu phần khi mua nguyên liệu</Text>
              </View>
            </View>
            <View style={styles.promotionInfo}>
              <Text>{LANG.PROMOTION_INFO}</Text>
              <Text>Có hỗ trợ giao hàng nhanh</Text>
              <Text>Có sản phẩm đang được khuyến mãi</Text>
            </View>
          </View>

          <View style={styles.ingredients}>
            <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text>{LANG.INGREDIENT}</Text>
                <Button 
                  title={LANG.BUY_INGREDIENT}
                  type="clear"
                />
              </View>
              <Text>{LANG.SELECT_INGREDIENT_FOR_MEAL}</Text>
            </View>
          </View>        
        </View>
      </ScrollView>
    );
  }
}
