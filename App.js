import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import LoginScreen from './App/Screen/LoginScreen/LoginScreen';
import {ClerkProvider} from "@clerk/clerk-expo"
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/outfit/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/outfit/Outfit-Medium.ttf'),
    'outfit-semi-bold': require('./assets/fonts/outfit/Outfit-SemiBold.ttf'),
    'outfit-bold': require('./assets/fonts/outfit/Outfit-Bold.ttf'),
  });
  
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ClerkProvider publishableKey={Constants.expoConfig.extra.clerkPublishKey}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <LoginScreen />
      {/* <Text style={{
        fontFamily: "outfit-bold",
      }}>
        Open up App.js to start working on your app!</Text> */}
        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 25,
  },
});
