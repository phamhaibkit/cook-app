import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Image, Avatar, Button  } from 'react-native-elements';

import styles from './user-profile-style';
import { CSS, IMG, COLOR } from '../../utils/variables';
import { LANG } from '../../lang/lang';
import RecipeHighlightHome from '../recipe-highlight-home/recipe-highlight-home';
 
export default class UserProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes:  [
          {
            owner: {
              name: "Nguyễn Thị A",
              rank: 12,
              id: 1,
              avatar: "http://ttol.vietnamnetjsc.vn//2016/04/02/16/46/nhung-uan-khuc-trong-vu-co-gai-xinh-dep-tung-anh-to-chong-cu-bao-hanh_1.jpg"
            },
            shareCount: 25,
            numberEvaluate: 12,
            timeExecute: "30 phút",
            recipeImage: "https://i.ytimg.com/vi/IRKgCXdOE3o/maxresdefault.jpg",
            price: 90000,
            name: "Cá Lóc Kho Tiêu",
            numPeople: 2,
            likeCount: 25,
            id: 1,
            viewCount: 100,
            calo: 3000
          },
          {
            owner: {
            name: "Phan Thị T",
            rank: 13,
            id: 2,
            avatar: "https://genknews.genkcdn.vn/thumb_w/690/2019/5/7/phong-cach-thoi-trang-goi-cam-cua-4-my-nhan-2-15572434664761630321762.jpg"
            },
            shareCount: 5,
            numberEvaluate: 2,
            timeExecute: "60 phút",
            recipeImage: "https://i.cachnaumonan.com/wp-content/uploads/2018/08/cach-lam-mon-suon-heo-nau-lagu-4.jpg",
            price: 90000,
            name: "Sườn heo hầm rau củ",
            numPeople: 2,
            likeCount: 5,
            id: 2,
            viewCount: 10,
            calo: 3000
          },
          {
            owner: {
            name: "Phan Thị T",
            rank: 13,
            id: 2,
            avatar: "https://genknews.genkcdn.vn/thumb_w/690/2019/5/7/phong-cach-thoi-trang-goi-cam-cua-4-my-nhan-2-15572434664761630321762.jpg"
            },
            shareCount: 52,
            numberEvaluate: 28,
            timeExecute: "60 phút",
            recipeImage: "http://file.freshfoods.vn/global/sn-nng-mt-ong.jpg",
            price: 190000,
            name: "Sườn bò sốt BBQ",
            numPeople: 2,
            likeCount: 53,
            id: 4,
            viewCount: 100,
            calo: 3000
          },
          {
            owner: {
            name: "Trần Thị T",
            rank: 13,
            id: 7,
            avatar: "https://photo-2-baomoi.zadn.vn/w1000_r1/2019_01_25_329_29473537/097a1d26bc6755390c76.jpg"
            },
            shareCount: 52,
            numberEvaluate: 28,
            timeExecute: "60 phút",
            recipeImage: "https://www.heoquay.com/upload/blog/heo-quay-xao-cai-chua-4.png",
            price: 100000,
            name: "Heo quay kho dưa cải",
            numPeople: 2,
            likeCount: 53,
            id: 5,
            viewCount: 100,
            calo: 3000
          },
          {
            owner: {
            name: "Trần Thị T",
            rank: 13,
            id: 7,
            avatar: "https://photo-2-baomoi.zadn.vn/w1000_r1/2019_01_25_329_29473537/097a1d26bc6755390c76.jpg"
            },
            shareCount: 52,
            numberEvaluate: 28,
            timeExecute: "150 phút",
            recipeImage: "https://flyfood.vn/vnt_upload/product/11_2017/lau-vit-nau-chao-flyfood-10.png",
            price: 100000,
            name: "Vịt nấu chao",
            numPeople: 2,
            likeCount: 53,
            id: 6,
            viewCount: 100,
            calo: 3000
          }
        ]
    };
    data: {
      chefName: 'Nguyễn phạm hạ Vy'
    }
  }
  
  render() {
    return (
     <View style={{flex: 1}}>      
      <ScrollView>
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
              <Text style={[CSS.fontQuiBold, CSS.fontSize20, CSS.textAlignCenter, CSS.textUpperCase, { color: COLOR.oldPrice, marginTop: 10}]}>Nguyễn phạm hạ Vy</Text>
              <Text style={[CSS.textAlignCenter, CSS.fontQuiRegular, CSS.fontSize14, {color: COLOR.oldPrice}]}>“Ai mà biết được đời sẽ ra sao. Nên là, hãy ăn món tráng miệng trước” </Text>

              <View style={[CSS.flexRow, CSS.justifySpaceBetween, { marginTop: 20, alignItems: 'flex-end' }]}>
                <View>
                  <Text style={styles.statisticalNumber}>3</Text>
                  <Text style={styles.statisticalText}>{LANG.RECIPE}</Text>
                </View>
                <View style={{width: 0.6, height: 34, backgroundColor: '#d3d3d3'}}></View>
                <View>
                  <Text style={styles.statisticalNumber}>20</Text>
                  <Text style={styles.statisticalText}>{LANG.FOLLOWER}</Text>
                </View>
                <View style={{width: 0.5, height: 34, backgroundColor: '#d3d3d3'}}></View>
                <View>
                  <Text style={styles.statisticalNumber}>50</Text>
                  <Text style={styles.statisticalText}>{LANG.IS_FOLLOWING}</Text>
                </View>
              </View>

              <View style={[CSS.flexRow, CSS.alignItemsCenter, CSS.justifySpaceBetween, {marginTop: 20}]}>
                <Button
                  title="Sửa thông tin"                  
                  containerStyle={[styles.buttonContainerStyle, {marginRight: 5}]}
                  buttonStyle={[styles.buttonStyles]}
                  titleStyle={styles.buttonTitleStyle}
                  type="outline"
                  onPress={()=>{alert('press')}}
                />
                <Button
                  title="Đổi ảnh bìa"
                  buttonStyle={[styles.buttonStyles]}
                  titleStyle={styles.buttonTitleStyle}
                  containerStyle={[styles.buttonContainerStyle, {marginLeft: 5}]}
                  type="outline"
                  onPress={()=>{alert('press')}}
                />
              </View>
            </View>
          </View>
          <Text style={[CSS.textUpperCase, CSS.fontNuExBold, CSS.fontSize15, {color: '#444', marginTop: 30, marginBottom: 10}]}>{LANG.POSTED_RECIPE}</Text>
          <RecipeHighlightHome
            recipes={this.state.recipes}
          />
        </View>
      </ScrollView>
     </View>
    );
  }
}