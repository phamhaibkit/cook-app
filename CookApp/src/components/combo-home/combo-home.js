import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  TouchableWithoutFeedback
} from 'react-native';
import styles from './combo-home-style';
import { COMBO_DATA } from '../../models/data';
import { LANG } from '../../lang/lang';

export default class ComboHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPress = () => {
    alert('AAAAAAAAAAAAAAAAAAa');
  };

  renderFrame = (item, index) => {
    const endStyle =
      this.props.data.length - 1 === index
        ? [styles.frame, styles.endFrame]
        : styles.frame;
    let combo;
    console.log('combo Length', item);
    switch (item.length) {
    case 2:
      combo = this.render2or4Item(item, false);
      break;
    case 3:
      combo = this.render3or5Item(item, false);
      break;
    case 4:
      combo = this.render2or4Item(item, true);
      break;
    case 5:
      combo = this.render3or5Item(item, true);
      break;
    default:
      break;
    }
    return <View style={endStyle}>{combo}</View>;
  };

  renderTitle = (title, orders, views) => {
    return (
      <View style={styles.container2Item}>
        <View style={styles.containerWhite}>
          <TouchableOpacity onPress={this.onPress}>
            <Text style={styles.textTitle} numberOfLines={2}>
              {title}
            </Text>
          </TouchableOpacity>
          <View style={styles.lineHori} />
          <View style={styles.containerTimePrice}>
            <View style={styles.priceView}>
              <Text style={styles.textTime}>{orders}</Text>
              <Text style={styles.textTime}>{LANG.ORDER_OWNER}</Text>
            </View>
            <View style={styles.lineLikeView}>
              <View style={styles.line} />
            </View>
            <View style={styles.likeView}>
              <Text style={styles.textTime}>{views}</Text>
              <Text style={styles.textTime}>{LANG.VIEW}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  render2or4Item = (item, is4) => {
    let titleText = `${item[0].comboName} + ' + ' + ${item[1].comboName}`;
    const addTitle = is4
      ? ` + ${item[2].comboName} + ${item[3].comboName}`
      : '';
    titleText += addTitle;
    const imgLeftStyle = is4 ? styles.img4LeftUp : styles.img2LeftView;
    const imgRightStyle = is4 ? styles.img4RighttUp : styles.img2RightView;
    return (
      <View style={{ height: '100%', width: '100%' }}>
        {this.renderTitle(titleText, item.numberOrder, item.viewNumber)}
        <TouchableWithoutFeedback onPress={this.onPress}>
          <View style={styles.container2Img}>
            <View style={[styles.containerImg, { flexDirection: 'row' }]}>
              <View>
                <ImageBackground
                  style={imgLeftStyle}
                  source={{ uri: item[0].comboImage }}
                />
                {is4 && (
                  <ImageBackground
                    style={styles.img4LeftDown}
                    source={{ uri: item[2].comboImage }}
                  />
                )}
              </View>
              <View>
                <ImageBackground
                  style={imgRightStyle}
                  source={{ uri: item[1].comboImage }}
                />
                {is4 && (
                  <ImageBackground
                    style={[styles.img4LeftDown, { marginLeft: 4 }]}
                    source={{ uri: item[3].comboImage }}
                  />
                )}
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  render3or5Item = (item, is5) => {
    let titleText = `${item[0].comboImage} + ${item[1].comboImage} + ${
      item[2].comboImage
    }`;
    const addTitle = is5
      ? `+ ${item.combo[3].comboImage} + ${item.combo[4].comboImage}`
      : '';
    titleText += addTitle;
    const imgUpStyle = is5 ? styles.imgUp5 : styles.imgUp3;
    const imgDownStyle = is5 ? styles.imgDown5 : styles.imgDown3;
    return (
      <View style={{ height: '100%', width: '100%' }}>
        {this.renderTitle(titleText, item.numberOrder, item.viewNumber)}
        <TouchableWithoutFeedback onPress={this.onPress}>
          <View style={styles.container2Img}>
            <View style={styles.containerImg}>
              <ImageBackground
                style={styles.imgLeftView}
                source={{ uri: item[0].comboImage }}
              />
              <View style={styles.imgRightView}>
                <View style={styles.addImgView}>
                  <ImageBackground
                    style={imgUpStyle}
                    source={{ uri: item[1].comboImage }}
                  />
                  {is5 && (
                    <ImageBackground
                      style={styles.imgRightUp5}
                      source={{ uri: item[3].comboImage }}
                    />
                  )}
                </View>
                <View style={styles.addImgView}>
                  <ImageBackground
                    style={imgDownStyle}
                    source={{ uri: item[2].comboImage }}
                  />
                  {is5 && (
                    <ImageBackground
                      style={styles.imgRightDown5}
                      source={{ uri: item[4].comboImage }}
                    />
                  )}
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => this.renderFrame(item, index)}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
