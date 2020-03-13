import React, { Component } from 'react';
import { View, Image, Animated, Easing } from 'react-native';
import styles from './styles';

export default class LoadingIndicator extends Component {
    constructor(props) {
        super(props)
        this.spinValue = new Animated.Value(0);
    }

    componentDidMount(){
        this.runAnimation();
    }

    runAnimation(){
        this.spinValue.setValue(0);
        Animated.timing(
            this.spinValue,
          {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear
          }
        ).start(() => this.runAnimation())
    }

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
          })
        return (
            <>
                <View style={styles.container}>
                    <Animated.Image
                        source={require('../../assets/images/loader.png')}
                        style={{transform: [{rotate: spin}], height: 40, width:  40 }}
                    />
                </View>
                <View style={styles.overlay}></View>
            </>
        );
    }
}
