import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import React from "react";

export function CustomDrawerContent(props: DrawerContentComponentProps) {
  const focusedRoute =
    getFocusedRouteNameFromRoute(props.state.routes[props.state.index]) ??
    "Home";

  const navigationItems = [
    { label: "Home", screen: "Home" },
    { label: "Cart", screen: "Cart" },
    { label: "Favorite", screen: "Favorite" },
    { label: "Profile", screen: "Profile" },
  ];

  return (
    <DrawerContentScrollView {...props}>
      {navigationItems.map((item) => (
        <DrawerItem
          key={item.screen}
          label={item.label}
          focused={focusedRoute === item.screen}
          onPress={() =>
            props.navigation.navigate("HomeTabGroup", { screen: item.screen })
          }
          activeTintColor="#0d0d0d"
          activeBackgroundColor="#eeeeeeff"
        />
      ))}
    </DrawerContentScrollView>
  );
}
