import { FC, useCallback } from "react";
import { Avatar } from "../Avatar";
import { useRouter } from "next/router";
import { Comment } from "@/hooks/useComments";

type CommentItemProps = {
  comment: Comment;
};

export const CommentItem: FC<CommentItemProps> = (props) => {
  const router = useRouter();
  const onDisplayUser = useCallback(() => {
    router.push(`users/${props.comment.profiles.id}`);
  }, [props.comment.profiles.id, router]);

  return (
    <div
      role="article"
      style={{
        border: "1px solid rgb(115, 115, 115)",
        padding: "1.25rem",
        cursor: "pointer",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Avatar imageUrl={props.comment.profiles.avatar_url ?? ""} />
        <div>
          <p
            onClick={onDisplayUser}
            style={{ color: "#ffffff", fontWeight: 600, cursor: "pointer" }}
          >
            {props.comment.profiles.name}
            <span style={{ color: "rgb(115, 115, 115)", marginLeft: "0.5rem" }}>
              @{props.comment.profiles.username}
            </span>
          </p>
          <p style={{ color: "#ffffff" }}>{props.comment.body}</p>
          <p
            style={{
              color: "#ffffff",
              fontSize: "0.75rem",
              marginTop: "0.5rem",
            }}
          >
            {props.comment.created_at!.substring(0, 10)}
          </p>
        </div>
      </div>
    </div>
  );
};
