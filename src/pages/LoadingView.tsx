import { ActivityIndicator, View, StyleSheet } from 'react-native'

import BlankPage from "@src/pages/BlankPage"

const LoadingView: React.FC = () => {
    return(
        <BlankPage backgroundImage={require('@assets/images/loading/loading_bg.jpg')}>
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#FFF" />
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

export default LoadingView;
