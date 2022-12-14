import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font'

import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useValorantStore } from '@src/store';

import { HomeScreen, LoadingScreen } from '@src/pages';
import { StatusBar } from 'expo-status-bar';
import { Tabs } from '@src/components/navigation';

const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    AntonRegular: require('@assets/fonts/Anton-Regular.ttf')
  })

  const [isLoadingFontFinished, setIsLoadingFontFinished] = useState(fontsLoaded)

  useEffect(() => {
    setIsLoadingFontFinished(fontsLoaded)
  }, [fontsLoaded])

  const data = useValorantStore((state: any) => state.data)
  const fetch = useValorantStore((state: any) => state.fetch)

  useEffect(() => {
    fetch()
  }, [])

  const tabs = [
    {
      name: 'Home',
      component: HomeScreen
    }
  ]

  if (!isLoadingFontFinished || !data)
    return (
      <NavigationContainer>
        <LoadingScreen />
        <StatusBar style="auto" />
      </NavigationContainer>
    )

  return (
      <NavigationContainer>
        <StatusBar style="auto" />
        <Tabs />
      </NavigationContainer>
  );
}
