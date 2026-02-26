import { BaseButton, BaseText, TopBar } from "@/components";
import { PhoneIcon } from "@/components/icons";
import { ScreenLayout } from "@/components/ui/ScreenLayout";
import { Colors } from "@/constants";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

export function EnableNotifications() {
  const navigation = useNavigation();
  return (
    <ScreenLayout>
      <TopBar backPress={() => navigation.goBack()} />

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
        <BaseButton
          title="Enable Notifications"
          onPress={() => navigation.navigate("HomeTabGroup")}
        />
        <BaseButton title="Skip for Now" variant="secondary" />
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
