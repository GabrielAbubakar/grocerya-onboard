import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/otp" options={{ headerShown: false }} />
        <Stack.Screen
          name="(auth)/select-category"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(auth)/set-location"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(auth)/enable-notifications"
          options={{ headerShown: false }}
        />
      </Stack>
      {/* <StatusBar style="auto" backgroundColor="#0d0d0d" /> */}
    </ThemeProvider>
  );
}
