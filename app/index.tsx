import { OnboardingLayout } from "@/components";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <OnboardingLayout />;
}

const styles = StyleSheet.create({});
