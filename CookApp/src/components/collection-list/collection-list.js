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
      this.setState({
        ...collectionService.collectionData
      });
    });
  }  

  renderItem = ({ item, index }) => (<CollectionItem item={item} isLastCard={index === (this.state.data.length - 1)} isVertical imgBgWrap={styles.imgBgWrap} blockMargin={styles.blockMargin}/>);

  render() {
    const { data }  = this.state;
    // const { navigation } = this.props;
    // const ads = navigation.getParam('ads', []);

    return  (
      <View style={styles.container}>
       {         
         data &&
         <FlatList 
          data = {data}
          renderItem = {this.renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews 
        />
       }
      </View>
    );
  }
}
