import React, { Component } from "react";
import {
  View,
  Button,
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
import Images from 'app/config/images';

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
    uname: "",
    password: ""
  };

  handleInputUname = e => {
    this.setState({ uname: e });
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

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        {this.props.loading && <LoadingIndicator />}
        <Image
          source={Images.gradientImageBg}
          style={styles.backgroundImage}
        />
        <Image
          source={Images.appLogoDark}
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
<<<<<<< HEAD
            <Text style={styles.btnLoginText}>LOGIN</Text>
=======
            <Text
              style={styles.btnLoginText}
            >
              LOGIN
            </Text>
>>>>>>> 02bc91f74e02cd1362768311a566c419d48712c6
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
}
