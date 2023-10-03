import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from '@expo/vector-icons'; 

import StopWatch from './StopWatch';
import SaveDataScreen from './SaveDataScreen';

const Tab = createBottomTabNavigator();

const screenOption = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {

    if (route.name === 'StopWatch') {
      return <FontAwesome name="clock-o" size={size} color={color} />;
    } else if (route.name === 'SaveData') {
      return <FontAwesome name="save" size={size} color={color} />;
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
})

export default function BottomTabScreen() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen name="StopWatch" component={StopWatch} />
        <Tab.Screen name="SaveData" component={SaveDataScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}