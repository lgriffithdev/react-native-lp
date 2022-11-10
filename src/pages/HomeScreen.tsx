import { Text, View, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'

import { useCallback, useEffect } from 'react';

import BlankPage from '@src/pages/BlankPage'


const HomeScreen: React.FC = () => {
    const [fontsLoaded] = useFonts({
        'AntonRegular': require('@assets/fonts/Anton-Regular.ttf')
    })

    if (!fontsLoaded) 
        return null
    
    return(
        <BlankPage backgroundImage={{ 
            uri: 'https://img-4.linternaute.com/uhzhgirb0Ffs2JYvUb7hw_7li8A=/1500x/smart/7798d89d3be549c4839370740df7340d/ccmcms-linternaute/16146575.jpg'
        }}>
            <View style={styles.container}>
                <Text style={{ ...styles.header, fontFamily: 'AntonRegular'}}>Hello World</Text>
            </View>
        </BlankPage>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        textAlign: 'center',
        fontSize: 96,
        color: 'white',
    }
})

export default HomeScreen
