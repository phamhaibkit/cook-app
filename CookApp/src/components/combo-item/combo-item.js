import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback
} from 'react-native';

import styles from './combo-item-style';
import { LANG } from '../../lang/lang';
import { CSS } from '../../utils/variables';
import navigationService from '../../services/navigation.service';
import { ROUTES } from '../../utils/routes';
import { kFormatter } from '../../utils/general';
import Advertiment from '../advertiment/advertiment';

export default class ComboItem extends Component {
	constructor(props) {
		super(props);
    this.state = {}; 
  }
  
  handlePress = () => {  
    const { item } = this.props;
    navigationService.navigate(ROUTES.comboDetail.key, { id: item.id || item.comboId});
  }

	renderFrame = (item, index) => {
    const { isVertical, ads } = this.props;
 
    const styleFrame = isVertical ? [styles.frame, styles.frameVertical] : styles.frame;
    const styleEndFrame = isVertical ? [...styleFrame, styles.endFrameVertical] : [styleFrame, styles.endFrame];
    const endStyle =
      this.props.dataLength - 1 === index
        ? styleEndFrame
        : styleFrame;
    let combo;
    switch (item && item.comboImages.length) {
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
    return (
      <View>
        <View style={endStyle}>{combo}</View>
        {
          isVertical && (item.id + 1) % 3 === 0 && (<Advertiment data={ads} marginTop={15}/>)     
        }
      </View>
    )
  };

  renderTitle = (title, orders, views) => {
    return (
      <View style={styles.container2Item}>
        <View style={[styles.containerWhite, styles.containerFluid]}>
          <TouchableOpacity onPress={this.handlePress}>
            <Text style={styles.textTitle} numberOfLines={2}>
              {title}
            </Text>
          </TouchableOpacity>
          <View style={styles.lineHori} />
          <View style={styles.containerTimePrice}>
            <View style={styles.priceView}>
              <Text style={styles.textTime}>
                {kFormatter(orders)}
                <Text style={styles.textLight}> {LANG.ORDER_OWNER}</Text>
              </Text>
            </View>
            <View style={styles.lineLikeView}>
              <View style={styles.line} />
            </View>
            <View style={styles.likeView}>
              <Text style={styles.textTime}>
                {kFormatter(views)}
                <Text style={styles.textLight}> {LANG.VIEW}</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  render2or4Item = (item, is4) => {
    const { isVertical } = this.props;
    const imgLeftStyle = is4 ? (isVertical ? [styles.img4LeftUp, styles.img4LeftUpVertical] : styles.img4LeftUp) : (isVertical ? [styles.img2LeftView, styles.img2LeftViewVertical] : styles.img2LeftView);
    const imgRightStyle = is4 ? (isVertical ? [styles.img4RightUp, styles.img4RightUpVertical] : styles.img4RightUp) : (isVertical ? [styles.img2RightView, styles.img2RightViewVertical]: styles.img2RightView);
    const imgLeftDown = isVertical ? [styles.img4LeftDown, styles.img4LeftDownVertical] : styles.img4LeftDown;
    const imgRightDown = isVertical ? [styles.img4LeftDown, styles.img4LeftDownVertical, styles.img4RightDown] : [styles.img4LeftDown, styles.img4RightDown];
    const imgContainerWidth = isVertical ? [styles.containerImg, styles.containerImgVertical, CSS.flexRow] : [styles.containerImg, CSS.flexRow];
    return (
      <View style={styles.containerFluid}>
        {this.renderTitle(item.name, item.numberOrder, item.viewCount)}
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <View style={styles.container2Img}>
            <View style={imgContainerWidth}>
              <View>
                <ImageBackground
                  style={imgLeftStyle}
                  source={{ uri: item.comboImages[0] }}
                />
                {is4 && (
                  <ImageBackground
                    style={imgLeftDown}
                    source={{ uri:  item.comboImages[2] }}
                  />
                )}
              </View>
              <View>
                <ImageBackground
                  style={imgRightStyle}
                  source={{ uri:  item.comboImages[1] }}

                />
                {is4 && (
                  <ImageBackground
                    style={imgRightDown}
                    source={{ uri:  item.comboImages[3] }}
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
    const { isVertical } = this.props;
    const imgUpStyle = is5 ? (isVertical ? [styles.imgUp5, styles.imgUp5Ver] : styles.imgUp5) : (isVertical ? [styles.imgUp3, styles.imgUp3Ver] : styles.imgUp3);
    const imgDownStyle = is5 ? (isVertical ? [styles.imgDown5, styles.imgDown5Ver] : styles.imgDown5) : (isVertical ? [styles.imgDown3, styles.imgDown3Ver] : styles.imgDown3);
    return (
      <View style={styles.containerFluid}>
        {this.renderTitle(item.name, item.numberOrder, item.viewCount)}
        <TouchableWithoutFeedback onPress={this.onPress}>
          <View style={styles.container2Img}>
            <View style={styles.containerImg}>
              <ImageBackground
                style={isVertical ? [styles.imgLeftView, styles.imgLeftViewVertical] : styles.imgLeftView}
                source={{ uri:  item.comboImages[0] }}
              />
              <View style={styles.imgRightView}>
                <View style={styles.addImgView}>
                  <ImageBackground
                    style={imgUpStyle}
                    source={{ uri:  item.comboImages[1] }}
                  />
                  {is5 && (
                    <ImageBackground
                      style={isVertical ? [styles.imgRightUp5, styles.imgRightUp5Ver] : styles.imgRightUp5}
                      source={{ uri:  item.comboImages[3] }}
                    />
                  )}
                </View>
                <View style={styles.addImgView}>
                  <ImageBackground
                    style={imgDownStyle}
                    source={{ uri:  item.comboImages[2] }}
                  />
                  {is5 && (
                    <ImageBackground
                      style={isVertical ? [styles.imgRightDown5, styles.imgRightDown5Ver] : styles.imgRightDown5}
                      source={{ uri:  item.comboImages[4] }}
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
    const { item, index } = this.props;	
   
		return this.renderFrame(item, index);		
	}
}
