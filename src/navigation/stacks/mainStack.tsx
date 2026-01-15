import React from "react"; 
import { createStackNavigator } from "@react-navigation/stack";
import { OnBoardingStack } from "./onBoardingStack";


const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="onBoardingStack" component={OnBoardingStack} /> 
    </Stack.Navigator>
  );
}