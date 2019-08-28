/* eslint-disable indent */
import React, { PureComponent } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';

import { Text, View, TouchableWithoutFeedback, ImageBackground, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
// import { Image } from 'react-native-elements';
import { IMG } from '../../utils/variables';
import styles from './collection-item-style';
import { COLOR, CSS } from '../../utils/variables';
import { LANG } from '../../lang/lang';
import navigationService from '../../services/navigation.service';
import { ROUTES } from '../../utils/routes';
import Advertiment from '../advertiment/advertiment';
import homeService from '../../services/home.service';
import { kFormatter, capitalize } from '../../utils/general';

class CollectionItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state={
      item: props.item,
      ads: homeService.adsData,
    }
  }

  componentDidMount(){
    this.getAds();
  }

  getAds = () => {
    homeService.getAds().then(() => {
      this.setState({
        ads: homeService.adsData
      })
    })
  }

  handlePress = () => {  
    const { item } = this.props;
    navigationService.navigate(ROUTES.collectionDetail.key, { id: item.id });
  }

  handleSave = () => {
    const { item } = this.state;

    const itemClone = _.cloneDeep(item);
    itemClone.isSaved = !itemClone.isSaved;

    this.setState({
      item: itemClone
    })
  }
  
  render() {
    let { 
      item, 
      imgBgWrap, 
      blockMargin, 
      onPressSave, 
      isVertical,
      isLastCard
    } = this.props;

    const { ads } = this.state;

    const iconSave = this.state.item.isSaved ? IMG.saveActiveHome: IMG.saveHome;
    const lastCardStyle = isLastCard && (isVertical ? { marginBottom: 20 } : { marginRight: 20 })
 
    return (
       <View>
         <View style={[styles.blockContainer, CSS.borderRadius5, blockMargin, lastCardStyle]} >
          <TouchableWithoutFeedback onPress={ this.handlePress }>
            <View>
              <ImageBackground style={[imgBgWrap, CSS.borderRadius5]} source={{ uri: item.images[0] }}>
                <LinearGradient
                  colors={[COLOR.gradientBlackTopColor, COLOR.gradientBlackBottomColor]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={[imgBgWrap, CSS.borderRadius5]}
                />            
              </ImageBackground>
              <View style={[imgBgWrap,{ marginTop: -imgBgWrap.height}]}>              
                <View style={styles.blockContentWrap}>
                  <View>
                    <Text style={[styles.collectionTitle, CSS.fontTitle, CSS.fontQuiBold]}>{item.name}</Text>
                  </View>
                  <View style={[styles.statisticalWrap, CSS.alignItemsCenter]}>
                    <View style={[CSS.flexRow, CSS.alignItemsCenter, CSS.justifyContentCenter]}>
                      <Image style={styles.recipeIcon} source={IMG.recipeIcon}/>
                      <Text style={[styles.statisticalNumber, CSS.fontQuiRegular]}>{ kFormatter(item.recipeCount) } {LANG.RECIPE}</Text>
                    </View>
                    <View style={styles.separator} />
                    <View style={[CSS.flexRow, CSS.alignItemsCenter, CSS.justifyContentCenter]}>
                      <Image style={styles.smallSaveIcon} source={IMG.whiteBookmarkIcon}/>
                      <Text style={[styles.statisticalNumber, CSS.fontQuiRegular]}>{ kFormatter(item.savedCount) } {capitalize(LANG.SAVE)}</Text>
                    </View>
                    {
                      isVertical &&
                      <React.Fragment>
                        <View style={styles.separator} />
                        <View style={[CSS.flexRow, CSS.alignItemsCenter, CSS.justifyContentCenter]}>
                          <Image style={styles.eyeIcon} source={IMG.eyeIcon}/>
                          <Text style={[styles.statisticalNumber, CSS.fontQuiRegular]}>{ kFormatter(item.viewCount) } {LANG.VIEW}</Text>
                        </View>
                      </React.Fragment>
                    }
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableOpacity style={isVertical ? [styles.saveCollection, styles.saveCollectionVer] : [styles.saveCollection, styles.saveCollectionHor]} onPress={this.handleSave}>                  
            <Image style={styles.saveIcon} source={iconSave}/>
          </TouchableOpacity>
        </View>
        {          
          isVertical && (item.id + 1) % 2 === 0 && ads && <Advertiment data={ads} marginTop={10}/>
        }        
       </View>
    );
  }
};

export default CollectionItem;