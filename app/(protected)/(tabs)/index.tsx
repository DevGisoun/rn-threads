import PostListItem from '@/src/components/PostListItem';
import { posts } from '@/src/data/dummy-data';
import { Link } from 'expo-router';
import { FlatList } from 'react-native';

export default function HomeScreen() {
    return (
        <FlatList
            data={posts}
            renderItem={({ item }) => <PostListItem post={item} />}
            ListHeaderComponent={() => (
                <>
                    <Link
                        href={'/new'}
                        className="pt-4 text-blue-500 text-3xl text-center"
                    >
                        New Post
                    </Link>
                    <Link
                        href={'/login'}
                        className="pt-4 text-blue-500 text-3xl text-center"
                    >
                        Login
                    </Link>
                </>
            )}
        />
    );
}
