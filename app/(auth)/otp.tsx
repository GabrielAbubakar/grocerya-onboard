import { BaseButton, BaseText, TopBar } from "@/components";
import { Colors } from "@/constants";
import { router } from "expo-router";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OTP() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 44 : 10}
      >
        <TopBar backPress={() => router.back()} />

        <BaseText variant="bold" size="xl">
          Enter your OTP number{" "}
        </BaseText>
        <BaseText style={styles.subTitle} color={Colors.light.textSecondary}>
          We’ve sent the OTP number via sms to{" "}
          <BaseText variant="bold">+62 888 1234 5678</BaseText>
        </BaseText>

        <BaseButton
          style={styles.button}
          title="Continue"
          onPress={() => router.push("/(auth)/select-category")}
        />

        <BaseText size="xs" style={styles.terms}>
          By clicking, I accept the{" "}
          <BaseText size="xs" variant="bold">
            Terms and Conditions
          </BaseText>{" "}
          &{" "}
          <BaseText size="xs" variant="bold">
            Privacy Policy
          </BaseText>
        </BaseText>
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
  subTitle: {
    marginBottom: 24,
  },
  button: {
    marginTop: "auto",
  },
  terms: {
    // textAlign: "center",
    marginTop: 20,
  },
});
