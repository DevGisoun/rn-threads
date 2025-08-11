import { Link } from 'expo-router';
import React, { useState } from 'react';
import {
    Pressable,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function SignUpScreen() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleLogin = async () => {
        if (!email || !password) return;

        try {
            setIsLoading(true);
        } catch (e) {
            console.error('Login error: ', e);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View className="flex-1 items-center justify-center bg-neutral-900 px-6">
            <View className="w-full max-w-sm">
                <Text className="mb-8 text-white text-3xl font-bold text-center">
                    Create an account
                </Text>

                <View className="gap-4">
                    <View>
                        <Text className="mb-1 text-sm font-medium text-neutral-300">
                            Email
                        </Text>
                        <TextInput
                            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg"
                            placeholder="Enter your email"
                            placeholderTextColor={'#6B7280'}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                    <View>
                        <Text className="text-sm font-medium text-neutral-300">
                            Password
                        </Text>
                        <TextInput
                            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg"
                            placeholder="Enter your password"
                            placeholderTextColor={'#6B7280'}
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>

                    <TouchableOpacity
                        className="w-full mt-6 bg-white py-3 rounded-lg"
                        activeOpacity={0.8}
                        onPress={handleLogin}
                        disabled={isLoading}
                    >
                        <Text className="text-black text-center font-semibold">
                            {isLoading ? 'Logging in ...' : 'Sign up'}
                        </Text>
                    </TouchableOpacity>

                    <View className="flex-row justify-center mt-4">
                        <Text className="text-neutral-400">
                            Already have an account?
                        </Text>
                        <Link href={'/login'} asChild>
                            <Pressable>
                                <Text className="text-blue-400 font-medium">
                                    Sign in
                                </Text>
                            </Pressable>
                        </Link>
                    </View>
                </View>
            </View>
        </View>
    );
}
