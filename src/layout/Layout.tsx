import { FC, ReactNode } from "react";
import styles from "../styles/Layout.module.css";
import { Sidebar } from "../components/Sidebar";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <Sidebar />
          <div className={styles.child}>{children}</div>
        </div>
      </div>
    </div>
  );
};
