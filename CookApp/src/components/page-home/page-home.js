import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import CollectionList from '../collection-list/collection-list';
import ComboItem from '../combo-item/combo-item';
import Trending from '../trending/trending';
import ContainerScroll from '../container-scroll/container-scroll';
import navigationService from '../../services/navigation.service';
import ProductList from '../product-list/product-list';
import ViewMoreHome from '../view-more-home/view-more-home';
import RecipeHighlightHome from '../recipe-highlight-home/recipe-highlight-home';
import { LANG } from '../../lang/lang';
import styles from './page-home-style';

const img = {
	uri: 'https://image.shutterstock.com/image-photo/mix-fresh-green-fruits-on-260nw-571146373.jpg',
};

export default class PageHome extends Component {
	viewMore = type => {};

	render() {
		return (
			<ContainerScroll>
				<View style={styles.container}>
					<Trending />
					<ViewMoreHome type={LANG.COLLECTION} viewMore={this.viewMore} />
					<View style={{ height: 10 }} />
					<CollectionList />
					<View style={styles.advertisement}>
						<Image style={styles.adverImg} source={img} resizeMode="cover" />
					</View>
					<ViewMoreHome type={LANG.RECIPE_HIGHLIGHT} viewMore={this.viewMore} />
					<RecipeHighlightHome />
					<ComboItem />
					<ProductList />
					<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
						<TouchableOpacity style={styles.button} onPress={() => navigationService.navigate('InforUser')}>
							<Text>Đăng nhập</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ContainerScroll>
		);
	}
}
