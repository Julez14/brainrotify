// TODO: Replace the logo image with a logo SVG so that it looks better

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Image } from "expo-image";

export default function IntroScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/LOLlenslogo.png")}
      />
      <Text style={styles.tagline}>Learning from a different perspective</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/input-info")}
      >
        <Text style={styles.buttonText}>Get Started!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2f9d8a",
  },
  logo: {
    width: 500, // Adjust width of the image
    height: 100, // Adjust height of the image
    marginBottom: 20, // Add spacing between the image and other elements
  },
  tagline: {
    fontSize: 16,
    color: "#fff",
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2f9d8a",
  },
});
