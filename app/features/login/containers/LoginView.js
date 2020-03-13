import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import styles from "./styles";
import { loginBg } from "../../../assets/login-bg.png";
import LoadingIndicator from "app/components/LoadingIndicator";
import Toast from "react-native-simple-toast";

export default class LoginView extends Component {
  state = {
    uname: "",
    password: ""
  };
  handleInputUname = e => {
    this.setState({ uname: e });
    // this.props.onLogin("uname", "password");
  };
  handleInputPassword = e => {
    this.setState({ password: e });
  };
  validate = () => {
    if (this.state.uname.length < 1) {
      Toast.show("Please Enter Email");
      return false;
    } else {
      const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let exp = expression.test(String(this.state.uname).toLowerCase());
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
  handleLogin = e => {
    if (this.validate() === true) {
      this.props.onLogin(this.state.uname, this.state.password);
    }
  };
  dismissKb = () => {};
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          {this.props.loading && <LoadingIndicator />}
          <Image
            source={require("../../../assets/login-bg.png")}
            style={styles.backgroundImage}
          />
          <Image
            source={require("../../../assets/marvel-logo.png")}
            style={styles.logo}
          />

          <TextInput
            onChangeText={this.handleInputUname}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor="white"
            autoCapitalize="none"
            name="uname"
            style={styles.email}
          />
          <TextInput
            onChangeText={this.handleInputPassword}
            underlineColorAndroid="transparent"
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="white"
            autoCapitalize="none"
            name="password"
            style={styles.password}
          />

          <TouchableOpacity onPress={() => this.handleLogin()}>
            <View style={styles.btnLogin}>
              <Text style={styles.btnLoginText}>LOGIN</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
}
