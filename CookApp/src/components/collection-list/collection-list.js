import React, { Component } from 'react';
import { Text, View, FlatList, Dimensions } from 'react-native';
import CollectionItem from '../collection-item/collection-item';
import styles from './collection-list-style';

export default class CollectionList extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { navigation } = this.props;
    const data = navigation.getParam('data', {});
    
    return (
      <View style={styles.container}>
        <FlatList 
          data = {data}
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
