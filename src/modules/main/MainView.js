import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import NavigationActions from '../../actions/navigation';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const color = () => Math.floor(255 * Math.random());

class ColorView extends Component {
  state = {
      background: `rgba(${color()},${color()},${color()}, 1)`
  }

  onNextPress = () => {
    const index = this.props.index;
    this.props.pushRoute({
      key: `Color_${index + 1}`,
      title: `Color Screen #${index + 1}`
    });
  };

  render() {

    const index = this.props.index;
    const text = `View #${index}`;
    return (
      <View style={[styles.container, {backgroundColor: this.state.background}]}>
        <Text onPress={this.onNextPress}>
          {text}
        </Text>
      </View>
    );
  }
}

ColorView.PropTypes = {
    index: PropTypes.number.isRequired,
    pushRoute: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapDispatchToProps = (dispatch) => (bindActionCreators(new NavigationActions, dispatch));
export default connect(undefined, mapDispatchToProps)(ColorView);
