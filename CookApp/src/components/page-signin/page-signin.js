import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import styles from './page-signin-style'
import SigninByFacebook from '../signin-by-facebook/signin-by-facebook'

export class PageSignin extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <SigninByFacebook />
                </ScrollView>

            </View>
        )
    }
}

export default PageSignin
