import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation/navigation';

// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import GameStore from './screens/gameStore';

// const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <AppNavigation />
  );
}