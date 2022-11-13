/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './Components/SplashScreen';



/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow'ss
 * LTI update could not be added via codemod */
export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <SplashScreen></SplashScreen>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
