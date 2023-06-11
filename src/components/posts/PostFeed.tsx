import { FC } from "react";
import { PostItem } from "./PostItem";
import { Post } from "../../hooks/usePosts";

type PostFeedProps = {
  posts: Post[];
};

export const PostFeed: FC<PostFeedProps> = ({ posts }) => {
  return (
    <div role="feed">
      {posts.map((post) => (
        <PostItem key={`${post.id}`} post={post} isLiked={true} />
      ))}
    </div>
  );
};
