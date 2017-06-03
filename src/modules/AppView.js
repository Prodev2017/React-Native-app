import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import NavigationView from './navigation/NavigationView';
import DeveloperMenu from '../components/DeveloperMenu';

export class AppView extends Component {

  render() {
    if (!this.props.isReady) {
      return (
        <View style={{flex: 1}}>
          <ActivityIndicator style={styles.centered}/>
        </View>
      );
    }

    return (
      <View style={{flex: 1}}>
        <NavigationView />
        {__DEV__ && <DeveloperMenu />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignSelf: 'center'
  }
});

const mapStateToProps = (state) => ({
    isReady: state.session.isReady
});

export default connect(mapStateToProps)(AppView);