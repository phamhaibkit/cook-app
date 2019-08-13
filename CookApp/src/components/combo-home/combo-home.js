import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import styles from './combo-home-style';
import ComboItem from '../combo-item/combo-item';

export default class ComboHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem = ({ item, index }) => (<ComboItem item={item} index={index} dataLength={this.props.data.length || 0} />);

  render() {
    const { data, marTop } = this.props;    

    return (
      <View style={[styles.container, {marginTop: marTop}]}>
        {
          data && 
          <FlatList
            data={data}
            renderItem={this.renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            removeClippedSubviews
          />
        }
      </View>
    );
  }
}
