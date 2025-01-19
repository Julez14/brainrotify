import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import Svg, { Circle } from "react-native-svg";
import { useQuery } from "convex/react";
import * as ImagePicker from "expo-image-picker";
import { api } from "../../convex/_generated/api";

export default function Profile() {
  const [profilePic, setProfilePic] = useState(null);
  const data = useQuery(api.getUser.getUser);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Permission Denied", "You need to allow access to your gallery.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePic(result.assets[0].uri); 
    }
  };

  if (!data) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.back}>
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity style={styles.pic} onPress={pickImage}>
          {profilePic ? (
            <Image source={{ uri: profilePic }} style={styles.image} />
          ) : (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="152"
              height="152"
              viewBox="0 0 152 152"
              fill="none"
            >
              <Circle cx="76" cy="76" r="76" fill="#D9D9D9" />
            </Svg>
          )}
        </TouchableOpacity>
        <Text style={styles.h1}>{data[0]?.firstName || "N/A"} {data[0]?.lastName || "N/A"}</Text>
        <Text style={styles.h2}>{data[0]?.number || "N/A"}</Text>
        <Text style={styles.h2}>{data[0]?.age || "N/A"}</Text>
        <Text style={styles.h2}>{data[0]?.occupation || "N/A"}</Text>

        {/* First Progress */}
        <View style={styles.progress}>
          <Text style={styles.h3}>Status</Text>
          <View style={styles.labels}>
            <Text style={styles.bad}>Noob</Text>
            <Text style={styles.good}>Expert</Text>
          </View>
          <View style={styles.rectContainer}>
            <View style={styles.rect}></View>
            <View style={[styles.rectShort, { backgroundColor: "#00B488", width: "50%" }]}></View>
          </View>
        </View>

        {/* Second Progress */}
        <View style={styles.progress}>
          <Text style={styles.h3}>Learning</Text>
          <View style={styles.labels}>
            <Text style={styles.bad}>Sloth</Text>
            <Text style={styles.good}>Bolt</Text>
          </View>
          <View style={styles.rectContainer}>
            <View style={styles.rect}></View>
            <View style={[styles.rectShort, { backgroundColor: "#00B488", width: "30%" }]}></View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    padding: 80,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 0,
    textAlign: "center",
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  h2: {
    fontSize: 16,
    marginTop: 5,
  },
  progress: {
    alignItems: "flex-start",
    display: "flex",
    width: "140%",
    marginBottom: 20,
  },
  h3: {
    fontSize: 20,
    marginTop: 40,
    fontWeight: "bold",
  },
  labels: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
    flexDirection: "row",
    width: "100%",
  },
  rectContainer: {
    position: "relative",
    width: "100%",
    height: 9,
    marginTop: 10,
  },
  rect: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    borderRadius: 9,
    backgroundColor: "#D9D9D9",
    height: "100%",
  },
  rectShort: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 9,
    backgroundColor: "#00B488",
    height: "100%",
  },
  pic: {
    alignItems: "center",
    marginTop: 40,
    borderRadius: 76,
    overflow: "hidden",
    width: 152,
    height: 152,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 76,
  },
  bad: {
    marginTop: 10,
    color: "#00B488",
  },
  good: {
    marginTop: 10,
    color: "#00B488",
  },
});