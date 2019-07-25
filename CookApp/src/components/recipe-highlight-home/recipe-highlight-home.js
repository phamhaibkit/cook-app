/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
  Share
} from 'react-native';
import Modal from 'react-native-modal';
import Advertiment from '../advertiment/advertiment';
import { IMG } from '../../utils/variables';
import styles from './recipe-highlight-home-style';
import { LANG } from '../../lang/lang';
import navigationService from '../../services/navigation.service';
import { ROUTES } from '../../utils/routes';
import { getCurrencyStr, kFormatter } from '../../utils/general';

export default class RecipeHighlightHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      recipe: {}
    };
  }

  onPress = () => {
    // console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAA');
  };

  onShare = () => {
    Share.share(
      {
        title: 'BeChef share',
        urlonShare: 'https://www.google.vn/',
        message: 'Nau An Di Cung',
      },
      {
        // android
        dialogTitle: 'This is BeShef share',
        // ios
        excludedActivityTypes: [
          // 'com.apple.UIKit.activity.PostToFacebook',
          // 'com.apple.UIKit.activity.PostToTwitter',
          // 'com.apple.UIKit.activity.Message',
        ],
      }
    ).then((res) => {
      console.log('DATAATATAATTA', res);
    });
  };

  openReport = (item) => {
    this.setState({
      isModalVisible: true,
      recipe: item
    });
  };

  openReportPage = () => {
    const { recipe } = this.state;
    this.closeReport();
    navigationService.navigate(ROUTES.pageReportRecipe.key, { recipe })
  }

  closeReport = () => {
    this.setState({
      isModalVisible: false
    });
  };

  renderFrame = (item, index) => {
    const { recipes, isHorizontal } = this.props;
    const horizaltalStyle =
      recipes.length - 1 === index
        ? [styles.frame, styles.endFrame]
        : styles.frame;
    const iconLove = item.isLove ? IMG.loveActiveHome : IMG.loveHome;
    const priceFormat = getCurrencyStr(item.price);
    return (
      <View style={{ flex: 1 }}>
        <View style={isHorizontal ? horizaltalStyle : styles.frameVer}>
          <View style={styles.containerTitle}>
            <TouchableOpacity style={styles.titleView} onPress={this.onPress}>
              <Text numberOfLines={1} style={styles.titleText}>
                {item.name}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.reportView}
              onPress={() => { this.openReport(item)}}
            >
              <Image style={styles.dotImg} source={IMG.reportHome} />
            </TouchableOpacity>
          </View>

          <View style={styles.containerTimePrice}>
            <View style={styles.priceView}>
              <Image style={styles.sandImg} source={IMG.sandClokHome} />
              <Text style={styles.textTime}>
                {item.timeExecute}
              </Text>
            </View>
            <View style={styles.lineView}>
              <View style={styles.line} />
            </View>
            <View style={styles.dollaView}>
              <Image style={styles.dollaImg} source={IMG.dollaHome} />
              <Text style={styles.textTime}>
                {priceFormat}
              </Text>
            </View>
            <View style={styles.lineView}>
              <View style={styles.line} />
            </View>
            <View style={styles.dollaView}>
              <Image style={styles.personImg} source={IMG.personHome} />
              <Text style={styles.textTime}>
                {kFormatter(item.numPeople)}
                <Text> người</Text>
              </Text>
            </View>
          </View>

          <View>
            <View style={isHorizontal ? styles.recipeView : styles.imgVer}>
              <TouchableWithoutFeedback onPress={this.onPress}>
                <Image style={styles.recipeIMG} source={{ uri: item.recipeImage }} />
              </TouchableWithoutFeedback>
            </View>
            <TouchableOpacity style={styles.containerChef}>
              {/* <Image style={styles.avataImg} source={{ uri: item.owner.avatar }} /> */}
              <Text style={styles.nameChef}>{item.owner && item.owner.name}</Text>
              <Image style={styles.rankImg} source={IMG.rankHome} />
            </TouchableOpacity>
          </View>

          <View style={[styles.containerTimePrice, { marginTop: 18 }]}>
            <View style={styles.priceView}>
              <Text style={styles.textTime}>
                {kFormatter(item.likeTimes)}
                <Text style={styles.textLight}> thích</Text>
              </Text>
            </View>
            <View style={styles.lineLikeView}>
              <View style={styles.line} />
            </View>
            <View style={styles.likeView}>
              <Text style={styles.textTime}>
                {kFormatter(item.numberEvaluate)}
                <Text style={styles.textLight}> bình luận</Text>
              </Text>
            </View>
            <View style={styles.lineLikeView}>
              <View style={styles.line} />
            </View>
            <View style={styles.likeView}>
              <Text style={styles.textTime}>
                {kFormatter(item.shareTimes)}
                <Text style={styles.textLight}> chia sẻ</Text>
              </Text>
            </View>
            <View style={styles.lineLikeView}>
              <View style={styles.line} />
            </View>
            <View style={styles.likeView}>
              <Text style={styles.textTime}>
                {kFormatter(item.viewTimes)}
                <Text style={styles.textLight}> xem</Text>
              </Text>
            </View>
          </View>

          <View style={styles.lineHori} />

          <View style={styles.containerLoveCmt}>
            <TouchableOpacity>
              <Image style={styles.loveImg} source={iconLove} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.cmtImg} source={IMG.commentHome} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onShare}>
              <Image style={styles.shareImg} source={IMG.shareHome} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveView}>
              <Image style={styles.saveImg} source={IMG.saveHome} />
            </TouchableOpacity>
          </View>
        </View>
        {!isHorizontal && (index + 1) % 3 === 0 && <Advertiment />}
      </View>
    );
  };

  render() {
    const { recipes, isHorizontal, marTop } = this.props;
    const { isModalVisible } = this.state;
    return (
      <View style={[styles.container, { marginTop: marTop }]}>
        <FlatList
          data={recipes}
          renderItem={({ item, index }) => this.renderFrame(item, index)}
          horizontal={isHorizontal}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={this.closeReport}
          onBackButtonPress={this.closeReport}
          swipeDirection={['down']}
          style={styles.modal}
        >
          <View style={styles.containerModel}>
            <TouchableOpacity style={styles.barButton} onPress={this.closeReport}>
              <Image source={IMG.modalBar} style={styles.modalImg} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.reportRow} onPress={this.openReportPage}>
              <Image source={IMG.reportRecipe} style={styles.reportImg} />
              <Text style={styles.reportText}>{LANG.REPORT_RECIPE}</Text>
            </TouchableOpacity>
            <View style={styles.lineReport} />
            <TouchableOpacity style={styles.reportRow} onPress={this.closeReport}>
              <Image source={IMG.closeReport} style={styles.closeImg} />
              <Text style={styles.reportText}>{LANG.CLOSE}</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}
