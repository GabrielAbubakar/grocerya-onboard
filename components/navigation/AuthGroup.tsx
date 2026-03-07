import {
  EnableNotifications,
  Login,
  OTP,
  SelectCategory,
  SetLocation,
} from "@/screens/authScreens";
import { AuthStackParamList } from "@/types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export function AuthGroup() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="OTP" component={OTP} />
      <AuthStack.Screen name="SelectCategory" component={SelectCategory} />
      <AuthStack.Screen name="SetLocation" component={SetLocation} />
      <AuthStack.Screen
        name="EnableNotifications"
        component={EnableNotifications}
      />
    </AuthStack.Navigator>
  );
}
