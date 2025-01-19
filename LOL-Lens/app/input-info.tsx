// //test
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   Alert
// } from "react-native";
// import { useRouter } from "expo-router";
// import { createUser } from "../convex/createUser"; // Import the createUser mutation
// import { api } from "../convex/_generated/api";
// import { useMutation } from "convex/react";
// import { useQuery } from "convex/react";  // Use the useQuery hook


// export default function InputInfoScreen() {
//   // const existingData = useQuery(api.getUser.getUser, number); // Retrieve the existing data
//   const addDataMutation = useMutation(api.createUser.createUser); // Mutation hook for adding data
//   const router = useRouter();

//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     occupation: "",
//     age: "",
//     number: "",
//     password: "",
//   });

//   // const createUserMutation = useMutation(createUser);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Input Your Information</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="First Name"
//         value={form.firstName}
//         onChangeText={(text) => setForm({ ...form, firstName: text })}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Last Name"
//         value={form.lastName}
//         onChangeText={(text) => setForm({ ...form, lastName: text })}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Occupation"
//         value={form.occupation}
//         onChangeText={(text) => setForm({ ...form, occupation: text })}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Age"
//         value={form.age}
//         onChangeText={(text) => setForm({ ...form, age: text })}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Phone Number"
//         value={form.number}
//         onChangeText={(text) => setForm({ ...form, number: text })}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={form.password}
//         onChangeText={(text) => setForm({ ...form, password: text })}
//       />
//       <TouchableOpacity
//         style={styles.button}
//         onPress={handleSubmit}
//       >
//         <Text style={styles.buttonText}>Submit</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   button: {
//     marginTop: 20,
//     backgroundColor: "#2f9d8a",
//     padding: 10,
//     borderRadius: 5,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
// });
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";
import { useRouter } from "expo-router";
import { api } from "../convex/_generated/api"; // Import the mutations from your Convex API
import { useMutation } from "convex/react";  // Use the useMutation hook

export default function InputInfoScreen() {
  const [isLogin, setIsLogin] = useState(false); // State to toggle between login and sign-up
  const [isRegistered, setIsRegistered] = useState(false); // State to toggle between login and sign-up
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    occupation: "",
    age: "",
    number: "",
    password: "",
  });

  const createUserMutation = useMutation(api.createUser.createUser); // Mutation hook for creating user
  const loginUserMutation = useMutation(api.loginUser.loginUser); // Mutation hook for logging in
  const getUserMutation = useMutation(api.getNewUser.getNewUser); // Mutation hook for logging in

  const router = useRouter();

  const handleSubmit = async () => {
    if (isLogin && !isRegistered) {
      // For login: use the loginUserMutation
      try {
        const loggedInUser = await loginUserMutation({
          number: form.number,
          password: form.password,
        });
        console.log("Logged in user:", loggedInUser);
        Alert.alert("Login successful!");
        router.push("/chatbot"); // Redirect to chatbot or dashboard after successful login
      } catch (error) {
        Alert.alert("Error", "Invalid credentials");
      }
    } else {
      // Handle sign-up logic
      try {
        await createUserMutation({
          firstName: form.firstName,
          lastName: form.lastName,
          occupation: form.occupation,
          age: Number(form.age),
          number: Number(form.number),
          password: form.password,
        });
        Alert.alert("Sign up successful!");
        setIsRegistered(true); // Switch to login form after successful sign up
        router.push("/chatbot");
      } catch (error) {
        Alert.alert("Error", "Failed to create account");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? "Login" : "Sign Up"}</Text>
      {!isLogin && (
        <>
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
        </>
      )}
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={form.number}
        onChangeText={(text) => setForm({ ...form, number: text })}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={form.password}
        onChangeText={(text) => setForm({ ...form, password: text })}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>{isLogin ? "Login" : "Submit"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.toggleButton} onPress={() => setIsLogin(!isLogin)}>
        <Text style={styles.toggleButtonText}>
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
        </Text>
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
    textAlign: "center",
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
  toggleButton: {
    marginTop: 10,
    alignItems: "center",
  },
  toggleButtonText: {
    color: "#007BFF",
    textDecorationLine: "underline",
  },
});
