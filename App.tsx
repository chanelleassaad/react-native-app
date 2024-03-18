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
import {DarkModeProvider} from './src/store/darkMode/DarkModeContext';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <DarkModeProvider>
        <TaskListProvider>
          <ProfileProvider>
            <MainNavigator />
          </ProfileProvider>
        </TaskListProvider>
      </DarkModeProvider>
    </NavigationContainer>
  );
}

export default App;
