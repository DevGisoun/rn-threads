import {
    HeartIcon,
    MessageCircleIcon,
    Repeat2Icon,
    SendIcon,
} from 'lucide-react-native';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { Post } from '../types';

// dayjs
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

interface PostListItemProps {
    post: Post;
}

export default function PostListItem({ post }: PostListItemProps) {
    return (
        <View className="flex-row p-4 border-b border-neutral-800/70">
            {/* 유저 Avatar 이미지 */}
            <View className="mr-3">
                <Image
                    source={{ uri: post.user.image }}
                    alt="user-avatar"
                    className="w-12 h-12 rounded-full"
                />
            </View>

            {/* 콘텐츠 */}
            <View className="flex-1">
                {/* 유저 정보 */}
                <View className="flex-row items-center">
                    <Text className="text-white font-bold mr-2">
                        {post.user.username}
                    </Text>
                    <Text className="text-neutral-500">
                        {dayjs(post.createdAt).fromNow()}
                    </Text>
                </View>

                {/* 게시글 내용 */}
                <Text className="text-white mt-1 mb-3">{post.content}</Text>

                {/* 상호 작용 버튼 컨테이너 */}
                <View className="flex-row gap-4 mt-2">
                    <Pressable className="flex-row items-center">
                        <HeartIcon size={20} color={'#d4d4d4'} />
                        <Text className="text-neutral-300 ml-2">0</Text>
                    </Pressable>

                    <Pressable className="flex-row items-center">
                        <MessageCircleIcon size={20} color={'#d4d4d4'} />
                        <Text className="text-neutral-300 ml-2">
                            {post.replies.length}
                        </Text>
                    </Pressable>

                    <Pressable className="flex-row items-center">
                        <Repeat2Icon size={20} color={'#d4d4d4'} />
                        <Text className="text-neutral-300 ml-2">0</Text>
                    </Pressable>

                    <Pressable className="flex-row items-center">
                        <SendIcon size={20} color={'#d4d4d4'} />
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
