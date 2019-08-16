import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';

import { COLOR, CSS, IMG } from '../../utils/variables';
import { kFormatter} from '../../utils/general';
import { LANG }  from '../../lang/lang';
import styles from './review-recipe-item-style';

export default class ReviewRecipeItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { 
      item, 
      hasRejectLabel, 
      onDetailPress, 
      onReportPress, 
      onReasonPress,
      lastCardStyle
    } = this.props;

    return (
      <View style={[CSS.frameWrap, lastCardStyle]}>
        <View style={[styles.frameVer]}>
          <View style={styles.containerTitle}>
            <TouchableOpacity style={styles.titleView} onPress={onDetailPress}>
              <Text numberOfLines={1} style={styles.titleText}>
                {item.name}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.reportView}
              onPress={onReportPress}
            >
              <Image style={styles.dotImg} source={IMG.reportHome} />
            </TouchableOpacity>
          </View>

          <View style={styles.containerTimePrice}>
            <View style={styles.priceView}>
              <Image style={styles.sandImg} source={IMG.sandClokHome} />
              <Text style={styles.textTime}>
                {item.executeTime}
              </Text>
            </View>            
            <View style={styles.lineView}>
              <View style={styles.line} />
            </View>
            <View style={styles.dollaView}>
              <Image style={styles.personImg} source={IMG.personHome} />
              <Text style={styles.textTime}>
                {kFormatter(item.numberPeople)}
                <Text> {LANG.PERSON}</Text>
              </Text>
            </View>
            <View style={styles.lineView}>
              <View style={styles.line} />
            </View>
            <View style={styles.dollaView}>
              <Image style={styles.calendarImg} source={IMG.grayCalendar} />
              <Text style={styles.textTime}>
                {item.createTime}
              </Text>
            </View>
          </View>

          <View>
            <View style={styles.imgVer}>
              <TouchableWithoutFeedback onPress={this.onPress}>
                <Image 
                  style={styles.recipeIMG} 
                  source={{ uri: item.recipeImage }}
                  PlaceholderContent={<ActivityIndicator />}
                />
              </TouchableWithoutFeedback>
            </View>
          </View>
          {
            hasRejectLabel && <View style={[CSS.flexRow, CSS.alignItemsCenter, CSS.justifySpaceBetween, { marginTop: 15}]}>
              <View style={[CSS.flexRow, styles.rejectLabel]}>
                <Image style={styles.infoImg} source={IMG.infoIcon}/>
                <Text style={styles.rejectText}>{LANG. REJECT_POST}</Text>
              </View>
              <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
                <TouchableOpacity onPress={onReasonPress}>
                  <Text style={[CSS.fontQuiRegular, CSS.fontSize13, { lineHeight: 13, color: COLOR.greenColor }]}>{LANG.SEE_THE_REASON}</Text>
                </TouchableOpacity>
                <Image source={IMG.arrowRightGreen} style={styles.arrowRightImg}/>
              </View>
            </View> 
          }     
        </View>
    </View>
    )
  }
}

