import { AuthGroup, DrawerGroup } from "@/components/navigation";
import { RootStackParamList } from "@/types/stacks";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { IndexScreen } from "./screens";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigator() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Index" component={IndexScreen} />
        <Stack.Screen name="AuthGroup" component={AuthGroup} />
        <Stack.Screen name="DrawerGroup" component={DrawerGroup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
