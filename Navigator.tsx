import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { BagIcon, HomeIcon, SaveIcon, UserIcon } from "./components/icons";
import { IndexScreen } from "./screens";
import {
  CartScreen,
  FavoriteScreen,
  HomeScreen,
  ProfileScreen,
} from "./screens/tabScreens";

export type RootStackParamList = {
  Index: undefined;
  HomeTabGroup: undefined;
};

export type HomeTabParamList = {
  Home: undefined;
  Cart: undefined;
  Favorite: undefined;
  Profile: undefined;
};

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<HomeTabParamList>();

// function DrawerGroup() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="HomeTabGroup" component={HomeTabGroup} />
//     </Drawer.Navigator>
//   );
// }

function HomeTabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color }) => {
          const props = { color };
          if (route.name === "Home") return <HomeIcon {...props} />;
          if (route.name === "Cart") return <BagIcon {...props} />;
          if (route.name === "Favorite") return <SaveIcon {...props} />;
          if (route.name === "Profile") return <UserIcon {...props} />;
        },
        tabBarLabel: ({ focused, color }) => {
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
        // tabBarActiveBackgroundColor: "#eee",
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
          // borderWidth: 1,
          // borderColor: "#eee",
          backgroundColor: navigation.isFocused() ? "#eee" : "#fff",
          // marginHorizontal: 10,
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

export default function Navigator() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Index" component={IndexScreen} />
        <Stack.Screen name="HomeTabGroup" component={HomeTabGroup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
