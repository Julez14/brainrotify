import React from 'react';
import { StyleSheet, ScrollView, Image, View, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import * as Sharing from 'expo-sharing';
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function TabTwoScreen() {
  // Fetch memes from Convex
  const memes = useQuery(api.getMeme.getMeme);

  // Optional: Add a mutation to delete memes
  // const deleteMeme = useMutation(api.deleteMeme.deleteMeme); // You'll need to create this mutation

  const shareIcon = require('../../assets/images/share.png');
  const deleteIcon = require('../../assets/images/delete.png');

  // const handleDelete = async (id: number) => {
  //   try {
  //     await deleteMeme({ id });
  //   } catch (error) {
  //     console.error('Error deleting meme:', error);
  //   }
  // };

  const handleShare = async (uri: string) => {
    if (await Sharing.isAvailableAsync()) {
      try {
        await Sharing.shareAsync(uri);
      } catch (error) {
        console.error('Error sharing the image:', error);
      }
    } else {
      console.log('Sharing is not available on this device.');
    }
  };

  // Show loading state while data is being fetched
  if (!memes) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>Loading...</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Your Liked</ThemedText>
        </ThemedView>
        {memes.map((meme) => (
          <View key={meme._id} style={styles.imageColumn}>
            <View style={styles.sideImagesRow}>
              <TouchableOpacity onPress={() => handleShare(meme.url)}>
                <Image source={shareIcon} style={styles.sideImageLeft} />
              </TouchableOpacity>
              {/* <TouchableOpacity onPress={() => handleDelete(meme._id)}> */}
                <Image source={deleteIcon} style={styles.sideImageRight} />
              {/* </TouchableOpacity> */}
            </View>
            <View>
            <Image source={{ uri: meme.url }} style={styles.mainImage} />
            <ThemedText style={styles.caption}>{meme.caption}</ThemedText>
            </View>
          </View>
        ))}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  caption: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    width: 300
  },
  container: {
    flex: 1,
    marginBottom: 80
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  titleContainer: {
    marginTop: 70,
    alignItems: 'center',
    marginBottom: 8,
  },
  imageColumn: {
    alignItems: 'center',
    marginVertical: -5,
  },
  sideImagesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 320,
    marginBottom: -20,
  },
  mainImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  sideImageLeft: {
    width: 90,
    height: 65,
    borderRadius: 10,
    resizeMode: 'contain',
    marginLeft: 15,
  },
  sideImageRight: {
    width: 65,
    height: 65,
    borderRadius: 10,
    resizeMode: 'contain',
    marginLeft: 30,
  },
});