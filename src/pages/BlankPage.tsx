import { ReactNode } from "react"
import { SafeAreaView, StyleSheet } from "react-native"

type PropsType = {
    children?: ReactNode
}

const BlankPage: React.FC<PropsType> = ({ children }) => {
    return(
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }
})

export default BlankPage
