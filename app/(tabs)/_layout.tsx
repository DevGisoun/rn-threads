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
                    tabBarIcon: ({ color }) => <HomeIcon color={color} />,
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: '검색',
                    tabBarIcon: ({ color }) => <SearchIcon color={color} />,
                }}
            />
            <Tabs.Screen
                name="notification"
                options={{
                    title: '알림',
                    tabBarIcon: ({ color }) => <BellDotIcon color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: '프로필',
                    tabBarIcon: ({ color }) => <UserIcon color={color} />,
                }}
            />
        </Tabs>
    );
}
