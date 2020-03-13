import React from 'react';
import {View, Image} from 'react-native';
import styles from "../features/login/containers/styles";
import AsyncStorage from '@react-native-community/async-storage';
import NavigationService from './NavigationService';

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
export default class Splash extends React.Component {
    componentDidMount() {
        sleep(1000)
        .then(() => {
            return AsyncStorage.getItem('token');
        })
        .then(token => {
            this.checkAndNavigate(token);
         })
    }

    checkAndNavigate(token){
            if(token){
                NavigationService.navigate('App')
            } else{
                NavigationService.navigate('Auth')
            }
    }
    render() {
        return (
            <View style={styles.container}>
				{/* <Image source={require('../assets/login-bg.png')} style={styles.backgroundImage} /> */}
				<Image source={require('../assets/images/splash.gif')} style={styles.backgroundImage} />
            </View>
        )
    }
}