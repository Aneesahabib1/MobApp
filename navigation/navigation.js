import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Login  from '../screens/Login';
import  Signup  from '../screens/Signup';
import Home from '../screens/Home';
import { Welcome } from '../screens';
import Attendance from '../screens/Attendance';
import Task from '../screens/Task';
import PieChartComponent from '../screens/PieChartComponent';
import BarChartComponent from '../screens/BarChartComponent';
const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={Welcome} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
        <Stack.Screen name="Signup" options={{headerShown: false}} component={Signup} />
        <Stack.Screen name="Attendance" options={{headerShown: false}} component={Attendance} />
        <Stack.Screen name="Task" options={{headerShown: false}} component={Task} />
        <Stack.Screen name="PieChartComponent" options={{headerShown: false}} component={PieChartComponent} />
        <Stack.Screen name="BarChartComponent" options={{headerShown: false}} component={BarChartComponent} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}
