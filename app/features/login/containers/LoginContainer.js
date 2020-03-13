import React, { Component } from 'react';
import LoginView from './LoginView';
import { connect } from 'react-redux';
import * as loginActions from '../actions';
import { getLoginState } from '../selectors';

/**
 * Container for LoginView connects view to Redux
 * @component
 * @example
 *
 * return (
 *   <LoginContainer />
 * )
 */
class LoginContainer extends Component {
    render() {
        return <LoginView {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        status: getLoginState(state),
        loading: state.loginReducer.loading
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onLogin: (un, pwd) => dispatch(loginActions.requestLogin(un, pwd))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
