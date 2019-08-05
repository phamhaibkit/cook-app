import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Image, Avatar } from 'react-native-elements';

import styles from './page-user-profile-style';
import { CSS, IMG, COLOR } from '../../utils/variables';
import { LANG } from '../../lang/lang';
 
export default class PageUserProfile extends Component {
  constructor(props){
    super(props);
    data: {
      chefName: 'Nguyễn phạm hạ Vy'
    }
  }
  
  render() {
    return (
     <View style={{flex: 1}}>
      <Image source={{uri: 'https://media.cooky.vn/images/blog-2016/r1-1486524356412.jpg'}} style={{width: '100%', height: 220}} />
      <View style={styles.container}>
        <View style={[styles.userInfo, CSS.lightBoxShadow]}>
          <View style={{justifyContent: 'center', alignItems: 'center', marginTop: -48}}>
            <View style={{width: 75, height: 75}}>
              <Avatar
                rounded
                size="xlarge"
                style={{width: 75, height: 75}}
                source={{
                  uri:
                    'https://allaboutkpop.net/wp-content/uploads/2019/05/7ec5e4915a4749e6919e0decef1363d5.jpg',
                }}
              />
              <View style={{width: 23, position: 'absolute', bottom: 0, right: 5, height: 23, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 12}}>
                <Image 
                  source={IMG.rankHome} 
                  style={{width: 13, height: 12}}
                />
              </View>
            </View>
          </View>
          <View>
            <Text style={[CSS.fontQuiBold, CSS.fontSize20, CSS.textAlignCenter, { color: COLOR.oldPrice, textTransform: 'uppercase'}]}>Nguyễn phạm hạ Vy</Text>
            <Text style={[CSS.textAlignCenter, CSS.fontQuiRegular, CSS.fontSize14, {color: COLOR.oldPrice}]}>“Ai mà biết được đời sẽ ra sao. Nên là, hãy ăn món tráng miệng trước” </Text>

            <View style={[CSS.flexRow, CSS.justifySpaceBetween, {}]}>
              <View>
                <Text style={styles.staticNumber}>3</Text>
                <Text style={[CSS.fontQuiRegular, CSS.fontSize13, {color: COLOR.oldPrice}]}>{LANG.RECIPE}</Text>
              </View>
              <View style={{width: 0.5, height: 34, backgroundColor: '#d3d3d3'}}></View>
              <View>
                <Text style={styles.staticNumber}>20</Text>
                <Text style={[CSS.fontQuiRegular, CSS.fontSize13, {color: COLOR.oldPrice}]}>{LANG.FOLLOWER}</Text>
              </View>
              <View style={{width: 0.5, height: 34, backgroundColor: '#d3d3d3'}}></View>
              <View>
                <Text style={styles.staticNumber}>50</Text>
                <Text style={[CSS.fontQuiRegular, CSS.fontSize13, {color: COLOR.oldPrice}]}>{LANG.IS_FOLLOWING}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
     </View>
    );
  }
}