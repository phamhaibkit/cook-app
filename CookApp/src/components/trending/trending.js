import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  Platform
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./trending-style";
import { COLOR } from "../../utils/variables";

export default class Trending extends Component {
  constructor(props) {
    super(props);
    // this.state = {trending: this.props.data};
  }

  onPress = () => {
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAA");
  };

  renderFrame = (item, index) => {
    const {data} = this.props;
    const endStyle = data.length - 1=== index
        ? [styles.frame, styles.endFrame]
        : styles.frame;
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={index === 0 ? [endStyle, {marginLeft: 15}] : endStyle}>
          <View style={styles.square}>
            <Image
              style={styles.img}
              source={{ uri: item.trendingImage }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.text} numberOfLines={2}>{item.name}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  render() {
    const {data} = this.props;
    const colorHeader =
      Platform.OS === "ios"
        ? ["white", "white"]
        : [COLOR.gradientLeft, COLOR.gradientRight];
    const colorTrending =
      Platform.OS === "ios"
        ? [COLOR.whiteColor, COLOR.searchBarIos, COLOR.backgroundColor]
        : [COLOR.gradientLeft, COLOR.gradientRight];
    const linearIos =
      Platform.OS === "ios" ? (
        <LinearGradient colors={colorTrending} style={styles.halfTrend} />
      ) : (
        <LinearGradient
          colors={colorTrending}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.halfTrend}
        />
      );
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={colorHeader}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.belongHeader}
        />
        {linearIos}
        <View style={styles.containerTrending}>
          <FlatList
            data={data}
            renderItem={({ item, index }) => this.renderFrame(item, index)}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}
