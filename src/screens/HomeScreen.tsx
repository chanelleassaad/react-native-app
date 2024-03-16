import React, {useState} from 'react';
import {Alert, Image, ScrollView, Text, View} from 'react-native';
import CustomButton from '../components/atoms/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProp} from '../navigation/MainNavigator.types';
import HomeScreenStyles from '../styles/HomeScreen.styles';

const HomeScreen = () => {
  const [disableButton, setDissableButtons] = useState(true);
  const [textButton, setTextButton] = useState(
    'Welcome! Press me to access all features',
  );

  const [appTitle] = useState('My First Ever React Native App');

  const navigation = useNavigation<MainNavigatorNavigationProp>();

  const handleWelcomePress = () => {
    Alert.alert(
      'Welcome to my app! Now you can navigate through the pages! Hope you enjoy it :) ',
    );
    setDissableButtons(false);
    setTextButton('Welcome! :)');
  };

  const goToDetails = () => {
    navigation.navigate('Details', {myAppTitle: appTitle});
  };
  const goToSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={HomeScreenStyles.container}>
      <ScrollView>
        <Image
          style={HomeScreenStyles.homeImage}
          resizeMode="contain"
          source={{
            uri: 'https://miro.medium.com/v2/resize:fit:1200/1*kfpwp2whjZZCVo2o9k3HSA.jpeg',
          }}
        />
        <View style={HomeScreenStyles.background}>
          <Text style={HomeScreenStyles.title}>{appTitle}</Text>
          <CustomButton onPress={handleWelcomePress} title={textButton} />

          <View style={HomeScreenStyles.routeButtons}>
            <CustomButton
              onPress={goToDetails}
              title="Go to Details Page"
              disabled={disableButton}
            />
            <CustomButton
              onPress={goToSettings}
              title="Go to Settings Page"
              disabled={disableButton}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
