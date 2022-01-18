import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { WrapperContainer } from './styles';
import AppLoading from 'expo-app-loading';
import FlashMessage from 'react-native-flash-message';

import {
  Roboto_400Regular_Italic,
  Roboto_500Medium_Italic,
  Roboto_700Bold_Italic,
  useFonts,
} from '@expo-google-fonts/roboto';
import Routes from './src/routes';

import { Provider } from 'react-redux';
import store from './src/store';
import { SafeAreaView, View } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular_Italic,
    Roboto_500Medium_Italic,
    Roboto_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <WrapperContainer style={{ backgroundColor: 'red' }}>
      <Provider store={store}>
        <Routes />
      </Provider>

      <StatusBar style='dark' backgroundColor='transparent' translucent />
      <FlashMessage />
    </WrapperContainer>
  );
}
