import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    Text,
    TextInput,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function New() {
    const [text, setText] = useState<string>('');

    return (
        <SafeAreaView edges={['bottom']} className="p-4 flex-1">
            <KeyboardAvoidingView
                className="flex-1"
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 140 : 0}
            >
                <Text className="text-white text-lg font-bold">username</Text>

                <TextInput
                    multiline
                    placeholder="What is your mind?"
                    placeholderTextColor={'#737373'}
                    className="text-white text-lg"
                    numberOfLines={4}
                    value={text}
                    onChangeText={setText}
                />

                <View className="mt-auto">
                    <Pressable
                        onPress={() => {}}
                        className="self-end p-3 px-6 bg-white rounded-full"
                    >
                        <Text className="text-black font-bold">Post</Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
