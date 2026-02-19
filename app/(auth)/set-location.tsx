import { BaseButton, BaseText, TopBar } from "@/components";
import { MapIcon } from "@/components/icons";
import { Colors } from "@/constants";
import { router } from "expo-router";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SetLocation() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 44 : 10}
      >
        <TopBar backPress={() => router.back()} />

        <View style={styles.mapContainer}>
          <MapIcon width={260} height={260} />
        </View>

        <BaseText variant="bold" size="xl" style={styles.title}>
          Set your location
        </BaseText>

        <BaseText color={Colors.light.textSecondary} style={styles.subTitle}>
          This let us know your location for best shipping experience
        </BaseText>

        <View style={styles.buttonContainer}>
          <BaseButton
            title="Allow Google Maps"
            onPress={() => router.push("/enable-notifications")}
          />
          <BaseButton title="Set Manually" variant="secondary" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    textAlign: "center",
  },
  subTitle: {
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: "auto",
    gap: 16,
  },
  mapContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
});
