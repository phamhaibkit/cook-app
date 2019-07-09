import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './trending-style';
import { COLOR } from '../../utils/variables';

export default class Trending extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.data = [
			{
				key: 'Sản phẩm khuyến mãi ',
				link: 'https://www.bbcgoodfood.com/sites/default/files/editor_files/2017/11/pickles.jpg',
			},
			{
				key: 'Bán chạy',
				link: 'https://www.bbcgoodfood.com/sites/default/files/editor_files/2017/11/rhubarb-cordial_0.jpg',
			},
			{
				key: 'Mâm cơm việt',
				link: 'https://www.bbcgoodfood.com/sites/default/files/editor_files/2017/11/poke_0.jpg',
			},
			{
				key: 'BST hot',
				link: 'https://www.bbcgoodfood.com/sites/default/files/editor_files/2017/11/gts-together.png',
			},
			{ key: 'Công thức', link: 'https://www.bbcgoodfood.com/sites/default/files/editor_files/2017/11/tea.jpg' },
			{
				key: 'Tốp thành viên',
				link: 'https://www.bbcgoodfood.com/sites/default/files/editor_files/2017/11/foraging-main.jpg',
			},
			{
				key: 'Điểm hoạt động',
				link: 'https://www.bbcgoodfood.com/sites/default/files/editor_files/2017/11/impossible.jpg',
			},
			{
				key: 'CCC ',
				link:
					'https://www.bbcgoodfood.com/sites/default/files/editor_files/2017/11/plant-based-diet-guide-main-image-700-350.jpg',
			},
			{ key: 'DDD ', link: 'https://www.bbcgoodfood.com/sites/default/files/editor_files/2018/01/potatoes.jpg' },
		];
		this.label = 'Bộ Sưu Tập';
	}

	onPress = () => {
		console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAA');
	};

	renderFrame = (item, index) => {
		const endStyle = this.data.length - 1 === index ? [styles.frame, styles.endFrame] : styles.frame;
		return (
			<TouchableOpacity style={endStyle}>
				<View style={styles.square}>
					<Image style={styles.img} source={{ uri: item.link }} resizeMode="cover" />
				</View>
				<View style={styles.containerText}>
					<Text style={styles.text}>{item.key}</Text>
				</View>
			</TouchableOpacity>
		);
	};

	render() {
		return (
			<View style={styles.container}>
				<LinearGradient
					colors={[COLOR.gradientLeft, COLOR.gradientRight]}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
					style={styles.belongHeader}
				/>
				<LinearGradient
					colors={[COLOR.gradientLeft, COLOR.gradientRight]}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
					style={styles.halfTrend}
				/>
				<FlatList
					data={this.data}
					renderItem={({ item, index }) => this.renderFrame(item, index)}
					horizontal
					showsHorizontalScrollIndicator={false}
				/>
			</View>
		);
	}
}
