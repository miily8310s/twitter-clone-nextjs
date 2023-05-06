import { useRouter } from "next/router";
import { FC } from "react";
import { BsTwitter } from "react-icons/bs";
import styles from "@/styles/components/SidebarLogo.module.css";

export const SidebarLogo: FC = () => {
  const router = useRouter();
  return (
    <button className={styles.logo} onClick={() => router.push("/")}>
      <BsTwitter size={28} color="white" />
    </button>
  );
};
