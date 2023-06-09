import Head from "next/head";
import { ClipLoader } from "react-spinners";
import { Header } from "@/components/Header";
import { PostFeed } from "@/components/posts/PostFeed";
import { usePosts } from "@/hooks/usePosts";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { Welcome } from "@/components/Welcome";
import { PostForm } from "@/components/PostForm";
import { useUser } from "@/hooks/useUser";
import { useLikes } from "@/hooks/useLikes";
import { addPost } from "@/hooks/usePost";

export default function Home() {
  const { posts, error } = usePosts();
  const { currentUser } = useCurrentUser();
  const { user } = useUser(currentUser?.id ?? "");
  const { likes } = useLikes(currentUser?.id as string);

  if (!posts) {
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
        <title>Next.js Twitter Clone</title>
      </Head>
      <main>
        <Header label="Home" />
        <div
          role="form"
          style={{
            border: "1px solid rgb(38 38 38)",
            padding: "0.5rem 1.25rem 0.5rem 1.25rem",
          }}
        >
          {currentUser && user ? (
            <PostForm
              currentUser={user}
              placeholder="What's happening?"
              addPostEvent={addPost}
            />
          ) : (
            <Welcome />
          )}
        </div>
        <PostFeed
          posts={posts}
          currentUserId={currentUser ? currentUser.id : undefined}
          likes={likes}
        />
      </main>
    </>
  );
}
