import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import NavigationActions from '../../actions/navigation';

import {
    Text,
    View,
    StyleSheet
} from 'react-native';

class SignUpView extends Component {

    render() {

        return (
            <View style={[styles.container]}>
                <Text>
                    Sign up page
                </Text>
            </View>
        );
    }
}

SignUpView.PropTypes = {
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
export default connect(undefined, mapDispatchToProps)(SignUpView);
