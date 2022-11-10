import { StyleSheet, SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';

import getApiContent from '@src/api';
import { useValorantStore } from '@src/store';

import HomeScreen from '@src/pages/HomeScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  const data = useValorantStore((state: any) => state.data)
  const fetch = useValorantStore((state: any) => state.fetch)

  useEffect(() => {
    fetch()
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
