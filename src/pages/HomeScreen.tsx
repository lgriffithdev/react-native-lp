import { Text, View, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'

import { useCallback, useEffect } from 'react';

import BlankPage from '@src/pages/BlankPage'


const HomeScreen: React.FC = () => {    
    return(
        <BlankPage backgroundImage={require('@assets/images/homepage/homepage_background.jpeg')}>
            <View style={styles.container}>
                <Text style={{ ...styles.header, fontFamily: 'AntonRegular'}}>Consulter vos stats Valorant</Text>
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
        fontSize: 70,
        color: 'white',
    }
})

export default HomeScreen
