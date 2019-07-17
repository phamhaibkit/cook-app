import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './combo-detail-style';
import { IMG, CSS, COLOR } from '../../utils/variables';
import { RECIPES, SLIDER_IMAGES } from '../../models/data';
import { LANG } from '../../lang/lang';
import SwiperImage from '../swiper-image/swiper-image';
import { ScrollView } from 'react-native-gesture-handler';

export default class ComboDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let recipes = this.recipes;
    return (
      <ScrollView>
        <SwiperImage height={300} listItems={ SLIDER_IMAGES}/>
        <View style={styles.container}>
          <View style={styles.topSection}>
            <View style={styles.comboLabel}>
            <Text> Combo Món</Text>
            </View>
            <Text style={styles.title}>Thịt bò xào khoai tây + Mì udon súp miso và thịt heo + Canh rong biển</Text>
            <View>
              <View>
                <Text>498</Text>
                <Text>người đặt</Text>
              </View>
              <View>
                <Text>200</Text>
                <Text>xem</Text>
              </View>
              <View></View>
            </View>
            <View style={styles.priceWrapper}>
              <View>
                <Text>1</Text>
                <Text>khẩu phần</Text>
              </View>
              <View>
                <Text>335000 {LANG.VIETNAM_DONG}</Text>
                <Text>giá ước lượng</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
