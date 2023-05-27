import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { FaFeather } from "react-icons/fa";
import styles from "../styles/components/SidebarTweetButton.module.css";
import { useDispatch } from "react-redux";
import { onOpen as onLoginOpen } from "@/slices/loginModalSlice";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export const SidebarTweetButton: FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { currentUser } = useCurrentUser();

  const click = useCallback(() => {
    if (!currentUser) {
      dispatch(onLoginOpen());
    }
    router.push("/");
  }, [currentUser, dispatch, router]);

  return (
    <button className={styles.btn} onClick={click}>
      <div className={styles.icon}>
        <FaFeather size={24} color="white" />
      </div>
      <div className={styles.textWrapper}>
        <p>Tweet</p>
      </div>
    </button>
  );
};
