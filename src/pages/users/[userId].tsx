import { Header } from "@/components/Header";
import { PostFeed } from "@/components/posts/PostFeed";
import { UserBio } from "@/components/users/UserBio";
import { UserHero } from "@/components/users/UserHero";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useLikes } from "@/hooks/useLikes";
import { usePosts } from "@/hooks/usePosts";
import { useUser } from "@/hooks/useUser";
import Head from "next/head";
import { FC, useCallback } from "react";
import { ClipLoader } from "react-spinners";
import { onOpen as onEditOpen } from "../../slices/editModalSlice";
import { useDispatch } from "react-redux";
import { GetServerSideProps } from "next";
import { setFollow, useFollows } from "@/hooks/useFollows";

type UserViewProps = {
  userId: string | string[] | undefined;
};

const UserView: FC<UserViewProps> = (props) => {
  const dispatch = useDispatch();
  const { userId } = props;
  const { currentUser } = useCurrentUser();
  const { user } = useUser(userId as string);
  const { posts, error } = usePosts(userId as string);
  const { likes } = useLikes(userId as string);
  const { followerNum, followerUsers } = useFollows(userId as string);

  const onBioClick = useCallback(() => {
    dispatch(onEditOpen());
  }, [dispatch]);

  const onFollowClick = useCallback(async () => {
    if (currentUser && user) {
      await setFollow(currentUser.id, user.id);
    }
  }, [currentUser, user]);

  if (!user) {
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
        <Header label={`${user.name}`} />
        <UserHero
          coverImage={user.cover_image ?? ""}
          profileImage={user.avatar_url ?? ""}
        />
        <UserBio
          isMine={currentUser ? user?.id === currentUser?.id : false}
          name={user.name ?? ""}
          username={user.username ?? ""}
          bio={user.bio ?? ""}
          createdAt={user.created_at ?? ""}
          isFollowing={
            currentUser ? followerUsers.includes(currentUser.id) : false
          }
          followersCount={followerNum}
          onClickEvent={onBioClick}
          onFollowEvent={onFollowClick}
        />
        <PostFeed
          posts={posts ?? []}
          currentUserId={userId as string}
          likes={likes}
        />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userId } = context.query;
  return { props: { userId } };
};

export default UserView;
