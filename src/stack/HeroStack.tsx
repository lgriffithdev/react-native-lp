import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeroListView } from "@src/pages";

const Stack = createNativeStackNavigator()


const HeroStack: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerShown: false,
            })}
        >
            <Stack.Screen name="List" component={HeroListView} />
        </Stack.Navigator>
    )
}

export default HeroStack;
