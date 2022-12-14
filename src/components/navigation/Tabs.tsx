import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeView } from "@src/pages";
import { HeroStack } from "@src/stack";

const Tab = createBottomTabNavigator()

const Tabs: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={() => ({
                headerShown: false,
            })}
        >
            <Tab.Screen name="Home" component={HomeView} />
            <Tab.Screen name="Heroes" component={HeroStack} />
        </Tab.Navigator>
    )
}

export default Tabs;
