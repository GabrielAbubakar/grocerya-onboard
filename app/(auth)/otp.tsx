import { BaseButton, BaseText, OTPInput, TopBar } from "@/components";
import { ScreenLayout } from "@/components/ui/ScreenLayout";
import { Colors } from "@/constants";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet } from "react-native";

export default function OTP() {
  const [code, setCode] = useState("");

  return (
    <ScreenLayout>
      <TopBar backPress={() => router.back()} />

      <BaseText variant="bold" size="xl">
        Enter your OTP number{" "}
      </BaseText>
      <BaseText style={styles.subTitle} color={Colors.light.textSecondary}>
        We&apos;ve sent the OTP number via sms to{" "}
        <BaseText variant="bold">+62 888 1234 5678</BaseText>
      </BaseText>

      <OTPInput length={5} onCodeChanged={setCode} />

      <BaseButton
        style={styles.button}
        title="Continue"
        disabled={code.length !== 5}
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
    </ScreenLayout>
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
  resendContainer: {
    flexDirection: "row",
    alignItems: "center",
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
