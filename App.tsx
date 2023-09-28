/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Navigator} from './src/navigation/index';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <Navigator />
    </SafeAreaProvider>
  );
}

export default App;
