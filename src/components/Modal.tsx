import React, { FC, ReactElement, useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styles from "../styles/components/Modal.module.css";
import { Button } from "./Button";

type ModalProps = {
  isOpen?: boolean;
  onSubmit: () => void;
  onClose: () => void;
  title?: string;
  body?: ReactElement;
  footer?: ReactElement;
  actionLabel: string;
  disabled?: boolean;
};

export const Modal: FC<ModalProps> = ({
  disabled,
  onClose,
  onSubmit,
  isOpen,
  title,
  body,
  footer,
  actionLabel,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    onClose();
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  if (!isOpen) {
    return null;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.contents}>
          <div className={styles.header}>
            <h2 className={styles.headerText}>{title}</h2>
            <button className={styles.headerClose} onClick={handleClose}>
              <AiOutlineClose size={20} />
            </button>
          </div>
          <div className={styles.main}>{body}</div>
          <div className={styles.footer}>
            <Button
              disable={disabled}
              label={actionLabel}
              blacked
              large
              onClick={handleSubmit}
            />
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
};
