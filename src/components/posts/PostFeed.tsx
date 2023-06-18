import { FC } from "react";
import { PostItem } from "./PostItem";
import { Post } from "../../hooks/usePosts";

type PostFeedProps = {
  posts: Post[];
  currentUserId?: string;
  likes: number[];
};

export const PostFeed: FC<PostFeedProps> = ({
  posts,
  currentUserId,
  likes,
}) => {
  return (
    <div role="feed">
      {posts.map((post) => (
        <PostItem
          key={`${post.id}`}
          post={post}
          currentUserId={currentUserId}
          isLiked={likes.includes(post.id)}
        />
      ))}
    </div>
  );
};
