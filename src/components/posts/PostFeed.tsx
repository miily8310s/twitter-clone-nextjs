import { FC } from "react";
import { PostItem } from "./PostItem";

type User = {
  avatar_url: string | null;
  cover_image: string | null;
  email: string | null;
  followingIds: string[] | null;
  id: string;
  name: string | null;
  username: string | null;
  bio: string | null;
};

type Post = {
  body: string;
  user: User;
};

type PostFeedProps = {
  posts: Post[];
};

export const PostFeed: FC<PostFeedProps> = ({ posts }) => {
  return (
    <div role="feed">
      {posts.map((post) => (
        <PostItem key={`${post.body}`} post={post} isLiked={true} />
      ))}
    </div>
  );
};
