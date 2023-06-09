import { FC, MouseEventHandler } from "react";
import { IconType } from "react-icons";
import styles from "../styles/components/SidebarItem.module.css";

type SidebarItemProps = {
  label: string;
  icon: IconType;
  onClick?: MouseEventHandler<HTMLDivElement>;
  auth?: boolean;
};

export const SidebarItem: FC<SidebarItemProps> = ({
  label,
  icon: Icon,
  onClick,
}) => {
  return (
    <div
      role="link"
      aria-label={`${label}_link`}
      className={styles.item}
      onClick={onClick}
    >
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
