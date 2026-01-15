import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {SplashScreen} from "../../screens/splashScreen";
import { OnBoardingScreen } from "../../screens/onBoardingScreen";
import { SubscriptionScreen } from "../../screens/subscriptionScreen";

const Stack = createStackNavigator();

export const OnBoardingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <Stack.Screen name="SubscriptionScreen" component={SubscriptionScreen} />

    </Stack.Navigator>
  );
}