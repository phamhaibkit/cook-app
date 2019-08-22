import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Image, Avatar, Button  } from 'react-native-elements';

import styles from './user-profile-style';
import { CSS, IMG, COLOR } from '../../utils/variables';
import { LANG } from '../../lang/lang';
import { ROUTES } from '../../utils/routes';
import RecipeHighlightHome from '../recipe-highlight-home/recipe-highlight-home';
import navigationService from '../../services/navigation.service';
import recipeService from '../../services/recipe.service';
import { HeaderScroll } from '../dynamic-component/header-scroll/header-scroll';
import Spinner from '../spinner/spinner';
 
export default class UserProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: []
    }
  }

  componentWillMount() {
    recipeService.getRecipeLikedList(1).then(() => {
      this.setState({
        recipes: recipeService.recipeLikedData.recipes,
        loading: recipeService.recipeLikedData.loading
      })
    })
  }

  navigateUserInfo = () => {
    navigationService.navigate(ROUTES.userInfo.key);
  }
  
  render() {
    const { recipes, loading } = this.state;
    return (
      <HeaderScroll>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
        {
          loading ?  <Spinner /> : (
            <View>
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
                        onPress={this.navigateUserInfo}
                      />
                      <Button
                        title="Đổi ảnh bìa"
                        buttonStyle={[styles.buttonStyles]}
                        titleStyle={styles.buttonTitleStyle}
                        containerStyle={[styles.buttonContainerStyle, {marginLeft: 5}]}
                        type="outline"
                        onPress={this.navigateUserInfo}
                      />
                    </View>
                  </View>
                </View>
                <Text style={[CSS.textUpperCase, CSS.fontNuExBold, CSS.fontSize15, {color: '#444', marginTop: 30, marginBottom: 10}]}>{LANG.POSTED_RECIPE}</Text>
                <RecipeHighlightHome recipes={recipes} isLiked/>
              </View>
            </View>
          )
        }
      </ScrollView>
    </HeaderScroll>
    );
  }
}