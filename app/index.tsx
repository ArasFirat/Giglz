import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "./Screens/AuthScreen"; 
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import MainMenu from './Screens/MainMenu';


const Stack = createNativeStackNavigator();

export default function Index() {
  return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen 
            name="Auth" 
            component={AuthScreen} 
            />
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
          />
          <Stack.Screen
            name="MainMenu"
            component={MainMenu}
          />

        </Stack.Navigator>
        
    
  );
}
