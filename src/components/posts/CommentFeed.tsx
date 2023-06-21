import { FC } from "react";
import { CommentItem } from "./CommentItem";
import { Comment } from "@/hooks/useComments";

type CommentFeedProps = {
  comments: Comment[];
};

export const CommentFeed: FC<CommentFeedProps> = (props) => {
  return (
    <div role="feed">
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
