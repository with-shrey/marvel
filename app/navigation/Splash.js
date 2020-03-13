import React from 'react';
import {View, Image} from 'react-native';
import styles from "../features/login/containers/styles";
import AsyncStorage from '@react-native-community/async-storage';
import NavigationService from './NavigationService';
import Images from 'app/config/images';

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  /**
 * Start Login or Home screen as per status
 *
 * @component
 * @example
 *
 * return (
 *   <Splash />
 * )
 */
export default class Splash extends React.Component {
    componentDidMount() {
        const isDebuggingEnabled = (typeof atob !== 'undefined');
        if(isDebuggingEnabled){
            AsyncStorage.getItem('token')
            .then(token => {
                this.checkAndNavigate(token);
             })
        }else{
            sleep(1000)
            .then(() => {
                return AsyncStorage.getItem('token');
            })
            .then(token => {
                this.checkAndNavigate(token);
            })
        }
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
				<Image source={Images.splash} style={styles.backgroundImage} />
            </View>
        )
    }
}