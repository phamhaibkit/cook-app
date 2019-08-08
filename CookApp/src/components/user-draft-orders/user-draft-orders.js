import React, { Component } from 'react';
import { View, Text } from 'react-native';

import userService from '../../services/user.service';
import styles from './user-draft-orders-style';
import { CSS, COLOR } from '../../utils/variables';


export default class UserDraftOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...userService.userDraftOrders,
      modalVisible: false,
    }
  }

  componentDidMount() {
    this.getDraftOrders(1);
  }

  getDraftOrders = (userId) => {
    userService.getUserDraftOrders(userId).then(() => {      
      this.setState({
        ...userService.userDraftOrders
      });
    });
  }  

  renderDraftOrders = (draftOrders) => {
    return (
      draftOrders.map((item, index) => {
       return (
          <View style={styles.block} key={index}>
            <Text style={[CSS.fontQuiBold, CSS.fontSize14, { color: COLOR.oldPrice, marginBottom: 6}]}>Đơn Hàng Nháp 11/12/2018</Text>
            <View style={[CSS.flexRow, CSS.alignItemsCenter]}>
              <Image source={IMG.grayCalendar} style={{width: 15, height: 15, marginRight: 10}}/>
              <Text>
                {LANG.SAVED_DAY}
                <Text>{ item.createTime }</Text>
              </Text>
            </View>
            <Text></Text>
            <Text>{ item.time }</Text>
        </View>
       );
      })
    );
  }

  render() {
    const { draftOrders } = this.state;

    return (
      <View style={styles.container}>
        { draftOrders && this.renderDraftOrders(draftOrders) }
      </View>
    );
  }
}