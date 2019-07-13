import React, { Component } from 'react';
import { Text, View, FlatList, Dimensions } from 'react-native';

import { CSS } from '../../utils/variables';
import CollectionItem from '../collection-item/collection-item';
import { COLLECTION_DATA } from '../../models/data';
import styles from './collection-list-style';

export default class CollectionList extends Component {
  constructor(props) {
    super(props);
    this.data = COLLECTION_DATA;
  }
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data = {this.data}
          renderItem = {({item, index}) => {
            return (
              <CollectionItem
                item={item} 
                index={index} 
                imgBgWrap={styles.imgBgWrap}
                blockMargin={styles.blockMargin}
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}
