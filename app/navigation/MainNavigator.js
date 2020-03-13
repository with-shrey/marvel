import {createSwitchNavigator, createAppContainer} from "react-navigation";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import Splash from './Splash';

// eslint-disable-next-line import/prefer-default-export
const MainNavigator = createSwitchNavigator(
  {
    Splash: Splash,
    Auth: AuthNavigator,
    App: AppNavigator
  },
  {
    initialRouteName: "Splash"
  }
);

export default createAppContainer(MainNavigator);
