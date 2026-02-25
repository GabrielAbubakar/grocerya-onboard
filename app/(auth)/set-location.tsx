import { BaseButton, BaseText, TopBar } from "@/components";
import { MapIcon } from "@/components/icons";
import { ScreenLayout } from "@/components/ui/ScreenLayout";
import { Colors } from "@/constants";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function SetLocation() {
  return (
    <ScreenLayout>
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
    </ScreenLayout>
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
