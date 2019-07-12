/* eslint-disable indent */
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { Text, View, Image, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import { IMG } from '../../utils/variables';
import styles from './collection-home-style';
import { COLOR, CSS } from '../../utils/variables';

export default class CollectionItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.data = [
			{ key: 'Những món ăn giành cho những ngày đầu mùa mưa', recipes: '20 công thức', saves: '200 lưu lại', link: '/assets/collections/collection-1.png' },
			{ key: 'Những món ăn giành cho những người thất tình', recipes: '20 công thức', saves: '200 lưu lại', link: '/assets/collections/collection-1.png' },
			{ key: 'Cay và nóng là 2 món được ưa thích', recipes: '20 công thức', saves: '200 lưu lại', link: '/assets/collections/collection-1.png' },
			{ key: 'Neu nhu mot ngay em khong giong', recipes: '20 công thức', saves: '200 lưu lại', link: '/assets/collections/collection-1.png' },
			{ key: 'Tai sao ma do ta khong do nang vay', recipes: '20 công thức', saves: '200 lưu lại', link: '/assets/collections/collection-1.png' },
		];
	}

  onPress = () => {	}

	renderRecipeItem = (item, index) => {
		const endStyle = this.data.length - 1 === index ? [styles.frame, styles.endFrame] : styles.frame;
		return (
			<View style={[styles.blockContainer, CSS.lightBoxShadow, CSS.borderRadius5]}>
				<TouchableOpacity style={endStyle}>
					<ImageBackground style={styles.imgBgWrap} source={require('../../../assets/collections/collection-1.png')}>
						<LinearGradient
							colors={[COLOR.gradientBlackTopColor, COLOR.gradientBlackBottomColor]}
							start={{ x: 0, y: 0 }}
							end={{ x: 0, y: 1 }}
							style={styles.linearGradientLayer}
						/>
						<View style={styles.saveCollection}>
							<Image style={styles.saveIcon} source={IMG.greenBookmarkIcon}/>
						</View>
						<View style={styles.blockContentWrap}>
							<View>
								<Text style={[styles.collectionTitle, CSS.fontTitle, CSS.fontQuiBold]}>{item.key}</Text>
							</View>								
							<View style={[styles.statisticalWrap, CSS.alignItemsCenter]}>
								<View style={[CSS.flexRow, CSS.alignItemsCenter]}>
									<Image style={styles.recipeIcon} source={IMG.recipeIcon}/>
									<Text style={[styles.statisticalNumber, CSS.fontQuiRegular]}>{item.recipes}</Text>
								</View>
								<View style={styles.separator} />
								<View style={[CSS.flexRow, CSS.alignItemsCenter]}>
									<Image style={styles.smallSaveIcon} source={IMG.whiteBookmarkIcon}/>
									<Text style={[styles.statisticalNumber, CSS.fontQuiRegular]}>{item.saves}</Text>
								</View>
							</View>								
						</View>						
					</ImageBackground>
				</TouchableOpacity>
			</View>
		);
	};

	render() {
		return (
			<View style={styles.container}>
				<FlatList data={this.data} renderItem={({ item, index }) => this.renderRecipeItem(item, index)} horizontal showsHorizontalScrollIndicator={false}/>
			</View>
		);
	}
}
