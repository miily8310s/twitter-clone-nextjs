import { Header } from "@/components/Header";
import { PostFeed } from "@/components/posts/PostFeed";
import { UserBio } from "@/components/users/UserBio";
import { UserHero } from "@/components/users/UserHero";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { usePosts } from "@/hooks/usePosts";
import { useUser } from "@/hooks/useUser";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { ClipLoader } from "react-spinners";

const UserView: FC = () => {
  const router = useRouter();
  const { userId } = router.query;
  const { currentUser } = useCurrentUser();
  const { user, error: userError } = useUser(userId as string);
  const { posts } = usePosts(userId as string);
  if (!user) {
    if (!userError) {
      return (
        <div style={{ display: "grid", placeItems: "center" }}>
          <ClipLoader color="lightblue" size={80} />
        </div>
      );
    } else {
      return null;
    }
  }

  const displayPosts = posts
    ? posts!.map((post) => {
        return {
          body: post.body || "",
          user,
        };
      })
    : [];

  return (
    <>
      <Head>
        <title>User Page</title>
      </Head>
      <main>
        <Header label={`${user.name}`} />
        <UserHero
          coverImage={user.cover_image || ""}
          profileImage={user.avatar_url || ""}
        />
        <UserBio
          isMine={currentUser ? user?.id === currentUser?.id : false}
          name={user.name || ""}
          username={user.username || ""}
          bio={user.bio || ""}
          createdAt={"2023 06"} // TODO:
          isFollowing={false} // TODO:
          followingLength={777} // TODO:
          followersCount={999} // TODO:
          onClickEvent={() => {}} // TODO:
        />
        <PostFeed posts={displayPosts} />
      </main>
    </>
  );
};

export default UserView;
