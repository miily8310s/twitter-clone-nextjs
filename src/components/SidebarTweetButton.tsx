import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { FaFeather } from "react-icons/fa";
import styles from "@/styles/components/SidebarTweetButton.module.css";

export const SidebarTweetButton: FC = () => {
  const router = useRouter();
  const click = useCallback(() => {
    router.push("/");
  }, [router]);

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
