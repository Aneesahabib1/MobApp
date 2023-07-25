/*import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, View } from 'react-native';
import AppNavigation from './AppNavigation';
import React, { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { NavigationContainer } from '@react-navigation/native';
import { Welcome } from '../screens';
import App from '../screens/Home';
import Home from '../screens/Home';

export default function AppNav() {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'Large'} />
      </View>)
  }
  return (
        <AppNavigation>
      {userToken !== null ? <AppNavigation /> : <Welcome />}
    </AppNavigation>
  );
}*/
