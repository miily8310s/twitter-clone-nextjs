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

  const onBioClick = useCallback(() => {
    if (user?.id === currentUser?.id) {
      dispatch(onEditOpen());
    } else {
    }
  }, [currentUser?.id, dispatch, user?.id]);

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
          isFollowing={false} // TODO:
          followingLength={777} // TODO:
          followersCount={999} // TODO:
          onClickEvent={onBioClick}
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
