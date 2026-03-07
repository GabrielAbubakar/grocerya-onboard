import { BaseButton, BaseText, CountryPickerModal, TopBar } from "@/components";
import { ScreenLayout } from "@/components/ui/ScreenLayout";
import { Colors } from "@/constants";
import { countries } from "@/constants/Countries";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export function Login() {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Algeria is +213
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <ScreenLayout>
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
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <BaseText style={styles.countryCode}>
            {selectedCountry.flag} {selectedCountry.dial_code}
          </BaseText>
        </TouchableOpacity>

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
        onPress={() => navigation.navigate("OTP")}
      />

      <CountryPickerModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSelect={setSelectedCountry}
        selectedCountry={selectedCountry}
      />
    </ScreenLayout>
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
