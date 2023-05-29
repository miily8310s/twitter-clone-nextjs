import { FC, MouseEventHandler } from "react";
import { FaFeather } from "react-icons/fa";
import styles from "../styles/components/SidebarTweetButton.module.css";

type SidebarTweetButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const SidebarTweetButton: FC<SidebarTweetButtonProps> = ({
  onClick,
}) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      <div className={styles.icon}>
        <FaFeather size={24} color="white" />
      </div>
      <div className={styles.textWrapper}>
        <p>Tweet</p>
      </div>
    </button>
  );
};
