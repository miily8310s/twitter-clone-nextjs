import { FC, MouseEventHandler } from "react";
import styles from "../styles/components/Button.module.css";

type ButtonProps = {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disable?: boolean;
};

export const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {label}
    </button>
  );
};
