import { Header } from "@/components/Header";
import { PostItem } from "@/components/posts/PostItem";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useLikes } from "@/hooks/useLikes";
import { usePost } from "@/hooks/usePost";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { ClipLoader } from "react-spinners";

const PostView: FC = () => {
  const router = useRouter();
  const { postId } = router.query;
  const { currentUser } = useCurrentUser();
  const { post, error } = usePost(postId as string);
  const { likes } = useLikes(currentUser ? currentUser.id : undefined);
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
      </main>
    </>
  );
};

export default PostView;
