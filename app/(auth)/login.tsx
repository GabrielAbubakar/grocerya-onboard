import { BaseButton, BaseText, TopBar } from "@/components";
import { Colors } from "@/constants";
import { router } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 44 : 10}
      >
        <TopBar showBackButton={false} />

        <BaseText variant="bold" size="xl">
          Get started{" "}
        </BaseText>
        <BaseText style={styles.subTitle} color={Colors.light.textSecondary}>
          You can log in or make an account if you’re new
        </BaseText>

        <BaseText size="sm" style={styles.label}>
          Enter your phone number
        </BaseText>

        <View style={styles.inputContainer}>
          <BaseText style={styles.countryCode}>+213</BaseText>

          <TextInput
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="number-pad"
            style={styles.input}
          />
        </View>

        <BaseButton
          style={styles.button}
          title="Continue"
          onPress={() => router.push("/(auth)/otp")}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
    padding: 16,
  },
  subTitle: {
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 24,
  },
  button: {
    marginTop: "auto",
  },
  input: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: Colors.light.backgroundSecondary,
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  countryCode: {
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: Colors.light.backgroundSecondary,
    padding: 10,
    fontWeight: "500",
  },
  label: {
    marginBottom: 8,
  },
});
