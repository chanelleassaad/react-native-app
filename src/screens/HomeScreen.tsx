import React, {useState} from 'react';
import {Alert, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../components/atoms/CustomButton';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [disableButton, setDissableButtons] = useState(true);
  const [textButton, setTextButton] = useState(
    'Welcome! Press me to access all features',
  );

  const navigation = useNavigation();

  const handleWelcomePress = () => {
    Alert.alert(
      'Welcome to my app! Now you can navigate through the pages! Hope you enjoy it :) ',
    );
    setDissableButtons(false);
    setTextButton('Welcome! :)');
  };

  const goToDetails = () => {
    navigation.navigate('Details');
  };
  const goToSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.homeImage}
          resizeMode="contain"
          source={{
            uri: 'https://miro.medium.com/v2/resize:fit:1200/1*kfpwp2whjZZCVo2o9k3HSA.jpeg',
          }}
        />
        <View style={styles.background}>
          <Text style={styles.title}>My First Ever React Native App</Text>
          <CustomButton onPress={handleWelcomePress} title={textButton} />

          <View style={styles.routeButtons}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  homeImage: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 30,
    padding: 10,
    color: 'white',
    fontStyle: 'italic',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#67C6E3',
    width: '100%',
    height: '100%',
    minHeight: '65%',
    minWidth: '100%',
  },
  routeButtons: {
    flex: 1,
    width: '100%',
    paddingTop: 20,
  },
});

export default HomeScreen;
