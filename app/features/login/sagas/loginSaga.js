/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import AsyncStorage from "@react-native-community/async-storage";
import { put, call } from "redux-saga/effects";
import * as loginActions from "../actions";
import { navigateToHome } from "app/navigation/NavigationHelpers";
import Api from "../../../api";
import ApiConstants from "../../../api/ApiConstants";
import Toast from "react-native-simple-toast";

/**
     * Method for logging in user
     * @param {object} action payload given from Action
     * @function*
     *
     *
     */export default function* loginAsync(action) {
  try {
    const response = yield call(
      Api,
      ApiConstants.LOGIN,
      { email: action.email, password: action.password },
      "POST"
    );
    if (response.token) {
      const { tokenType, accessToken } = response.token;
      const value = yield call(
        [AsyncStorage, AsyncStorage.setItem],
        "token",
        `${tokenType} ${accessToken}`
      );
      yield put(loginActions.onLoginResponse(response.user));
      yield call(navigateToHome);
    } else {
      yield put(loginActions.loginFailed());
      setTimeout(() => {
        if (response.code === 401) {
          Toast.show("Invalid Email or Password");
        }
      }, 200);
    }
  } catch (error) {
    yield put(loginActions.loginFailed());
    Toast.show(error.message);
  }
}
