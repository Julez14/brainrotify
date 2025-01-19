import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageErrorEventData,
  NativeSyntheticEvent,
} from "react-native";
import React from "react";

interface ArticleCellProps {
  title: string; // article title
  date: string; // publish date
  time: string; // estimated read time
}

const ArticleCell: React.FC<ArticleCellProps> = (props) => {
  return (
    <View style={styles.scanCell}>
      <View style={styles.scanTextContainer}>
        <View style={styles.scanName}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View style={styles.scanBrand}>
          <Text style={styles.meta}>{props.date}</Text>
        </View>
        <View style={styles.scanTime}>
          <Text style={styles.meta}>{props.time}</Text>
        </View>
      </View>
    </View>
  );
};

export default ArticleCell;

const styles = StyleSheet.create({
  scanCell: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    elevation: 2,
  },
  scanTextContainer: {
    flex: 2,
  },
  text: {
    fontSize: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  meta: {
    fontSize: 14,
    color: "gray",
  },
  scanName: {},
  scanBrand: {},
  scanTime: {},
});
