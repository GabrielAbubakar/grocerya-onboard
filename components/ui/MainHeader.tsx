import { UserIcon } from "@/components/icons";
import { DrawerParamList } from "@/types";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export function MainHeader() {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <UserIcon color="#0d0d0d" width={28} height={28} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
