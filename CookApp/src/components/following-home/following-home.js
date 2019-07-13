import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  ImageBackground
} from 'react-native';
import styles from './following-home-style';
import { COMBO_DATA } from '../../models/data';
import { IMG } from '../../utils/variables';

export default class FollowingHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.data = [
      {
        name: 'Lionel Messi',
        link:
          'https://cdn-03.independent.ie/incoming/article37708127.ece/425b0/AUTOCROP/w620/messi.jpg'
      },
      {
        name: 'Cristiano Ronaldo',
        link:
          'https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/fbl-ita-seriea-juventus-intermilan-5c0e2d8889ae140694000001.jpg'
      },
      {
        name: 'Marco Reus',
        link:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/FIFA_WC-qualification_2014_-_Austria_vs._Germany_2012-09-11_-_Marco_Reus_01.JPG/250px-FIFA_WC-qualification_2014_-_Austria_vs._Germany_2012-09-11_-_Marco_Reus_01.JPG'
      },
      {
        name: 'Ho Quang Hieu',
        link:
          'http://ttol.vietnamnetjsc.vn//2018/01/10/10/26/ngoc-trinh-mong-muon-mot-tinh-yeu-khong-xa-hoa-nhung-chan-thanh_1.jpg'
      },
      {
        name: 'Le Cat Trong Ly',
        link:
          'https://vcdn-giaitri.vnecdn.net/2019/03/17/ngoc-trinh-7-6846-1552530069-9335-1552791273.jpg'
      }
    ];
  }

  onPress = () => {
    alert('AAAAAAAAAAAAAAAAAAa');
  };

  renderFrame = (item, index) => {
    const endStyle =
      this.data.length - 1 === index
        ? [styles.frame, styles.endFrame]
        : styles.frame;

    return (
      <View style={endStyle}>
        <TouchableWithoutFeedback onPress={this.onPress}>
          <View style={{ height: '100%', width: '100%', alignItems: 'center' }}>
            <View style={styles.containerWhite}>
              <Text numberOfLines={2} style={styles.nameText}>{item.name}</Text>
            </View>
            <View style={styles.container2Img}>
              <ImageBackground
                style={styles.containerImg}
                source={{ uri: item.link }}
              />
              <View style={styles.containerRank}>
                <Image source={IMG.rankHome} style={styles.rankImg} />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.data}
          renderItem={({ item, index }) => this.renderFrame(item, index)}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
