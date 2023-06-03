import { Header } from "@/components/Header";
import { UserHero } from "@/components/users/UserHero";
import { useUser } from "@/hooks/useUser";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";

const UserView: FC = () => {
  const router = useRouter();
  const { userId } = router.query;
  const { user, error } = useUser(userId as string);
  if (!user && !error) {
    // TODO: ローディング表示
    return <div></div>;
  }
  if (error) {
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
      </main>
    </>
  );
};

export default UserView;
