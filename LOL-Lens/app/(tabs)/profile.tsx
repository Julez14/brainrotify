import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Profile() {
  const data = useQuery(api.getUser.getUser);

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
        <View style={styles.pic}>
          <Svg xmlns="http://www.w3.org/2000/svg" width="152" height="152" viewBox="0 0 152 152" fill="none">
            <Circle cx="76" cy="76" r="76" fill="#D9D9D9" />
          </Svg>
        </View>
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
  },
  ribbon: {
    marginTop: 30,
    marginBottom: 50,
    position: "relative",
    alignItems: "center",
  },
  badges: {
    marginTop: 30,
  },
  counter: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    color: "white",
    position: "absolute",
    zIndex: 1000,
  },
  days: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 75,
    textAlign: "center",
    color: "white",
    position: "absolute",
    zIndex: 1000,
  },
  h4: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
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
