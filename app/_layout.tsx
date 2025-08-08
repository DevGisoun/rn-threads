import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { Slot } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import './global.css';

const appTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: 'white',
        card: '#101010',
    },
};

export default function RootLayout() {
    return (
        <ThemeProvider value={appTheme}>
            <View
                className="flex-1"
                style={{ backgroundColor: appTheme.colors.card }}
            >
                <SafeAreaView className="flex-1">
                    <Slot />
                </SafeAreaView>
            </View>
        </ThemeProvider>
    );
}
