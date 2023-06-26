import { FC } from "react";
import { Avatar } from "../Avatar";
import { AiOutlineMessage } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { Post } from "../../hooks/usePosts";
import { useRouter } from "next/router";
import { setLike } from "../../hooks/useLikes";

type PostProps = {
  post: Post;
  currentUserId?: string;
  isLiked: boolean;
};

export const PostItem: FC<PostProps> = ({
  post,
  currentUserId,
  isLiked = false,
}) => {
  const router = useRouter();
  const isMine = currentUserId ? currentUserId === post.profiles.id : false;
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
            onClick={() => router.push(`users/${post.profiles.id}`)}
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
            {post.created_at && (
              <span style={{ color: "#737373", fontSize: "0.75rem" }}>
                {post.created_at.substring(0, 10)}
              </span>
            )}
          </div>
          <div
            aria-label="Body"
            style={{ color: "#ffffff", marginTop: "0.5rem" }}
            onClick={() => router.push(`/posts/${post.id}`)}
          >
            {post.body}
          </div>
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
            </div>
            {isMine ? (
              <AiOutlineHeart size={20} color="#ffffff" />
            ) : (
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
                onClick={async () => {
                  if (currentUserId) {
                    await setLike(post.id, currentUserId);
                  }
                }}
              >
                <LikeIcon
                  aria-label={`like_icon_${isLiked ? "red" : "white"}`}
                  color={isLiked ? "red" : ""}
                  size={20}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
