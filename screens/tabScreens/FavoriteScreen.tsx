import { MainHeader, ScreenLayout } from "@/components";
import { StyleSheet, Text, View } from "react-native";

export function FavoriteScreen() {
  return (
    <ScreenLayout>
      <MainHeader />
      <View style={styles.content}>
        <Text>Favorite Screen</Text>
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
