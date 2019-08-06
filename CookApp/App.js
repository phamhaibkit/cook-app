/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import axiosMiddleware from 'redux-axios-middleware';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import SplashScreen from 'react-native-splash-screen'
import reducer from './src/reducers/combine-reducer';
import HTTPService from './src/services/http.service';
import rootSaga from './src/sagas/root-saga';


import { Main } from './src/components/main/main';


YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Warning: Async Storage',
  'Module RCTImageLoader',
  'Module RCTMFBLoginManager',
  'Remote debugger',
  'ListView',
  'Require cycle',
  'Failed prop type'
]);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(axiosMiddleware(HTTPService.client), sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export default class App extends Component {
  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{flex: 1}}>
          <Main />
        </SafeAreaView>
      </Provider>
    );
  }
}
