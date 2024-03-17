/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import {TaskListProvider} from './src/store/TaskListProvider';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <TaskListProvider>
        <MainNavigator />
      </TaskListProvider>
    </NavigationContainer>
  );
}

export default App;
