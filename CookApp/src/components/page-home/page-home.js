import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import CollectionHome from '../collection-home/collection-home';
import ComboHome from '../combo-home/combo-home';
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
	viewMore = type => {
    if (type == LANG.COLLECTION) { navigationService.navigate('CollectionList'); }
    if (type == LANG.COMBO) { navigationService.navigate('ComboList');		}
	};

	render() {
    return (
			<ContainerScroll>
				<View style={styles.container}>
					<Trending />
					<ViewMoreHome type={LANG.COLLECTION} viewMore={this.viewMore}/>
					<View style={{ height: 10 }} />
					<CollectionHome />
					<View style={styles.advertisement}>
						<Image style={styles.adverImg} source={img} resizeMode="cover" />
					</View>
					<ViewMoreHome type={LANG.RECIPE_HIGHLIGHT} viewMore={this.viewMore} />
					<RecipeHighlightHome />
					<ViewMoreHome type={LANG.COMBO} viewMore={this.viewMore} />
					<ComboHome />
          <ViewMoreHome type={LANG.BEST_SELL} viewMore={this.viewMore} />
					<ProductList />
					<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 50 }}>
						<TouchableOpacity style={styles.button} onPress={() => navigationService.navigate('SignIn')}>
							<Text>Đăng nhập</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ContainerScroll>
		);
	}
}
