import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import styles from './combo-list-style';
import ComboItem from '../combo-item/combo-item';
import comboService from '../../services/combo.service';

export default class ComboList extends Component {
	constructor(props) {
    super(props);
    this.state = {
      combos: comboService.comboData
    };
  }
  componentDidMount() {
    this.getCombos();
  }

  getCombos = () => {
    comboService.getCombo().then(() => {
      this.setState({
        combos: comboService.comboData        
      });
    });
  };

  renderItem = ({ item, index }) => (<ComboItem item={item} index={index} dataLength={this.state.combos.length || 0} isVertical/>);

	render() {
    const { combos } = this.state;
    // const { navigation } = this.props;
    // const ads = navigation.getParam('ads', []);

    return (
      <View style={styles.container}>
        {
          combos &&
          <FlatList
            data={combos}
            renderItem={this.renderItem}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            removeClippedSubviews 
          />
        }
      </View>
    );
  }
}
