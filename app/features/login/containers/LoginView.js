import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import styles from "./styles";
import LoadingIndicator from "app/components/LoadingIndicator";
import Toast from "react-native-simple-toast";
import Images from "app/config/images";

/**
 * Component for LoginScreen View
 *
 * @component
 * @example
 *
 * Transfer all redux props to View
 * return (
 *   <LoginView  {...this.props}/>
 * )
 */
export default class LoginView extends Component {
  state = {
    email: "",
    password: ""
  };
  /**
   * Methods for
   * @param {string} email setState email of user
   * @function
   * @example
   *
   * handleInputEmail(email)
   *
   */
  handleInputEmail = e => {
    this.setState({ email: e });
  };
  /**
   * Methods for
   * @param {string} password setState password of user
   * @function
   * @example
   *
   * handleInputPassword(password)
   *
   */
  handleInputPassword = e => {
    this.setState({ password: e });
  };
  /**
   * Methods for
   * @param {string} email email validation
   * @param {string} password password validation
   * @function
   * @example
   *
   * validate()
   *
   */
  validate = () => {
    if (this.state.email.length < 1) {
      Toast.show("Please Enter Email");
      return false;
    } else {
      const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let exp = expression.test(String(this.state.email).toLowerCase());
      if (exp === true) {
      } else {
        Toast.show("Invalid Email");
        return false;
      }
    }
    if (this.state.password.length < 1) {
      Toast.show("Please Enter Password");
      return false;
    } else {
      return true;
    }
  };
  /**
   * Methods for User Login
   * @param {string} email email
   * @param {string} password password
   * @function
   * @example
   *
   * onLogin(email,password)
   *
   */
  handleLogin = e => {
    if (this.validate() === true) {
      this.props.onLogin(this.state.email, this.state.password);
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} testID="loginView" >
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          {this.props.loading && <LoadingIndicator />}
          <Image
            source={Images.gradientImageBg}
            style={styles.backgroundImage}
          />
          <Image source={Images.appLogoDark} style={styles.logo} />
          <TextInput
            testID="emailField"
            onChangeText={this.handleInputEmail}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor="white"
            autoCapitalize="none"
            name="email"
            style={styles.email}
          />
          <TextInput
            testID="passwordField"
            onChangeText={this.handleInputPassword}
            underlineColorAndroid="transparent"
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="white"
            autoCapitalize="none"
            name="password"
            style={styles.password}
          />
          <TouchableOpacity 
          testID="loginButton"
          onPress={() => this.handleLogin()}>
            <View style={styles.btnLogin}>
              <Text style={styles.btnLoginText}>LOGIN</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
}
