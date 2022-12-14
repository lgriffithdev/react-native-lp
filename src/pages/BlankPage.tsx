import { ReactNode } from "react"
import { 
    SafeAreaView, 
    StyleSheet, 
    ImageBackground 
} from "react-native"
import { StatusBar } from 'expo-status-bar'

type PropsType = {
    children?: ReactNode
    backgroundImage?: any
}

const BlankPage: React.FC<PropsType> = ({ children, backgroundImage }) => {
    return(
        <>
            <SafeAreaView style={styles.container}>
                <ImageBackground 
                    source={backgroundImage}
                    resizeMode="cover"
                    style={styles.image}
                    blurRadius={2}
                >
                    {children}
                </ImageBackground>
            </SafeAreaView>
            <StatusBar style="auto" />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default BlankPage
