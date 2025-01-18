import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

export default function InputInfoScreen() {
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    occupation: "",
    age: "",
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Input Your Information</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={form.firstName}
        onChangeText={(text) => setForm({ ...form, firstName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={form.lastName}
        onChangeText={(text) => setForm({ ...form, lastName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Occupation"
        value={form.occupation}
        onChangeText={(text) => setForm({ ...form, occupation: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={form.age}
        onChangeText={(text) => setForm({ ...form, age: text })}
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/chatbot")}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#2f9d8a",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
