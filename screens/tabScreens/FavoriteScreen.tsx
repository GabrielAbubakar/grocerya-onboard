import { StyleSheet, Text, View } from "react-native";

export function FavoriteScreen() {
  return (
    <View style={styles.container}>
      <Text>Favorite Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
