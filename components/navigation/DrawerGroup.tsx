import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { CustomDrawerContent } from "./CustomDrawerContent";
import { HomeTabGroup } from "./HomeTabGroup";

const DrawerStack = createDrawerNavigator();

export function DrawerGroup() {
  return (
    <DrawerStack.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: "slide",
        headerShown: false,
        drawerStyle: {
          width: "70%",
        },
      }}
    >
      <DrawerStack.Screen
        name="HomeTabGroup"
        component={HomeTabGroup}
        options={{ drawerLabel: "Home" }}
      />
    </DrawerStack.Navigator>
  );
}
