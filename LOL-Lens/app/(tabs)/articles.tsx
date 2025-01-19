import React from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { useRouter } from "expo-router";
import ArticleCell from "../../components/ArticleCell";
import { SafeAreaView } from "react-native-safe-area-context";
import { articles, Article } from "../../data/articleData"; // Import articles data

const ArticlesScreen = () => {
  const router = useRouter();

  const renderItem = ({ item }: { item: Article }) => (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "/articleDisplay",
          params: {
            title: item.title,
            date: item.date,
            time: item.time,
            text: item.text,
          },
        })
      }
    >
      <ArticleCell title={item.title} date={item.date} time={item.time} />
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}> Brainrotify </Text>
      </View>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerContainer: {
    margin: 16,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  articleMeta: {
    fontSize: 14,
    color: "gray",
  },
  listContent: {
    paddingBottom: 16,
  },
});

export default ArticlesScreen;
