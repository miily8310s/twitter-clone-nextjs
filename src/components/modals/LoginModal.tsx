import { FC, ReactElement, useCallback } from "react";
import { Modal } from "../Modal";
import { Input } from "../Input";

export const LoginModal: FC = () => {
  const onSubmit = useCallback(() => {}, []);

  const bodyContent = (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Input
        type="email"
        placeholder="Email"
        value=""
        disabled={false}
        onChange={() => {}}
      />
      <Input
        type="password"
        placeholder="Password"
        value=""
        disabled={false}
        onChange={() => {}}
      />
    </div>
  ) satisfies ReactElement;

  const footerContent = (
    <div style={{ color: "#333333", textAlign: "center", marginTop: "0.5rem" }}>
      <p>
        First time using Twitter?
        <span style={{ color: "#ffffff", cursor: "pointer" }}>
          Create an account
        </span>
      </p>
    </div>
  ) satisfies ReactElement;

  return (
    <Modal
      title="Login"
      actionLabel="Sign in"
      body={bodyContent}
      footer={footerContent}
      onSubmit={onSubmit}
      onClose={() => {}}
    />
  );
};
