import React, { Component } from 'react';
import { Text, View, TouchableOpacity,ScrollView } from 'react-native';
import SearchBarInput from '../search-bar-input/search-bar-input';
import MostSearched from '../most-searched/most-searched';
import { LANG } from '../../lang/lang';
import styles from './page-search-recipe-style';

export default class PageSearchRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textSearch : '',
    };
    this.data = [
      { id: 1, title: 'Thit bo chien', chef: 'Hoang Kieu Nga', time: 60, link: 'https://toinayangi.vn/wp-content/uploads/2014/11/thit-bo-xao-can-toi-tay-2.jpg' },
      { id: 2, title: 'Thit bo xao khoai', chef: 'Binh Tang', time: 60, link: 'https://toinayangi.vn/wp-content/uploads/2014/11/thit-bo-xao-can-toi-tay-2.jpg' },
      { id: 3, title: 'Thit bo xao xa ot', chef: 'Trung Lu', time: 60, link: 'https://toinayangi.vn/wp-content/uploads/2014/11/thit-bo-xao-can-toi-tay-2.jpg' }
    ];
  }

  onCancel=() => {
    this.setState({
      textSearch: ''
    });
  }

  onSearch=() => {
    // alert('Search');
  }

  onChangeText=(textData) => {
    // alert('onChangeText');
    this.setState({
      textSearch: textData
    });
  }

  render() {
    const { textSearch } = this.state;
    return (
      <View style={styles.container}>
        <SearchBarInput isFocus={true} onChangeText={this.onChangeText} onCancel={this.onCancel} onSearch={this.onSearch} value={textSearch}/>
        <ScrollView style={styles.bodyView}>
          <Text style={styles.bestSellText}>{LANG.BEST_SEARCH}</Text>
          <MostSearched label={LANG.RECIPE} data={this.data} subData={true} />
          <MostSearched label={LANG.COLLECTION.name} data={this.data} />
        </ScrollView>
      </View>
    );
  }
}