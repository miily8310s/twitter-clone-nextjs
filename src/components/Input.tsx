import styles from "../styles/components/Input.module.css";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type InputProps<T extends FieldValues> = {
  label?: string;
  placeholder: string;
  type?: string;
  disabled?: boolean;
  register: UseFormRegister<T>;
  regLabel: Path<T>;
};

export function Input<T extends FieldValues>({
  label,
  type,
  disabled,
  placeholder,
  register,
  regLabel,
}: InputProps<T>) {
  return (
    <div className={styles.wrapper}>
      {label && <p className={styles.label}>{label}</p>}
      <input
        aria-label="text_input"
        className={styles.input}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        {...register(regLabel, { required: true })}
      />
    </div>
  );
}
