import { MainHeader, ScreenLayout } from "@/components";
import { StyleSheet, Text, View } from "react-native";

export function ProfileScreen({ route }: { route: any }) {
  const params = route.params;

  return (
    <ScreenLayout>
      <MainHeader />
      <View style={styles.content}>
        <Text>Profile Screen</Text>
        <View>
          <Text style={styles.name}>{params?.name ?? "John Doe"}</Text>
          <Text style={styles.email}>
            {params?.email ?? "johndoe@gmail.com"}
          </Text>
        </View>
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  email: {},
});
