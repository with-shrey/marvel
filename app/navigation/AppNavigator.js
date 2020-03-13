import { createAppContainer,createStackNavigator } from 'react-navigation';
import Home from 'app/features/home/containers/HomeContainer';

/**
 * Component for Stack Navigation to house Authenticated Routes
 *
 * @component
 * @example
 *
 * return (
 *   <AppNavigator />
 * )
 */
const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: { header: null }
        }
    },
    {
        initialRouteName: 'Home'
    }
);

export default createAppContainer(AppNavigator);
