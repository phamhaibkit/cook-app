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
  }

  onPress = () => {
    alert('AAAAAAAAAAAAAAAAAAa');
  };

  renderFrame = (item, index) => {
    const { data } = this.props;
    const endStyle =
      data.length - 1 === index
        ? [styles.frame, styles.endFrame]
        : styles.frame;

    return (
      <View style={endStyle}>
        <TouchableWithoutFeedback onPress={this.onPress}>
          <View style={{ height: '100%', width: '100%', alignItems: 'center' }}>
            <View style={styles.containerWhite}>
              <Text numberOfLines={2} style={styles.nameText}>{item.firstName + ' ' + item.lastName}</Text>
            </View>
            <View style={styles.container2Img}>
              <ImageBackground
                style={styles.containerImg}
                source={{ uri: item.avatar }}
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
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => this.renderFrame(item, index)}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
