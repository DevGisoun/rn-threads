import { User } from '.';

export interface Post {
    id: string;
    content: string;
    user_id: string;
    user: User;
    parent_id: string;
    parent: Post | null;
    replies: Post[];
    createdAt: string;
}
