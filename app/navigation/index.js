import React, { Component } from 'react';
import MainNavigator from './MainNavigator';
import NavigationService from './NavigationService';
console.disableYellowBox = true;

class AppNavigator extends Component {
    render() {
        return (
            <MainNavigator
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
        );
    }
}

export default AppNavigator;
