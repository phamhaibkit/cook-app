/* eslint-disable indent */
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { Text, View, Image, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import { IMG } from '../../utils/variables';
import styles from './recipe-item-style';
import { COLOR, CSS } from '../../utils/variables';

export default class RecipeItem extends Component {
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

	renderFrame = (item, index) => {
		const endStyle = this.data.length - 1 === index ? [styles.frame, styles.endFrame] : styles.frame;
		return (
			<View style={[{padding: 10, backgroundColor: '#fff', marginRight: 10 }, CSS.lightBoxShadow, CSS.borderRadius5]}>
				<TouchableOpacity style={endStyle}>
					<ImageBackground  style={{ width: 290, height: 190 }} source={require('../../../assets/collections/collection-1.png')}>
						<LinearGradient
							colors={[COLOR.gradientBlackTopColor, COLOR.gradientBlackBottomColor]}
							start={{ x: 0, y: 0 }}
							end={{ x: 0, y: 1 }}
							style={{ width: 290, height: 190 }}
						/>
						<View style={{ position: 'absolute', top: 10, right: 10, padding: 8, backgroundColor: '#fff', borderRadius: 10 }}>
							<Image style={{ height: 17, width: 16 }} source={require('../../../assets/icons/save-icon-3x.png')}/>
						</View>
						<View style={{ position: 'absolute', bottom: 15, left: 15, right: 15, color: 'white' }}>
							<View>
								<Text style={[styles.collectionTitle, CSS.fontTitle ]}>{item.key}</Text>
							</View>								
							<View style={{ flex: 1, flexDirection: 'row' }}>
								<View style={{ flexDirection: 'row', alignItems: 'center' }}>
									<Image style={{ width: 12, height: 7 }} source={require('../../../assets/icons/recipe-icon-1x.png')}/>
									<Text style={styles.statisticalNumber}>{item.recipes}</Text>
								</View>
								<View style={styles.separator} />
								<View style={{flexDirection: 'row', alignItems: 'center'}}>
									<Image style={{ width: 10, height: 10 }} source={require('../../../assets/icons/bookmark-icon-3x.png')}/>
									<Text style={styles.statisticalNumber}>{item.saves}</Text>
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
				<FlatList data={this.data} renderItem={({ item, index }) => this.renderFrame(item, index)} horizontal showsHorizontalScrollIndicator={false}/>
			</View>
		);
	}
}
