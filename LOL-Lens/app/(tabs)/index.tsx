import { StyleSheet, ScrollView, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.headerText}>Learn</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF', // Adjust background if needed
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginVertical: 16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  headerText: {
    fontFamily: 'Gothic A1',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
});
