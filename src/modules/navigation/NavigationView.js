import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import NavigationActions from '../../actions/navigation';

import {
  NavigationExperimental,
  View,
  StyleSheet
} from 'react-native';

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader,
  PropTypes: NavigationPropTypes
} = NavigationExperimental;

import AppRouter from '../AppRouter';
import TabBar from '../../components/TabBar';

export class NavigationView extends Component {

  // NavigationHeader accepts a prop style
  // NavigationHeader.title accepts a prop textStyle
  renderHeader = (sceneProps) => {
    return (
      <NavigationHeader
        {...sceneProps}
        onNavigateBack={this.props.onNavigateBack}
        renderTitleComponent={() => {
          return (
            <NavigationHeader.Title>
              {sceneProps.scene.route.title}
            </NavigationHeader.Title>
          );
        }}
      />
    );
  }

  renderScene = (sceneProps) => {
    // render scene and apply padding to cover
    // for app bar and navigation bar
    return (
      <View style={styles.sceneContainer}>
        {AppRouter(sceneProps)}
      </View>
    );
  };

  render() {
    const {tabs} = this.props.navigationState;
    const tabKey = tabs.routes[tabs.index].key;
    const scenes = this.props.navigationState[tabKey];
    return (
      <View style={styles.container}>
        <NavigationCardStack
          key={'stack_' + tabKey}
          onNavigateBack={this.props.onNavigateBack}
          navigationState={scenes}
          renderHeader={this.renderHeader}
          renderScene={this.renderScene}
        />

      </View>
    );
  }
}

NavigationView.PropTypes = {
    onNavigateBack: PropTypes.func.isRequired,
    onNavigateCompleted: PropTypes.func.isRequired,
    navigationState: PropTypes.shape({
        tabs: PropTypes.shape({
            routes: PropTypes.arrayOf(PropTypes.shape({
                key: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired
            })).isRequired
        }).isRequired,
        HomeTab: NavigationPropTypes.navigationState.isRequired,
        ProfileTab: NavigationPropTypes.navigationState.isRequired
    }),
    switchTab: PropTypes.func.isRequired,
    pushRoute: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sceneContainer: {
    flex: 1,
    marginBottom: TAB_BAR_HEIGHT
  }
});


const mapStateToProps = (state) => ({navigationState: state.navigationState});
const mapDispatchToProps = (dispatch) => (bindActionCreators(new NavigationActions, dispatch));

export default connect(mapStateToProps,mapDispatchToProps)(NavigationView);


