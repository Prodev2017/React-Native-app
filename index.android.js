import 'es6-symbol/implement';
import {Provider} from 'react-redux';
import store from './src/reducers/store';
import AppView from './src/modules/AppView';
import React, {Component} from 'react';
import {AppRegistry, BackAndroid} from 'react-native';
import NavigationActions from './src/actions/navigation';

export class AppTemplate extends Component {

  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.navigateBack);
  };

  navigateBack = () => {
    const navigationState = store.getState().navigationState;
    const tabs = navigationState.tabs;
    const tabKey = tabs.getIn(['routes', tabs.get('index')]).get('key');
    const currentTab = navigationState.tabKey;

    const NavigationActions = new NavigationActions;
    // if we are in the beginning of our tab stack
    if (currentTab.index === 0) {

      // if we are not in the first tab, switch tab to the leftmost one
      if (tabs.index !== 0) {
        store.dispatch(NavigationActions.switchTab(0));
        return true;
      }

      // otherwise let OS handle the back button action
      return false;
    }

    store.dispatch(NavigationActions.onNavigateBack());
    return true;
  };

  render() {
    return (
      <Provider store={store}>
        <AppView />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('PepperoniAppTemplate', () => AppTemplate);
