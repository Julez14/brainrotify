// import React, { useState, useEffect } from 'react';
// import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { useRouter } from 'expo-router';
// import { Colors } from '@/constants/Colors';

// export default function Loading() {
// return (
//     <View style={styles.container}>
//       <ActivityIndicator size="large" color={Colors.light.yellow} />
//       <Text style={styles.text}>Did you know laughing can help reduce stress levels?</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute', // Position it on top of the screen
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
//     zIndex: 9999, // Ensure it's above other elements
//   },
//   text: {
//     marginTop: 20,
//     fontSize: 14,
//     fontStyle: 'italic',
//     color: 'white',
//   },
// });

import React, { useState } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

function LoadingWrapper({ loading }: { loading: boolean }) {
  return loading ? (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  ) : null;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading completion (e.g., after data fetch)
  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LoadingWrapper loading={isLoading} />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});