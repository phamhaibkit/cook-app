import React, { Component } from 'react';
import { Text, View, ScrollView, Animated, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SearchBarHeader from '../search-bar/search-bar';
import CartHome from '../cart-home/cart-home';
import { LANG } from '../../lang/lang';
import styles from './container-scroll-style';
import { COLOR } from '../../utils/variables';

const HEADER_MAX_HEIGHT = 105;
const HEADER_MIN_HEIGHT = 50;

export default class ContainerScroll extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scrollY: new Animated.Value(0),
		};
	}

	render() {
		const { scrollY } = this.state;
		const headerHeight = scrollY.interpolate({
			inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
			outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
			extrapolate: 'clamp',
		});

		const headerZindex = scrollY.interpolate({
			inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
			outputRange: [1, 2],
			extrapolate: 'clamp',
		});

		const searchPaddingRight = scrollY.interpolate({
			inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
			outputRange: [15, 45],
			extrapolate: 'clamp',
		});

		const colorHeader = Platform.OS === 'ios' ? ['white', 'white'] : [COLOR.gradientLeft, COLOR.gradientRight] ;
		const colorAppName = Platform.OS === 'ios' ? [styles.appNameTxt, styles.appNameIos] : styles.appNameTxt ;

		return (
			<View style={{ flex: 1 }}>
				<Animated.View style={[styles.containerAnimated, { height: headerHeight, zIndex: headerZindex }]}>
					<LinearGradient
						colors={colorHeader}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
						style={styles.containerSearch}
					>
						<Animated.View style={[styles.containerGadient, { paddingRight: searchPaddingRight }]}>
							<SearchBarHeader />
						</Animated.View>
					</LinearGradient>
				</Animated.View>
				<ScrollView
					style={{ flex: 1 }}
					scrollEventThrottle={16}
					onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }])}
					showsVerticalScrollIndicator={false}
				>
					<LinearGradient
						colors={colorHeader}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
						style={{
							height: HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
							flex: 1,
						}}
					>
						<View style={styles.appNameView}>
							<Text style={colorAppName}>{LANG.APP_NAME}</Text>
						</View>
					</LinearGradient>
					<View style={{ marginTop: HEADER_MIN_HEIGHT - 5 }}>{this.props.children}</View>
				</ScrollView>
				<View style={styles.cartView}>
					<CartHome />
				</View>
			</View>
		);
	}
}
