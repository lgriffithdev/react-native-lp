import { Text, View, StyleSheet } from 'react-native'

import BlankPage from '@src/pages/BlankPage'


const HomeScreen: React.FC = () => {
    return(
        <BlankPage>
            <View style={styles.container}>
                <Text>Hello World</Text>
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
    }
})

export default HomeScreen
