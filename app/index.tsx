import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthScreen from "./Screens/AuthScreen"; // Import AuthScreen correctly

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    
      //<NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Auth" component={AuthScreen} />
        </Stack.Navigator>
      //</NavigationContainer>
    
  );
}
