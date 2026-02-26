import { BagIcon, HomeIcon, SaveIcon, UserIcon } from "@/components/icons";
import {
    CartScreen,
    FavoriteScreen,
    HomeScreen,
    ProfileScreen,
} from "@/screens/tabScreens";
import { HomeTabParamList } from "@/types/stacks";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text } from "react-native";

const Tab = createBottomTabNavigator<HomeTabParamList>();

export function HomeTabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }: any) => ({
        tabBarIcon: ({ color }: any) => {
          const props = { color };
          if (route.name === "Home") return <HomeIcon {...props} />;
          if (route.name === "Cart") return <BagIcon {...props} />;
          if (route.name === "Favorite") return <SaveIcon {...props} />;
          if (route.name === "Profile") return <UserIcon {...props} />;
        },
        tabBarLabel: ({ focused, color }: any) => {
          if (!focused) return null;
          return (
            <Text
              style={{
                color,
                fontWeight: "600",
                fontSize: 16,
                marginLeft: 4,
              }}
            >
              {route.name}
            </Text>
          );
        },
        tabBarActiveTintColor: "#0d0d0d",
        tabBarInactiveTintColor: "#ccc",
        tabBarStyle: {
          height: 100,
          paddingBottom: 40,
          paddingTop: 10,
          paddingHorizontal: 15,
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarItemStyle: {
          borderRadius: 10,
          backgroundColor: navigation.isFocused() ? "#eee" : "#fff",
          marginVertical: 10,
          height: 50,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarLabelPosition: "beside-icon",
        headerShown: false,
        animation: "shift",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
