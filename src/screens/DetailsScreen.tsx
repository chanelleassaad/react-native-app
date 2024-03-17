import React from 'react';
import {Text, StyleSheet, ScrollView, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {MainNavigatorStackParamList} from '../navigation/MainNavigator.types';
import TaskList from '../components/organisms/TaskList';
import ProfileDetails from '../components/organisms/ProfileDetails';

const DetailsScreen = () => {
  const {params} =
    useRoute<RouteProp<MainNavigatorStackParamList, 'Details'>>();
  const {myAppTitle} = params ?? {};

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>{myAppTitle}</Text>
        <ProfileDetails />
        <TaskList />
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});
