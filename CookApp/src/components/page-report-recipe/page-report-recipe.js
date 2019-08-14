import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import navigationService from "../../services/navigation.service";
import recipeService from '../../services/recipe.service';
import { COLOR, CSS } from '../../utils/variables';
import { LANG } from '../../lang/lang';
import styles from './page-report-recipe-style';

const reasonData = [
  { name: 'Thiếu đứng đắn', id: 1, select: false },
  { name: 'Hình ảnh món ăn hơi kém hấp dẫn', id: 2, select: false },
  { name: 'Nấu theo nhưng ăn không ra gì', id: 3, select: false },
  { name: 'Sai thứ tự các bước', id: 4, select: false },
  { name: 'Không còn lời gì để nói', id: 5, select: false },
  { name: 'Chuẩn bị nguyên liệu chưa đầy đủ', id: 6, select: false },
  { name: 'Khác', id: 7, select: false }
];
export default class PageReportRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reason: {},
      data: reasonData,
      ortherText: ''
    };
  }

  selectReason = (reasonRow) => {
    console.log('selectReason==', reasonRow);
    const { data } = this.state;
    data.map((item, index) => {
      if (item.id === reasonRow.id) {
        item.select = true;
        return item;
      } else {
        item.select = false;
        return item;
      }
    });
    this.setState({
      reason: reasonRow,
      data: data
    });
  };

  onReport = () => {
    const { reason, ortherText } = this.state;
    const { params } = this.props.navigation.state;
    console.log('PARMASMASMDMASDM==', params);
    if(!!reason.name){
      if(reason.id !== 7){
        recipeService.reportRecipe(params.recipe.id,  reason.name).then(() => {
          navigationService.goBack();
        })
      }else{
        if(!!ortherText){
          console.log('TEXT-SEND===', ortherText);
          recipeService.reportRecipe(params.recipe.id, ortherText).then(() => {
            navigationService.goBack();
          })
        }
      }      
    }
  }

  renderReason = (data) => {
    return data.map((item, index) => (
      <View
        key={index}
        style={styles.shadowView}
      >
        <LinearGradient
          colors={item.select ? [COLOR.gradientLeft, COLOR.gradientRight] : [COLOR.whiteColor, COLOR.whiteColor]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ flex: 1 }}
        >
          <TouchableOpacity
            style={styles.reasonButton}
            onPress={() => {
              this.selectReason(item);
            }}
          >
            <Text style={{ fontFamily: CSS.fontText, color: item.select ? COLOR.whiteColor : COLOR.blackColor }}>{item.name}</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    ));
  }

  bottomButton = () => {
    return (
      <LinearGradient
        colors={[COLOR.gradientLeft, COLOR.gradientRight]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.bottomView}
      >
        <TouchableOpacity
          style={[styles.reasonButton, { alignItems: 'center' }]}
          onPress={this.onReport}
        >
          <Text style={styles.textBottom}>{LANG.SEND_REPORT}</Text>
        </TouchableOpacity>
      </LinearGradient>
    )
  }

  render() {
    const { data, ortherText } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={{ marginBottom: 50 }}>
          {this.renderReason(data)}
          {data[6].select && (
            <View style={styles.inputView}>
              <TextInput 
                multiline={true}
                numberOfLines={4}
                placeholder={LANG.REQUIRE_REPORT} 
                style={styles.inputText} 
                value={ortherText}
                onChangeText={(text) => this.setState({ortherText: text})}
              />
            </View>
          )}
        </ScrollView>
        {this.bottomButton()}
      </View>
    );
  }
}
