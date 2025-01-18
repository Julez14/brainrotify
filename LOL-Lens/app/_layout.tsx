// import { ConvexReactClient } from "convex/react";
// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from "@react-navigation/native";
// import { useFonts } from "expo-font";
// import { Stack } from "expo-router";
// import * as SplashScreen from "expo-splash-screen";
// import { StatusBar } from "expo-status-bar";
// import { useEffect } from "react";
// import "react-native-reanimated";
// import { useColorScheme } from "@/hooks/useColorScheme";
// import { ConvexAuthProvider } from "@convex-dev/auth/react";
// import * as SecureStore from "expo-secure-store";

// const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
//   unsavedChangesWarning: false,
// });

// const secureStorage = {
//   getItem: SecureStore.getItemAsync,
//   setItem: SecureStore.setItemAsync,
//   removeItem: SecureStore.deleteItemAsync,
// };

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <ConvexAuthProvider
//     client={convex}
//     storage={
//       Platform.OS === "android" || Platform.OS === "ios"
//         ? secureStorage
//         : undefined
//     }
//   >
//       <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
//         <Stack>
//           <Stack.Screen name="index" options={{ headerShown: false }} />
//           <Stack.Screen name="input-info" options={{ headerShown: false }} />
//           <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//           <Stack.Screen name="+not-found" />
//         </Stack>
//         <StatusBar style="auto" />
//       </ThemeProvider>
//       </ConvexAuthProvider>
//   );
// }

// import { ConvexReactClient } from "convex/react";
// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from "@react-navigation/native";
// import { useFonts } from "expo-font";
// import { Stack } from "expo-router";
// import * as SplashScreen from "expo-splash-screen";
// import { StatusBar } from "expo-status-bar";
// import { useEffect, useState} from "react";
// import "react-native-reanimated";
// import { useColorScheme } from "@/hooks/useColorScheme";
// import { ConvexAuthProvider, Authenticated, Unauthenticated, AuthLoading } from "@convex-dev/auth/react";
// import * as SecureStore from "expo-secure-store";
// import { View, ActivityIndicator, StyleSheet, Platform } from "react-native";
// import { SignIn } from "./signin"; // Your SignIn Component
// import { SignOut } from "./signout"; // Your SignOut Component

// function LoadingWrapper({ loading }: { loading: boolean }) {
//   return loading ? (
//     <View style={styles.loadingContainer}>
//       <ActivityIndicator size="large" color="#0000ff" />
//     </View>
//   ) : null;
// }

// const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
//   unsavedChangesWarning: false,
// });

// const secureStorage = {
//   getItem: SecureStore.getItemAsync,
//   setItem: SecureStore.setItemAsync,
//   removeItem: SecureStore.deleteItemAsync,
// };

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   const [isLoading, setIsLoading] = useState(true);
//     // Simulate loading completion (e.g., after data fetch)
//     useEffect(() => {
//       const timer = setTimeout(() => setIsLoading(false), 3000);
//       return () => clearTimeout(timer);
//     }, []);

//   return (
//     <ConvexAuthProvider
//       client={convex}
//       storage={
//         Platform.OS === "android" || Platform.OS === "ios"
//           ? secureStorage
//           : undefined
//       }
//     >
//       {/* <AuthLoading>
//       <View style={styles.loadingContainer}>
//     <ActivityIndicator size="large" color="#0000ff" />
//   </View>
//         {/* <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#0000ff" />
//         </View> */}
//         <LoadingWrapper loading={isLoading} />
//       {/* </AuthLoading> */} */
//       <Unauthenticated>
//         <SignIn />
//       </Unauthenticated>
//       <Authenticated>
//         <ThemeProvider
//           value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
//         >
//           <Stack>
//             <Stack.Screen name="index" options={{ headerShown: false }} />
//             <Stack.Screen name="input-info" options={{ headerShown: false }} />
//             <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//             <Stack.Screen name="+not-found" />
//           </Stack>
//           <StatusBar style="auto" />
//         </ThemeProvider>
//         <SignOut />
//       </Authenticated>
//     </ConvexAuthProvider>
//   );
// }

// const styles = StyleSheet.create({
//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f5f5f5",
//   },
// });

import { ConvexReactClient } from "convex/react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  ConvexAuthProvider,
} from "@convex-dev/auth/react";
import {
  Authenticated,
  Unauthenticated,
  AuthLoading,
} from "convex/react";
import * as SecureStore from "expo-secure-store";
import { View, ActivityIndicator, StyleSheet, Platform } from "react-native";
import { SignIn } from "./signin";
import { SignOut } from "./signout";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

const secureStorage = {
  getItem: SecureStore.getItemAsync,
  setItem: SecureStore.setItemAsync,
  removeItem: SecureStore.deleteItemAsync,
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
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
    <ConvexAuthProvider
      client={convex}
      storage={
        Platform.OS === "android" || Platform.OS === "ios"
          ? secureStorage
          : undefined
      }
    >
      {/* Use AuthLoading to handle the loading state */}
      <AuthLoading>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </AuthLoading>
      <Unauthenticated>
        <SignIn />
      </Unauthenticated>
      <Authenticated>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="input-info" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
        <SignOut />
      </Authenticated>
    </ConvexAuthProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
});
