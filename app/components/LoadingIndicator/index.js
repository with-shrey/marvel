import React, { Component } from 'react';
import { View, Image, Animated, Easing } from 'react-native';
import styles from './styles';
import Images from 'app/config/images';

/**
 * Component for showing Loading Indicator with backdrop
 *
 * @component
 * @example
 *
 * return (
 *   <LoadingIndicator />
 * )
 */
export default class LoadingIndicator extends Component {
    constructor(props) {
        super(props)
        this.spinValue = new Animated.Value(0);
    }

    componentDidMount(){
        this.runAnimation();
    }

    //Run Spin Animation infinite times
    runAnimation(){
        this.spinValue.setValue(0);
        Animated.timing(
            this.spinValue,
          {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear
          }
        ).start()
    }

    render() {
        // switch values between given ranges
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
          })

        return (
            <>
                <View style={styles.container}>
                    <Animated.Image
                        source={Images.loader}
                        style={{transform: [{rotate: spin}], height: 40, width:  40 }}
                    />
                </View>
                <View style={styles.overlay}></View>
            </>
        );
    }
}
