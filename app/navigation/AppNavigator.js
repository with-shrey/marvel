import { createAppContainer,createStackNavigator } from 'react-navigation';
import Home from 'app/features/home/containers/HomeContainer';

const RNApp = createStackNavigator(
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

export default createAppContainer(RNApp);
