import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailsScreen from './components/DetailsScreen';
import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import FarmScreen from './components/FarmScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  console.log("app executed");
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
        <Tab.Screen options={ {headerShown: false} } name="Farm" component={FarmScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}