import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { IndexScreen } from "./screens";
import {
  CartScreen,
  FavoritesScreen,
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
  Favorites: undefined;
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
    <Tab.Navigator screenOptions={{ headerShown: false, animation: "shift" }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
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
