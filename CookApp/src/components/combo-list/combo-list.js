import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import styles from './combo-list-style';
import ComboItem from '../combo-item/combo-item';
import ComboService from '../../services/combo.service';

export default class ComboList extends Component {
	constructor(props) {
    super(props);
    this.state = {
      recipeCombo: ComboService.comboData
    };
  }
  componentDidMount() {
    this.getCombos();
  }

  getCombos = () => {
    ComboService.getCombo().then(() => {
      this.setState({
        recipeCombo: ComboService.comboData
      });
    });
  };

	render() {
    const { recipeCombo } = this.state;
    // const { navigation } = this.props;
    // const ads = navigation.getParam('ads', []);
		
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
