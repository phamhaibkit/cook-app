import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import { IMG } from '../../utils/variables';
import { LANG } from '../../lang/lang';
import styles from './recipe-item-style';

export default class RecipeItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.data = [
			{ key: 'Những món ăn giành cho những ngày đầu mùa mưa', recipes: '20 công thức', saves: '200 lưu lại', link: 'https://www.bbcgoodfood.com/sites/default/files/editor_files/2018/12/lahpet_stuffed-aubergine.jpg' },
			{ key: 'Những món ăn giành cho những người thất tình', recipes: '20 công thức', saves: '200 lưu lại', link: 'https://www.bbcgoodfood.com/sites/default/files/editor_files/2018/12/coffee-komboucha.jpg' },
			{ key: 'Cay và nóng là 2 món được ưa thích', recipes: '20 công thức', saves: '200 lưu lại', link: 'https://www.bbcgoodfood.com/sites/default/files/editor_files/2018/12/hidden-vegetable-beef-burgers.jpg' },
			{ key: 'Neu nhu mot ngay em khong giong', recipes: '20 công thức', saves: '200 lưu lại', link: 'https://www.bbcgoodfood.com/sites/default/files/editor_files/2018/12/goat-curry.jpg' },
			{ key: 'Tai sao ma do ta khong do nang vay', recipes: '20 công thức', saves: '200 lưu lại', link: 'https://www.bbcgoodfood.com/sites/default/files/editor_files/2017/11/pickles.jpg' },
		];
		this.label = LANG.COLLECTION;
	}

  onPress = () => {
			// console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAA', 'aa');
  }

	renderFrame = (item, index) => {
		const endStyle = this.data.length - 1 === index ? [styles.frame, styles.endFrame] : styles.frame;
		return (
			<TouchableOpacity style={endStyle}>
      	<ImageBackground style={styles.containerImg} source={{ uri: item.link }}>
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
      	</ImageBackground>
			</TouchableOpacity>
		);
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.containerlabel}>
          	<Text style={styles.labelText}>{this.label}</Text>
          	<TouchableOpacity style={styles.textButton} onPress={this.onPress}>
            	<Text style={styles.moreText}>{LANG.VIEW_MORE}</Text>
          	</TouchableOpacity>
				</View>
				<FlatList data={this.data} renderItem={({ item, index }) => this.renderFrame(item, index)} horizontal showsHorizontalScrollIndicator={false}/>
			</View>
		);
	}
}
