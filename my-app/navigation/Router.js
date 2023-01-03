import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import searchComponent from "../components/searchComponent";
import WelcomeScreen from "../components/WelcomeScreen";
import FarmScreen from "../components/FarmScreen";
import allFarmsList from "../components/allFarmsList";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={"home"} component={WelcomeScreen} />
        <Stack.Screen name={"Search"} component={searchComponent} />
        <Stack.Screen name={"allFarms"} component={allFarmsList} />
        <Stack.Screen name={"oneFarm"} component={FarmScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
