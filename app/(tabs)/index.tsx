import PostListItem from '@/src/components/PostListItem';
import { posts } from '@/src/data/dummy-data';
import { FlatList, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View className="flex-1 p-4 gap-6">
            <FlatList
                data={posts}
                renderItem={({ item }) => <PostListItem post={item} />}
            />
        </View>
    );
}
