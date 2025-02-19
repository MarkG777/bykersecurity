import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";

import SplashScreen from "@/components/SplashScreen";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function RootLayout() {
  // Estado que indica si la aplicación está lista
  const [isAppReady, setIsAppReady] = useState(false);
  const colorScheme = useColorScheme();

  // Cargar fuentes personalizadas
  const [fontsLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  // Simulamos una carga de datos con un useEffect
  useEffect(() => {
    setTimeout(() => {
      setIsAppReady(true); // Simula la carga de assets tras 2 segundos
    }, 2000);
  }, []);

  // Mientras la app no esté lista, mostramos la SplashScreen
  if (!fontsLoaded || !isAppReady) {
    return <SplashScreen />;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
