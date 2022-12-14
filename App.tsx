import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font'

import { NavigationContainer } from '@react-navigation/native';

import { LoadingView } from '@src/pages';
import { StatusBar } from 'expo-status-bar';
import { Tabs } from '@src/components/navigation';

export default function App() {
  const [fontsLoaded] = useFonts({
    AntonRegular: require('@assets/fonts/Anton-Regular.ttf')
  })

  const [isLoadingFontFinished, setIsLoadingFontFinished] = useState(fontsLoaded)

  useEffect(() => {
    setIsLoadingFontFinished(fontsLoaded)
  }, [fontsLoaded])

  return (
      <NavigationContainer>
        { !isLoadingFontFinished ? (
          <LoadingView />
        ) : (
          <Tabs />
        )}
        <StatusBar style="auto" />
      </NavigationContainer>
  );
}
