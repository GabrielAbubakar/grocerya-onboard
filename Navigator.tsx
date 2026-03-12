import { AuthGroup, DrawerGroup } from "@/components/navigation";
import { RootStackParamList } from "@/types/stacks";
import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Linking from "expo-linking";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { IndexScreen } from "./screens";

const Stack = createNativeStackNavigator<RootStackParamList>();

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [
    Linking.createURL("/"),
    "https://app.example.com",
    // "groceryaonboard://profile", // Or `Linking.createURL('/')` for Expo apps
  ],
  config: {
    screens: {
      Index: "",
      DrawerGroup: {
        screens: {
          HomeTabGroup: {
            screens: {
              Home: "home",
              Cart: "cart",
              Favorite: "favorite",
              Profile: "profile",
            },
          },
        },
      },
      AuthGroup: {
        screens: {
          Login: "login",
          Register: "register",
        },
      },
    },
  },
};

export default function Navigator() {
  return (
    <NavigationContainer linking={linking}>
      <StatusBar style="dark" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Index" component={IndexScreen} />
        <Stack.Screen name="AuthGroup" component={AuthGroup} />
        <Stack.Screen name="DrawerGroup" component={DrawerGroup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
