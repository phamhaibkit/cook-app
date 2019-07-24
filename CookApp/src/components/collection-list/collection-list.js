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
      console.log('get data frin getcollectionList: '+ collectionService.collectionData);
      this.setState({
        ...collectionService.collectionData
      });
    });
  }
  
  render() {
    // const { data } = this.state;

    console.log('collection Listsss: ' + this.state);

    return (
      <View style={styles.container}>
        {/* <FlatList 
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
        /> */}
      </View>
    );
  }
}
