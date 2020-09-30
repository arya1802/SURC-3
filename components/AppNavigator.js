import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';

import WelcomeScreen from '../screens/WelcomeScreen'
const AppNavigator = createStackNavigator(
    {
        Welcome: {
            screen: WelcomeScreen,
            navigationOptions: { title: 'Welcome' }
        },
        Home: {
            screen: HomeScreen,
            navigationOptions: { title: 'Home' }
        }
    },
    {
        initialRouteName: "WelcomeScreen"
    }
);

export default AppNavigator;