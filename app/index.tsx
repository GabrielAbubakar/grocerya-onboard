import { OnboardingLayout, SplashScreen } from "@/components";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const [ready, setReady] = useState(false);
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 5000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  if (!ready) {
    return <SplashScreen />;
  }

  return (
    <View style={styles.container}>
      <OnboardingLayout />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
