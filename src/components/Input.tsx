import { ChangeEventHandler, FC } from "react";
import styles from "@/styles/components/Input.module.css";

type InputProps = {
  label?: string;
  placeholder: string;
  value: string;
  type?: string;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const Input: FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  disabled,
  onChange,
  label,
}) => {
  return (
    <div className={styles.wrapper}>
      {label && <p className={styles.label}>{label}</p>}
      <input
        className={styles.input}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
