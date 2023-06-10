import { Header } from "@/components/Header";
import { PostFeed } from "@/components/posts/PostFeed";
import { UserBio } from "@/components/users/UserBio";
import { UserHero } from "@/components/users/UserHero";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { usePosts } from "@/hooks/usePosts";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { ClipLoader } from "react-spinners";

const UserView: FC = () => {
  const router = useRouter();
  const { userId } = router.query;
  const { currentUser } = useCurrentUser();
  const { posts, error } = usePosts(userId as string);
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
        <title>User Page</title>
      </Head>
      <main>
        <Header label={`${posts[0].profiles.name}`} />
        <UserHero
          coverImage={posts[0].profiles.cover_image ?? ""}
          profileImage={posts[0].profiles.avatar_url ?? ""}
        />
        <UserBio
          isMine={
            currentUser ? posts[0].profiles?.id === currentUser?.id : false
          }
          name={posts[0].profiles.name ?? ""}
          username={posts[0].profiles.username ?? ""}
          bio={posts[0].profiles.bio ?? ""}
          createdAt={"2023 06"} // TODO:
          isFollowing={false} // TODO:
          followingLength={777} // TODO:
          followersCount={999} // TODO:
          onClickEvent={() => {}} // TODO:
        />
        <PostFeed posts={posts} />
      </main>
    </>
  );
};

export default UserView;
