import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bet from '../screens/Bet';

const Tab = createBottomTabNavigator();

const LoggedRoutes = () => {
  return (
    <Tab.Navigator initialRouteName='Bet'>
      <Tab.Screen name='Bet' component={Bet}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default LoggedRoutes;
