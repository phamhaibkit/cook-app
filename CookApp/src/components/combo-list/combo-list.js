import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import styles from './combo-list-style';
import ComboItem from '../combo-item/combo-item';
import HomeService from '../../services/home.service';

export default class ComboList extends Component {
	constructor(props) {
    super(props);
    this.state = {
      ...HomeService.homeData
    };
  }
  componentDidMount() {
    this.getHome();
  }

  getHome = () => {
    HomeService.getHome().then(() => {
      this.setState({
        ...HomeService.homeData
      });
    });
  };

	render() {
		const { recipeCombo } = this.state;
		
    const dataLength = recipeCombo.length || 0;

    return (
      <View style={styles.container}>
        <FlatList
          data={recipeCombo}
          renderItem={({ item, index }) => <ComboItem item={item} index={index} dataLength={dataLength} isVertical/>}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
