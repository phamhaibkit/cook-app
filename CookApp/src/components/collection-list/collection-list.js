import React, { Component } from 'react';
import { Text, View, FlatList, Dimensions } from 'react-native';

import CollectionItem from '../collection-item/collection-item';
import styles from './collection-list-style';
import collectionService from '../../services/collection.service';
import navigationService from '../../services/navigation.service';
import { ROUTES } from '../../utils/routes';

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

  handlePress = (id) => {    
    navigationService.navigate(ROUTES.collectionDetail.key, { id: id });
  }

  render() {
    const { data }  = this.state;

    return (
      <View style={styles.container}>
        <FlatList 
          data = {data}
          renderItem = {({item, index}) => {
            return (
              <CollectionItem
                item={item} 
                isCollectionList 
                imgBgWrap={styles.imgBgWrap}
                blockMargin={styles.blockMargin}
                onPress={this.handlePress(item.id)}
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
