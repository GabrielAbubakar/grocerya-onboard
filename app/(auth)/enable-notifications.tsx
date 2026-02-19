import { BaseButton, BaseText, TopBar } from "@/components";
import { PhoneIcon } from "@/components/icons";
import { Colors } from "@/constants";
import { router } from "expo-router";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EnableNotifications() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 44 : 10}
      >
        <TopBar backPress={() => router.back()} />

        <BaseText variant="bold" size="xl">
          Lastly, please enable notification
        </BaseText>

        <BaseText color={Colors.light.textSecondary}>
          Enable your notifications for more update and important messages about
          your grocery needs
        </BaseText>

        <View style={styles.mapContainer}>
          <PhoneIcon width={260} height={260} />
        </View>

        <View style={styles.buttonContainer}>
          <BaseButton title="Enable Notifications" />
          <BaseButton title="Skip for Now" variant="secondary" />
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
  mapContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    marginTop: 24,
  },
  buttonContainer: {
    marginTop: "auto",
    gap: 16,
  },
});
