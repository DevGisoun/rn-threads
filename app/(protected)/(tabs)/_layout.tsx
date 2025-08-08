import { Tabs } from 'expo-router';
import {
    BellDotIcon,
    HomeIcon,
    SearchIcon,
    UserIcon,
} from 'lucide-react-native';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ tabBarShowLabel: false }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Feed',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <HomeIcon color={color} />,
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: '검색',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <SearchIcon color={color} />,
                }}
            />
            <Tabs.Screen
                name="notification"
                options={{
                    title: '알림',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <BellDotIcon color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: '프로필',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <UserIcon color={color} />,
                }}
            />
        </Tabs>
    );
}
