import { Colors } from "@/constants";
import { countries, Country } from "@/constants/Countries";
import { useState } from "react";
import {
    FlatList,
    Modal,
    Pressable,
    StyleSheet,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BaseText } from "./BaseText";
import { IconSymbol } from "./icon-symbol";

interface CountryPickerModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (country: Country) => void;
  selectedCountry?: Country;
}

export const CountryPickerModal = ({
  visible,
  onClose,
  onSelect,
  selectedCountry,
}: CountryPickerModalProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const renderItem = ({ item }: { item: Country }) => (
    <Pressable
      style={[
        styles.countryItem,
        selectedCountry?.code === item.code && styles.selectedCountryItem,
      ]}
      onPress={() => {
        onSelect(item);
        onClose();
        setSearchQuery("");
      }}
    >
      <BaseText size="lg" style={styles.flag}>
        {item.flag}
      </BaseText>
      <BaseText style={styles.countryName}>{item.name}</BaseText>
      <BaseText style={styles.dialCode} color={Colors.light.textSecondary}>
        {item.dial_code}
      </BaseText>
    </Pressable>
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.searchBar}>
            <IconSymbol
              name="magnifyingglass"
              size={20}
              color={Colors.light.textSecondary}
            />
            <TextInput
              placeholder="Search country"
              value={searchQuery}
              onChangeText={setSearchQuery}
              style={styles.input}
              placeholderTextColor={Colors.light.textSecondary}
            />
          </View>
          <Pressable onPress={onClose} style={styles.closeButton}>
            <BaseText color={Colors.light.tint} variant="medium">
              Cancel
            </BaseText>
          </Pressable>
        </View>

        <FlatList
          data={filteredCountries}
          renderItem={renderItem}
          keyExtractor={(item) => item.code}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            searchQuery ? (
              <View style={styles.emptyContainer}>
                <BaseText color={Colors.light.textSecondary}>
                  No countries found for &quot;{searchQuery}&quot;
                </BaseText>
              </View>
            ) : null
          }
        />
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.light.backgroundSecondary,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: Colors.light.text,
    padding: 0, // Remove default padding on Android
  },
  closeButton: {
    paddingVertical: 4,
  },
  listContent: {
    paddingHorizontal: 16,
  },
  countryItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginHorizontal: -12,
    borderRadius: 8,
  },
  selectedCountryItem: {
    backgroundColor: Colors.light.backgroundSecondary,
  },
  flag: {
    marginRight: 16,
  },
  countryName: {
    flex: 1,
    fontSize: 16,
  },
  dialCode: {
    fontSize: 16,
  },
  emptyContainer: {
    paddingVertical: 24,
    alignItems: "center",
  },
  separator: {
    height: 1,
    backgroundColor: Colors.light.backgroundSecondary,
  },
});
