import { Header } from "@/components/Header";
import { PostFeed } from "@/components/posts/PostFeed";
import { UserBio } from "@/components/users/UserBio";
import { UserHero } from "@/components/users/UserHero";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useUser } from "@/hooks/useUser";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";

const UserView: FC = () => {
  const router = useRouter();
  const { userId } = router.query;
  const { currentUser } = useCurrentUser();
  const { user, error } = useUser(userId as string);
  if (!user && !error) {
    // TODO: ローディング表示
    return <div></div>;
  }
  if (error && !user) {
    return null;
  }
  return (
    <>
      <Head>
        <title>User Page</title>
      </Head>
      <main>
        <Header label={`${user?.name}`} />
        <UserHero coverImage={""} profileImage={""} />
        <UserBio
          isMine={user?.id === currentUser?.id}
          name={user?.name || ""}
          username={"Guest User"}
          bio={""} // TODO:
          createdAt={"2023 06"} // TODO:
          isFollowing={false} // TODO:
          followingLength={777} // TODO:
          followersCount={999} // TODO:
          onClickEvent={() => {}} // TODO:
        />
        <PostFeed posts={[]} />
      </main>
    </>
  );
};

export default UserView;
