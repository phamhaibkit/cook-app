import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

type Props = {
	src?: String,
	size?: Number,
	user?: Object,
};
export default class Avatar extends Component {
	props: Props;

	static defaultProps = {
		size: 32,
	};

	componentWillMount() {
		console.log('aaaaaaaaaa');
	}

	render() {
		const { user, size } = this.props;
		const url = `http://graph.facebook.com/${user.facebookid}/picture?width=500&height=500`;
		const wrapperStyle = {
			width: size,
			height: size,
			borderRadius: size / 2,
			alignItems: 'center',
			justifyContent: 'center',
			flex: 1,
		};
		return (
			<View style={styles.container}>
				<Image style={wrapperStyle} source={{ uri: url }} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
