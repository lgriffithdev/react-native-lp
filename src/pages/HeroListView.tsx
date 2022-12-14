import { useValorantStore } from '@src/store'
import { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { HeroCard } from '@src/components/hero';
import BlankPage from './BlankPage';

const HeroList: React.FC = () => {
    const getAgents = useValorantStore((state) => (state as any).getAgents)
    const agents = useValorantStore((state) => (state as any).agents)
    
    useEffect(() => {
        getAgents()
    }, [])

    const renderItem = ({ item }: { item: any}) => (
        <HeroCard uuid={item.uuid} />
    )

    return (
        <BlankPage>
            <FlatList
                data={agents.data}
                renderItem={renderItem}
                keyExtractor={item => item.uuid}
                ItemSeparatorComponent={() => <View style={{height: 20}} />}
            />
        </BlankPage>
    )
}

export default HeroList;