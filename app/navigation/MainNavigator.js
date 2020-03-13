import {createSwitchNavigator, createAppContainer} from "react-navigation";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import Splash from './Splash';

/**
 * Component for Sewitch Navigation to switch between navigators
 *
 * @component
 * @example
 *
 * return (
 *   <MainNavigator />
 * )
 */
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
