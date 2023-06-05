import { FC } from "react";
import { PostItem } from "./PostItem";

type User = {
  avatar_url: string;
  email: string;
  followingIds: string[];
  id: string;
  name: string;
  username: string;
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
