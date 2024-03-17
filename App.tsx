/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import {TaskListProvider} from './src/store/task/TaskListProvider';
import {ProfileProvider} from './src/store/profile/ProfileProvider';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <TaskListProvider>
        <ProfileProvider>
          <MainNavigator />
        </ProfileProvider>
      </TaskListProvider>
    </NavigationContainer>
  );
}

export default App;
