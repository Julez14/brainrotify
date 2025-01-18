import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <ThemedView style={styles.titleContainer}>
          <ThemedText style={styles.headerText}>Learn</ThemedText>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  titleContainer: {
    marginVertical: 30,
    backgroundColor: '#FFFFFF',
    
  },
  headerText: {
    fontFamily: 'Gothic A1',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    backgroundColor: 'transparent',
    marginVertical: 20,
  },
});
