import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";
import styles from "../styles/components/Header.module.css";

type HeaderProps = {
  label: string;
  isBackArrow?: boolean;
};

export const Header: FC<HeaderProps> = ({ label, isBackArrow }) => {
  const router = useRouter();
  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className={styles.wrapper} aria-label="header">
      <div className={styles.contents}>
        {isBackArrow && (
          <BiArrowBack
            aria-label="arrow_icon"
            color="white"
            size={20}
            onClick={handleBack}
            className={styles.backButton}
          />
        )}
        <h1 className={styles.labelText}>{label}</h1>
      </div>
    </div>
  );
};
