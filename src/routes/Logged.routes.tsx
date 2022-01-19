import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Bet, Cart, MyBets, Profile } from '../screens';
import { theme } from '../shared/styles/theme';
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
} from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { clearCartNotification, setSelectedGames } from '../store/Stock.store';
import { RootState } from '../store';

const Tab = createBottomTabNavigator();

const LoggedRoutes = () => {
  const dispatch = useDispatch();
  const stock = useSelector((state: RootState) => state.stock);

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
        listeners={{
          tabPress: () => {
            dispatch(clearCartNotification());
          },
        }}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name='shopping-cart' size={size} color={color} />
          ),
          tabBarBadge: stock.cartNotification
            ? stock.cartNotification
            : undefined,
          tabBarBadgeStyle: {
            backgroundColor: 'red',
            marginLeft: 8,
          },
        }}
      />
      <Tab.Screen
        name='My Bets'
        component={MyBets}
        listeners={{
          tabPress: () => {
            dispatch(setSelectedGames([]));
          },
        }}
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
