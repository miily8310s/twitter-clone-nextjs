import { FC } from "react";
import { Avatar } from "../Avatar";
import { AiOutlineMessage } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { Post } from "../../hooks/usePosts";

type PostProps = {
  post: Post;
  isLiked: boolean;
};

export const PostItem: FC<PostProps> = ({ post, isLiked }) => {
  const LikeIcon = isLiked ? AiFillHeart : AiOutlineHeart;
  return (
    <div
      role="article"
      style={{
        padding: "1.5rem",
        cursor: "pointer",
        border: "1px solid rgb(38 38 38)",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
        <Avatar imageUrl={post.profiles.avatar_url || undefined} />
        <div>
          <div
            aria-label="UserLink"
            role="link"
            onClick={() => {}}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "pointer",
            }}
          >
            <p style={{ color: "#ffffff", fontWeight: 600 }}>
              {post.profiles.name}
            </p>
            <span style={{ color: "#737373" }}>@{post.profiles.username}</span>
            {/* <span style={{ color: "#737373", fontSize: "0.75rem" }}>
              {post.user.created_at}
            </span> */}
          </div>
          <div
            aria-label="Body"
            style={{ color: "#ffffff", marginTop: "0.5rem" }}
          >
            {post.body}
          </div>
          {/* コメント・いいね数 */}
          <div
            role="group"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              marginTop: "0.75rem",
            }}
          >
            <div
              aria-label="Messages"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#737373",
              }}
            >
              <AiOutlineMessage size={20} />
              {/* <p>{post.commentId.length || 0}</p> */}
            </div>
            <div
              aria-label="Like"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#737373",
                cursor: "pointer",
              }}
              role="button"
              onClick={() => {}}
            >
              <LikeIcon color={isLiked ? "red" : ""} size={20} />
              {/* <p>{post.likedIds.length || 0}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
