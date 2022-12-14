import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "@src/pages";

const Tab = createBottomTabNavigator()

const Tabs: React.FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Heroes" component={HeroScreen} />
        </Tab.Navigator>
    )
}

export default Tabs;
