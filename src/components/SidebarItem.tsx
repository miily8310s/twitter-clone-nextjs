import { FC } from "react";
import { IconType } from "react-icons";
import styles from "@/styles/components/SidebarItem.module.css";

type SidebarItemProps = {
  label: string;
  icon: IconType;
  href?: string;
  onClick?: () => void;
  auth?: boolean;
};

export const SidebarItem: FC<SidebarItemProps> = ({ label, icon: Icon }) => {
  return (
    <div className={styles.item}>
      <div className={styles.logo}>
        <Icon width={28} color="white" />
      </div>
      <div className={styles.logo}>
        <Icon width={24} color="white" />
        <p className={styles.label}>{label}</p>
      </div>
    </div>
  );
};
