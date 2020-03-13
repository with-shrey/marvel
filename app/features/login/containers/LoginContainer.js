import React, { Component } from "react";
import LoginView from "./LoginView";
import { connect } from "react-redux";
import * as loginActions from "../actions";
import { getLoginState } from "../selectors";

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
/**
 * Methods for mapping
 * @param {object} state state from Component to Props
 * @function
 * @example
 *
 * mapStateToProps(state)
 *
 */
function mapStateToProps(state) {
  return {
    status: getLoginState(state),
    loading: state.loginReducer.loading
  };
}
/**
 * Methods for mapping
 * @param {object} dispatch dispatch from Component to Props
 * @function
 *
 */
function mapDispatchToProps(dispatch) {
  return {
    onLogin: (em, pwd) => dispatch(loginActions.requestLogin(em, pwd))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
