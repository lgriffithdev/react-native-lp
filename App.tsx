import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font'

import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';

import getApiContent from '@src/api';
import { useValorantStore } from '@src/store';

import HomeScreen from '@src/pages/HomeScreen';
import LoadingScreen from '@src/pages/LoadingScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    AntonRegular: require('@assets/fonts/Anton-Regular.ttf')
  })

  const data = useValorantStore((state: any) => state.data)
  const fetch = useValorantStore((state: any) => state.fetch)

  useEffect(() => {
    fetch()
  }, [])

  if (!fontsLoaded)
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Loading" component={LoadingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )

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
