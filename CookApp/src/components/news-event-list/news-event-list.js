import React, { Component } from 'react';
import { View } from 'react-native';
import { COLOR } from '../../utils/variables';
import NewsEvent from '../news-event/news-event';
import newsEventService from '../../services/news-event.service';

// import recipeService from '../../services/recipe.service';


export default class NewsEventList extends Component {
  constructor(props){
    super(props);
    this.state = {
      newsEvents: []
    }
  }

  componentDidMount() {
    newsEventService.getNewsEventData().then(() => {
      this.setState({
        newsEvents: newsEventService.newsEventData.newsEvents
      })
    })
  }
  render() {
    const { newsEvents } = this.state;
    return (
      <View style={{ flex: 1, paddingBottom: 15, backgroundColor: COLOR.backgroundColor }}>
        <NewsEvent data={newsEvents} isVertical/>
      </View>
    );
  }
}