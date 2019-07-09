/* eslint-disable indent */
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { IMG } from '../../utils/variables';
import styles from './recipe-item-style';

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
			<View style={{padding: 10, backgroundColor: '#fff'}}>
				<TouchableOpacity style={endStyle}>
				<LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{background: 'linear-gradient(180deg, rgba(0, 16, 8, 0) 29.75%, rgba(0, 16, 8, 0.87) 93.23%)'}}>
					{/* <ImageBackground source={{ uri: item.link }} />	 */}
					<Image source={require(item.link)} style={{width: 50, height: 50}} />					
				</LinearGradient>
					{/* <ImageBackground style={styles.containerImg} source={{ uri: item.link }}>
						<View style={styles.emptyContent}/>
						<View style={styles.containerContent}>
						<View style={styles.tile}>
							<View style={styles.left}>
							<Text style={styles.titleText}>{item.key}</Text>
							</View>
							<View style={styles.right}>
							<Image source={IMG.bookmark} style={styles.image}/>
							</View>
						</View>
						<View style={styles.bottom}>
							<Text style={styles.normalText}>
							{item.recipes} - {item.saves}
							</Text>
						</View>
						</View>
					</ImageBackground> */}
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
