import React, { Component } from 'react';
import { ActivityIndicator , Text, View, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Modal from 'react-native-modal';

import { COLOR, CSS, IMG } from '../../utils/variables';
import { LANG } from '../../lang/lang';
import styles from './user-draft-recipe-reject-style';
import userService from '../../services/user.service';
import navigationService from '../../services/navigation.service';
import { ROUTES } from '../../utils/routes';
import ReviewRecipeItem from '../review-recipe-item/review-recipe-item';
import GradientButton from '../gradient-button/gradient-button';


export default class UserDraftRecipeReject extends Component {
  constructor(props){
    super(props);
    const reasonReject = [
      {
        rejectTime: '22/11/2019, 19:32',
        rejectContents: [
          'Bước 4 sử dụng sai hình'
        ]
      },
      {
        rejectTime: '21/11/2019, 19:32',
        rejectContents: [
          'Chú ý các lỗi chính tả',
          'Thiếu nội dung ở phần nguyên liệu',
          'Bước 4 sử dụng sai hình'
        ]
      }
    ]

    this.state={
      isModalVisible: false, 
      reasons: reasonReject     
    }
  }

  renderRejectReason = (reasons) => {
    return (reasons.map ((reason, index) => {
      return (
        <View  key={index} style={{marginBottom: 6}}>
          <View style={[CSS.flexRow, styles.timeView]}>
            <Image style={styles.calendarImg} source={IMG.grayCalendar} />
            <Text style={styles.textTime}>
              {reason.rejectTime}
            </Text>
          </View>
          <Text style={styles.textReason}>{LANG.SUGGESTION_LABEL}</Text>
          {            
            reason.rejectContents &&
            reason.rejectContents.map((item, index) => {
              return <Text style={styles.textReason} key={index}>{`${index + 1}. ${item}`}</Text>
            })
          }          
        </View>
      )
    }));
  }

  editRecipe = (id) => {
    alert('Chỉnh sửa công thức với ID = ' + id);
  }
  
  render() {
    const { navigation } = this.props;
    const { reasons } = this.state;
    const item = navigation.getParam('item', {});  
    return (<View style={[CSS.draftContainer]}>   
      <ScrollView 
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={{marginTop: 5}}></View>
        <ReviewRecipeItem 
          hasRejectLabel
          hideSeeTheReason
          key={item.id}
          item={item}
          onDetailPress={this.openReport}
          onReportPress={this.openReport}
          onReasonPress={this.openReport}
        />

        <View style={[{padding: 15, marginTop: 15, flex: 1}]}>
          <Text style={[CSS.textUpperCase, CSS.fontNuExBold, CSS.fontSize15, {color: '#444', marginBottom: 10}]}>{LANG.REJECT_REASON}</Text>
          { this.renderRejectReason(reasons) }

          <View  style={{marginTop: 15}} ></View>

          <GradientButton                  
            label={LANG.EDIT_RECIPE}
            onPress={() => this.editRecipe(item.id)}
          />
        </View>
      </ScrollView>
      <Modal
        isVisible={this.state.isModalVisible}
        onBackdropPress={this.closeReport}
        onBackButtonPress={this.closeReport}
        swipeDirection={['down']}
        style={styles.modal}
      >
        <View style={styles.containerModel}>
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
    </View>)
  }
}

