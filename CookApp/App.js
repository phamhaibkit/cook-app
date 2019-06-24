/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { YellowBox } from 'react-native';
import { Main } from './src/components/main/main';

YellowBox.ignoreWarnings([
	'Warning: isMounted(...) is deprecated',
	'Warning: Async Storage',
	'Module RCTImageLoader',
	'Module RCTMFBLoginManager',
	'Remote debugger',
	'ListView',
	'Require cycle',
]);
export default class App extends Component {
  render() {
    return (
      <Main></Main>
    );
  }
}

