import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Bet, Cart, MyBets, Profile } from '../screens';
import { theme } from '../shared/styles/theme';
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const LoggedRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName='Bet'
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: 'white',
          borderTopColor: 'transparent',
          paddingBottom: 10,
          paddingTop: 10,
          height: 60,
        },

        tabBarActiveTintColor: theme.colors.secondary,
      }}
    >
      <Tab.Screen
        name='Bet'
        component={Bet}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name='coins' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Cart'
        component={Cart}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name='shopping-cart' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='My Bets'
        component={MyBets}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name='cash-usd' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name='user' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default LoggedRoutes;
