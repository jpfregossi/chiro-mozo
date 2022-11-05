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


import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './Components/SplashScreen';



/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow'ss
 * LTI update could not be added via codemod */
export default function App() {
  return (
    <SafeAreaProvider>
      <SplashScreen></SplashScreen>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FC6868',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
