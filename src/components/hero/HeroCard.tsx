import { useValorantStore } from '@src/store';

import { View, Text, StyleSheet, ImageBackground } from 'react-native';

type HeroCardProps = {
    uuid: string
}

const HeroCard: React.FC<HeroCardProps> = ({ uuid }) => {
    const getAgent = useValorantStore((state) => (state as any).getAgent);
    const agent = getAgent(uuid);

    const backgroundSrc = { uri: agent.bustPortrait }

    return (
        <View style={style.container}>
            <ImageBackground source={backgroundSrc} resizeMode="contain">
                <View style={style.wrapper}>
                    <Text style={style.text}>{agent.displayName}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        padding: 10,
        backgroundColor: 'gray',
    },
    text: {
        fontWeight: '700',
        fontSize: 24,
    },
    wrapper: {
        height: 200,
        justifyContent: 'center'
    }
})

export default HeroCard;
