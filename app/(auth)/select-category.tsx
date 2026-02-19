import { BaseButton, BaseText, TopBar } from "@/components";
import { Colors } from "@/constants";
import { router } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  "Gluten-Free",
  "Vegan Friendly",
  "Raw Meat",
  "Organic",
  "Dairy-Free",
  "Sugar-Free",
  "Cruelty-Free",
  "Processed Food",
];

export default function SelectCategory() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    data[0],
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 44 : 10}
      >
        <TopBar backPress={() => router.back()} />

        <BaseText variant="bold" size="xl">
          All your grocery needs in one place
        </BaseText>
        <BaseText style={styles.subTitle} color={Colors.light.textSecondary}>
          Select your desired shop category
        </BaseText>

        <View style={styles.categoriesContainer}>
          {data.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.category,
                selectedCategory === category && styles.selectedCategory,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <BaseText variant="medium">{category}</BaseText>
            </TouchableOpacity>
          ))}
        </View>

        <BaseButton
          style={styles.button}
          title="Continue"
          onPress={() => router.push("/(auth)/set-location")}
        />
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
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  category: {
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 42,
    backgroundColor: Colors.light.backgroundSecondary,
    borderWidth: 1,
    borderColor: "transparent",
  },
  selectedCategory: {
    backgroundColor: "#1ED7001A",
    borderWidth: 1,
    borderColor: "#2DB217",
  },
});
