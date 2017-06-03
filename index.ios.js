import {Provider} from 'react-redux';
import store from './src/reducers/store';
import AppView from './src/modules/AppView';

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

export class AppTemplate extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppView />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('PepperoniAppTemplate', () => AppTemplate);
