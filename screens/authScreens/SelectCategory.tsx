import { BaseButton, BaseText, TopBar } from "@/components";
import { ScreenLayout } from "@/components/ui/ScreenLayout";
import { Categories, Colors } from "@/constants";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export function SelectCategory() {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    Categories[0],
  );

  return (
    <ScreenLayout>
      <TopBar backPress={() => navigation.goBack()} />

      <BaseText variant="bold" size="xl">
        All your grocery needs in one place
      </BaseText>
      <BaseText style={styles.subTitle} color={Colors.light.textSecondary}>
        Select your desired shop category
      </BaseText>

      <View style={styles.categoriesContainer}>
        {Categories.map((category) => (
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
        onPress={() => navigation.navigate("SetLocation")}
      />
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
