import React, { Component } from 'react';
import { Text, View, FlatList, Dimensions } from 'react-native';

import CollectionItem from '../collection-item/collection-item';
import styles from './collection-list-style';
import collectionService from '../../services/collection.service';

export default class CollectionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...collectionService.collectionData
    }
  }

  componentDidMount() {
    this.getCollectionList();
  }

  getCollectionList = () => {
    collectionService.getCollections().then(() => {      
      let data = [...collectionService.collectionData];
      this.setState({
        data: data
      });
    });
  }  

  render() {
    const { data }  = this.state;
    const { navigation } = this.props;
    const ads = navigation.getParam('ads', []);

    return (
      <View style={styles.container}>
        <FlatList 
          data = {data}
          renderItem = {({item, index}) => {
            return (
              <CollectionItem
                item={item} 
                isVertical 
                ads={ads}
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
