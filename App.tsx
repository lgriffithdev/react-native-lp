import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';
import getApiContent from '@src/api';
import { Text } from 'react-native';

import { useValorantStore } from '@src/store';


export default function App() {
  const data = useValorantStore((state: any) => state.data)
  const fetch = useValorantStore((state: any) => state.fetch)

  useEffect(() => {
    fetch()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {data &&
        (
          <Text>Data is loaded</Text>
        )
      }
      {!data && (
        <Text>Data is not loaded</Text>
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
