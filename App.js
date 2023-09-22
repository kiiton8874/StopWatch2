import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

import LogInScreen from './src/screens/LogInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import StopWatch from './src/screens/StopWatch';
import SaveDataScreen from './src/screens/SaveDataScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOption = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {


    if (route.name === 'StopWatch') {
      return <FontAwesome name="clock-o" size={size} color={color} />;
    } else if (route.name === 'SaveData') {
      return <FontAwesome name="save" size={size} color={color} />;
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
})

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="LogIn">
      <Stack.Screen name="StopWatch" component={StopWatch} options={{ headerShown: false }}/>
      <Stack.Screen name="LogIn" component={LogInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen name="StopWatch" component={HomeStack} />
        <Tab.Screen name="SaveData" component={SaveDataScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
