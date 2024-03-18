import React, {useContext} from 'react';
import {View, Text, Switch, ScrollView} from 'react-native';
import {DarkModeContext} from '../store/darkMode/DarkModeContext';
import ProfileDetails from '../components/organisms/ProfileDetails';
import SettingScreenStyle from '../styles/SettingScreen.style';

const SettingsScreen: React.FC = () => {
  const {isDarkMode, toggleDarkMode} = useContext(DarkModeContext);

  return (
    <ScrollView>
      <View style={SettingScreenStyle.container}>
        <Text style={SettingScreenStyle.title}>Dark Mode</Text>
        <View style={SettingScreenStyle.switchContainer}>
          <Text style={SettingScreenStyle.switchLabel}>
            Set home page to dark mode
          </Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleDarkMode}
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isDarkMode ? '#f4f3f4' : '#f4f3f4'}
          />
        </View>
        <Text style={SettingScreenStyle.title}>Profile</Text>
        <ProfileDetails />
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;
