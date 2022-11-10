import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font'

import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useValorantStore } from '@src/store';

import HomeScreen from '@src/pages/HomeScreen';
import LoadingScreen from '@src/pages/LoadingScreen';
import { StatusBar } from 'expo-status-bar';

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
      <Stack.Navigator>
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
    )

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {tabs.map((tab, index) => (
          <Stack.Screen
            name={tab.name}
            component={tab.component}
            options={{
              headerShown: false
            }}
            key={index}
          />
        ))}
      </Stack.Navigator>
      <StatusBar style="auto" />
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
