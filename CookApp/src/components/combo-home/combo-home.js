import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import styles from './combo-home-style';
import ComboItem from '../combo-item/combo-item';

export default class ComboHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data, marTop } = this.props;
    const dataLength = data.length || 0;

    return (
      <View style={[styles.container, {marginTop: marTop}]}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => <ComboItem item={item} index={index} dataLength={dataLength} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
