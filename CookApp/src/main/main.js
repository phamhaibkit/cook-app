import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';


const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'space-around',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
    marginTop: 40,
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: 20,
  },
});

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../../assets/1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../../assets/2.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../../assets/3.jpg'),
    backgroundColor: '#22bcb5',
  }
];

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false
    }
  }

  _renderItem = (item) => {
    return (
      <View style={[styles.mainContent, {backgroundColor:item.backgroundColor}]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }

  render() {
    if (this.state.showRealApp) {
      return (
        <View >
          <Text >2222222222222222222222222!</Text>
          <Text >To get started, edit App.js</Text>
        </View>
      );
    } else {
      return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone}/>;
    }
  }

  
}