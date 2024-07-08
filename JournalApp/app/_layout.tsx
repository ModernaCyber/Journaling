import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useState } from "react";

import { View } from "react-native";
import OnBoarding from "./(routes)/onBoarding";
import { ToastProvider } from "react-native-toast-notifications";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <ToastProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(routes)/welcome-intro/index" />
        <Stack.Screen name="(routes)/login/index" />
        <Stack.Screen name="(routes)/sign-up/index" />
      </Stack>
    </ToastProvider>
  );
}
