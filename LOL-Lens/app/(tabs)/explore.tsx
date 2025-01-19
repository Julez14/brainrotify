import React, { useState } from 'react';
import { StyleSheet, ScrollView, Image, View, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import * as Sharing from 'expo-sharing'; // Import the library

export default function TabTwoScreen() {
  const [mainImages, setMainImages] = useState([
    {
      id: 1,
      uri: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      uri: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop',
    },
    {
      id: 3,
      uri: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      uri: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 5,
      uri: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ]);

  const shareIcon = require('../../assets/images/share.png');
  const deleteIcon = require('../../assets/images/delete.png');

  const handleDelete = (id: number) => {
    setMainImages((prevImages) => prevImages.filter((image) => image.id !== id));
  };

  const handleShare = async (uri) => {
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

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Your Liked</ThemedText>
        </ThemedView>
        {mainImages.map((mainImage) => (
          <View key={mainImage.id} style={styles.imageColumn}>
            <View style={styles.sideImagesRow}>
              {/* Share Icon */}
              <TouchableOpacity onPress={() => handleShare(mainImage.uri)}>
                <Image source={shareIcon} style={styles.sideImageLeft} />
              </TouchableOpacity>
              {/* Delete Icon */}
              <TouchableOpacity onPress={() => handleDelete(mainImage.id)}>
                <Image source={deleteIcon} style={styles.sideImageRight} />
              </TouchableOpacity>
            </View>
            {/* Main Image */}
            <Image source={{ uri: mainImage.uri }} style={styles.mainImage} />
          </View>
        ))}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
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
