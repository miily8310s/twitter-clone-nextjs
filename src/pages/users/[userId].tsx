import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/router";
import { FC } from "react";

const UserView: FC = () => {
  const router = useRouter();
  const { userId } = router.query;
  const { user, error } = useUser(userId as string);
  if (!!user) {
    // TODO: ローディング表示
  }
  if (error) {
    return null;
  }
  return <div>[userId]</div>;
};

export default UserView;
