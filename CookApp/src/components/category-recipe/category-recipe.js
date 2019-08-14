import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import styles from './category-recipe-style';
import { IMG } from '../../utils/variables';

export default class CategoryRecipe extends Component {
  constructor(props) {
    super(props);
    const { category } = this.props;
    this.state = {
      category: category
    }
    this.numCols;
  }

  componentWillReceiveProps(nextProps){
    const {canChoise} = this.props;
    const newCate = nextProps.category;
    this.numCols = newCate.length % 2 === 0
        ? newCate.length / 2
        : (newCate.length + 1) / 2;
    if(canChoise) {
      newCate && newCate.map((item, index) => {
        item.checked = false;
      });
    }
    this.setState({
      category: newCate
    })
  }

  onPress = (cateChoise) => {
    const {canChoise, selectedCate} = this.props;
    if(canChoise){
      const { category } = this.state;
      category && category.map((item, index) => {
        if (item.id === cateChoise.id) {
          item.checked = !item.checked;
          return item;
        }
      });
      this.setState({
        category: category
      }, () => {
        const selected = category.filter(item => item.checked === true);
        // const selectedArrr =[];
        // selected.map(item => {
        //   selectedArrr.push(item.name)
        // })
        selectedCate && selectedCate(selected);
      })
    }else{
      alert('9999999999999');
    }
    
  };

  renderFrame = (item, index) => {
    const { category } = this.state;
    const endStyle =
      category.length - 1 === index ||
      (category.length - 1) / 2 === index
        ? [styles.frame, styles.endFrame]
        : styles.frame;
    return (
      <View style={endStyle}>
        <TouchableWithoutFeedback onPress={() => this.onPress(item)} style={{ zIndex: 2 }}>
          <View style={styles.containerTouch}>
            <Image style={styles.imgCate} source={{ uri: item.catalogImage }}></Image>
            {item.checked &&
              <Image source={IMG.categoryChecked} style={styles.categoryChecked}/>
            }
            <Text style={styles.cateText}>{item.name}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  render() {
    const { category } = this.state;
    return (
      <View style={styles.container}>
        {!!this.numCols && 
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <FlatList
              contentContainerStyle={{
                alignSelf: 'flex-start'
              }}
              numColumns={this.numCols}
              data={category}
              renderItem={({ item, index }) => this.renderFrame(item, index)}
              keyExtractor={(item, index) => index.toString()}
            />
          </ScrollView>
        }
      </View>
    );
  }
}
