import { FC } from "react";
import { Avatar } from "../Avatar";
import { AiOutlineMessage } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

type User = {
  avatar_url: string;
  email: string;
  followingids: string[];
  id: string;
  name: string;
  username: string;
};

type Post = {
  body: string;
  user: User;
};

type PostProps = {
  post: Post;
};

export const PostItem: FC<PostProps> = ({ post }) => {
  const LikeIcon = true ? AiFillHeart : AiOutlineHeart;
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
        <Avatar imageUrl={post.user.avatar_url} />
        <div>
          <div
            aria-label="UserLink"
            role="button"
            onClick={() => {}}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "pointer",
            }}
          >
            <p style={{ color: "#ffffff", fontWeight: 600 }}>
              {post.user.name}
            </p>
            <span style={{ color: "#737373" }}>@{post.user.username}</span>
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
              <LikeIcon color={true && "red"} size={20} />
              {/* <p>{post.likedIds.length || 0}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
