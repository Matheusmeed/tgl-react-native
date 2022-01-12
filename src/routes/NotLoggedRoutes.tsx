import { createStackNavigator } from '@react-navigation/stack';
import { Auth, Registration, ResetPass, ForgotPass } from '../screens';

const Stack = createStackNavigator();

const NotLoggedRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName='Auth'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Auth' component={Auth}></Stack.Screen>
      <Stack.Screen name='Registration' component={Registration}></Stack.Screen>
      <Stack.Screen name='ForgotPass' component={ForgotPass}></Stack.Screen>
      <Stack.Screen name='ResetPass' component={ResetPass}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default NotLoggedRoutes;
