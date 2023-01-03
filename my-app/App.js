import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Router from './navigation/Router'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export default function App() {
  console.log("app executed");
    
  /*
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={ {headerShown: false} } name="allFarmsList" component={allFarmsList} />
        <Stack.Screen options={ {headerShown: false} } name="Farm" component={FarmScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  */
 /*
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={ {headerShown: false} } name="WelcomeScreen" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );*/
   
  return (
    <Router />
  );

  /* 
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen options={ {headerShown: false} } name="allFarmsList" component={allFarmsList} />
        <Tab.Screen options={ {headerShown: false} } name="Farm" component={FarmScreen} />
        <Tab.Screen options={ {headerShown: false} } name="FarmProducts" component={FarmProductScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
  */
}
