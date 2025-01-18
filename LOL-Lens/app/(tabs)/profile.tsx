import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { RotateInDownRight } from "react-native-reanimated";
import Svg, { Circle, Path } from "react-native-svg";

export default function Profile() {

  return (
    <ScrollView>

    
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.pic}>
      <Svg xmlns="http://www.w3.org/2000/svg" width="152" height="152" viewBox="0 0 152 152" fill="none">
<Circle cx="76" cy="76" r="76" fill="#D9D9D9"/>
</Svg>
      </View>
      <Text style={styles.h1}>Full Name</Text>
      <Text style={styles.h2}>12345667909</Text>
      <Text style={styles.h2}>20</Text>
      <Text style={styles.h2}>Student</Text>
      <View style={styles.progress}>
        <Text style={styles.h3}>Status</Text>
        <View style={styles.labels}>
        <Text style={styles.bad}>Noob</Text>
        <Text style={styles.good}>Expert</Text>
        </View>
        <View style={styles.rect}></View>
    </View>
    <View style={styles.progress}>
        <Text style={styles.h3}>Learning</Text>
        <View style={styles.labels}>
        <Text style={styles.bad}>Sloth</Text>
        <Text style={styles.good}>Bolt</Text>
        </View>
        <View style={styles.rect}></View>

      </View>
      <View style={styles.badges}>
      <Text style={styles.h4}>Daily Streak</Text>
      <View style={styles.ribbon}>
        <Text style={styles.counter}>5</Text>
        <Text style={styles.days}>Day(s)</Text>
      <Svg xmlns="http://www.w3.org/2000/svg" width="175" height="179" viewBox="0 0 175 179" fill="none">
<Path d="M155.276 107.682L173.052 138.052C173.784 139.302 174.197 140.709 174.256 142.152C174.315 143.594 174.019 145.029 173.392 146.334C172.765 147.638 171.827 148.774 170.657 149.642C169.488 150.51 168.122 151.086 166.678 151.32L165.656 151.418L164.644 151.409L138.124 149.715L126.343 173.219C125.703 174.492 124.765 175.596 123.606 176.439C122.447 177.282 121.1 177.84 119.678 178.067C118.256 178.294 116.8 178.182 115.431 177.743C114.061 177.303 112.818 176.547 111.804 175.538L111.063 174.699L110.412 173.719L92.6176 143.34C105.144 142.567 117.319 138.946 128.189 132.76C139.06 126.574 148.331 117.991 155.276 107.682Z" fill="#00B488"/>
<Path d="M82.3463 143.34L64.5703 173.727C63.85 174.959 62.842 176.002 61.6301 176.772C60.4182 177.541 59.0376 178.014 57.603 178.151C56.1684 178.288 54.7214 178.085 53.3824 177.559C52.0434 177.033 50.8511 176.199 49.9048 175.127L49.2176 174.236L48.6389 173.219L36.8486 149.724L10.3475 151.418C8.88768 151.511 7.42688 151.253 6.09019 150.667C4.7535 150.081 3.58074 149.184 2.67237 148.053C1.76399 146.923 1.14706 145.592 0.874417 144.174C0.601774 142.757 0.681539 141.296 1.10688 139.915L1.46855 138.961L1.92064 138.07L19.7146 107.673C26.6557 117.982 35.9216 126.566 46.7872 132.756C57.6528 138.945 69.8233 142.561 82.3463 143.34Z" fill="#00B488"/>
<Path d="M87.5 0.833313L89.67 0.868979C106.071 1.42384 121.612 8.23915 133.015 19.8773C144.418 31.5154 150.792 47.0664 150.792 63.25L150.765 64.9709L150.701 66.6829L150.539 68.8675L150.303 71.0253L150.086 72.6125C149.491 76.4613 148.532 80.2467 147.22 83.9188L146.171 86.6652L144.788 89.7681C139.669 100.522 131.546 109.611 121.371 115.97C111.196 122.329 99.3928 125.693 87.3471 125.667C75.3013 125.64 63.5132 122.225 53.367 115.822C43.2208 109.419 35.1379 100.294 30.0673 89.5185L28.8919 86.8702L28.4218 85.6843L27.6984 83.7494L26.8395 81.1279C26.5327 80.1127 26.2523 79.0899 25.9986 78.0606L25.4561 75.6442L25.0131 73.2277L24.8322 71.9883L24.4796 69.1082L24.2626 65.8536L24.2083 63.25C24.2081 47.0664 30.5818 31.5154 41.9849 19.8773C53.3881 8.23915 68.9292 1.42384 85.33 0.868979L87.5 0.833313Z" fill="#00B488"/>
</Svg>
      </View>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 80,
    justifyContent: "flex-start",
    alignItems: "center",
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
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 0,
    textAlign: "center"
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  h2: {
    fontSize: 16,
    marginTop: 5
  },
  progress: {
    alignItems: "flex-start",
    display: "flex",
    width: "140%"
  },
  h3: {
    fontSize: 20,
    marginTop: 40,
    fontWeight: "bold"
  },
  h4: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center"
  },
  labels: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
    flexDirection: "row",
    width: "100%"
  },
  rect: {
    borderRadius: 9,
    backgroundColor: "#D9D9D9",
    width: "100%",
    height: 9,
    marginTop: 10
  },
  pic: {
    alignItems: "center",
    marginTop: 40
  },
  ribbon: {
    marginTop: 30,
    marginBottom: 50,
    position: 'relative',
    alignItems: "center"
  },
  bad: {
    marginTop: 10,
    color: "#00B488"
  },
  good: {
    marginTop: 10,
    color: "#00B488"
  },
  badges: {
    marginTop: 30
  }
});