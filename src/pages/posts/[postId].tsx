import { Header } from "@/components/Header";
import { PostForm } from "@/components/PostForm";
import { CommentFeed } from "@/components/posts/CommentFeed";
import { PostItem } from "@/components/posts/PostItem";
import { addComments, useComments } from "@/hooks/useComments";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useLikes } from "@/hooks/useLikes";
import { usePost } from "@/hooks/usePost";
import { useUser } from "@/hooks/useUser";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { FC } from "react";
import { ClipLoader } from "react-spinners";

type PostViewProps = {
  postId: string | string[] | undefined;
};

const PostView: FC<PostViewProps> = (props) => {
  const { postId } = props;
  const { currentUser } = useCurrentUser();
  const { post, error } = usePost(postId as string);
  const { comments } = useComments(postId as string);
  const { likes } = useLikes(currentUser ? currentUser.id : undefined);
  const { user } = useUser(currentUser?.id ?? "");

  if (!post) {
    if (!error) {
      return (
        <div style={{ display: "grid", placeItems: "center" }}>
          <ClipLoader color="lightblue" size={80} />
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <>
      <Head>
        <title>User Page</title>
      </Head>
      <main>
        <Header label={`${post.body?.substring(0, 8)}`} />
        <PostItem
          post={post}
          isLiked={likes.includes(post.id)}
          currentUserId={currentUser ? currentUser.id : undefined}
        />
        {currentUser && user && (
          <PostForm
            currentUser={user}
            placeholder="What's happening?"
            addCommentEvent={addComments}
            postId={post.id}
          />
        )}
        <CommentFeed comments={comments} />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { postId } = context.query;
  return { props: { postId } };
};

export default PostView;
