import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import "../global.css"

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
    initialRouteName: '(main)',
  };

export default function RootLayout() {
  const colorScheme = useColorScheme(); 
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Registro y Login */}
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="registro/registro1" options={{ headerShown: false }} />
        <Stack.Screen name="registro/registro2" options={{ headerShown: false }} />
        <Stack.Screen name="registro/registro3" options={{ headerShown: false }} />
        <Stack.Screen name="login/login" options={{ headerShown: false }} />
        <Stack.Screen name="resetPassword/resetPassword" options={{ headerShown: false }} />
        {/* Pantallas test bienestar */}
        <Stack.Screen name="testBienestar/bienestar1" options={{ title: 'Test de Bienestar', }} />
        <Stack.Screen name="testBienestar/bienestar2" options={{ title: 'Test de Bienestar', }} />
        <Stack.Screen name="testBienestar/bienestar3" options={{ title: 'Test de Bienestar', }} />
        <Stack.Screen name="testBienestar/bienestar4" options={{ title: 'Test de Bienestar', }} />
        <Stack.Screen name="testBienestar/bienestar5" options={{ title: 'Test de Bienestar', }} />
        <Stack.Screen name="testBienestar/bienestar6" options={{ title: 'Test de Bienestar', }} />
        <Stack.Screen name="testBienestar/bienestar7" options={{ title: 'Test de Bienestar', }} />
        <Stack.Screen name="testBienestar/bienestar8" options={{ title: 'Test de Bienestar', }} />
        <Stack.Screen name="testBienestar/bienestar9" options={{ title: 'Test de Bienestar', }} />
        {/* Pantallas de apoyo */}
        <Stack.Screen name="+not-found" />
        {/* Pantalla principal */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
    </SafeAreaProvider>
  );
}
