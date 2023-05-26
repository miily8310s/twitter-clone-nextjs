import { FC } from "react";
import { IconType } from "react-icons";
import styles from "../styles/components/SidebarItem.module.css";

type SidebarItemProps = {
  label: string;
  icon: IconType;
  href?: string;
  onClick?: () => void;
  auth?: boolean;
};

export const SidebarItem: FC<SidebarItemProps> = ({
  label,
  icon: Icon,
  onClick,
}) => {
  return (
    <div className={styles.item} onClick={onClick}>
      <div className={styles.onlyLogo}>
        <Icon size={28} color="white" />
      </div>
      <div className={styles.logo}>
        <Icon size={24} color="white" />
        <p className={styles.label}>{label}</p>
      </div>
    </div>
  );
};
