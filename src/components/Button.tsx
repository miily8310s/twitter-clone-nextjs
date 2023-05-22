import { FC, MouseEventHandler } from "react";
import styles from "../styles/components/Button.module.css";

type ButtonProps = {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  blacked?: boolean;
  large?: boolean;
  disable?: boolean;
};

export const Button: FC<ButtonProps> = ({ label, blacked, large, onClick }) => {
  return (
    <button
      className={`${styles.btn} ${blacked && styles.black} ${
        large && styles.large
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
