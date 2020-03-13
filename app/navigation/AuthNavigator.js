import { createStackNavigator } from 'react-navigation';
import Login from 'app/features/login/containers/LoginContainer';

/**
 * Component for Stack Navigation to house Authentication Routes
 *
 * @component
 * @example
 *
 * return (
 *   <AuthNavigator />
 * )
 */
const AuthNavigator = createStackNavigator(
  {
    Login: {
        screen: Login,
        navigationOptions: { header: null }
    },
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

export default AuthNavigator;