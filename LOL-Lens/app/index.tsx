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
        resizeMode="contain"
      />
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
    paddingTop: 50, 
  },
  logo: {
    marginTop: -50,
    width:  450,
    height: 150,
    marginBottom: 10, 
  },
  button: {
    marginTop: -40,
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
