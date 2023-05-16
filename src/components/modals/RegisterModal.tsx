import { FC, ReactElement, useCallback } from "react";
import { Modal } from "../Modal";
import { Input } from "../Input";

export const RegisterModal: FC = () => {
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
      <Input placeholder="Name" value="" disabled={false} onChange={() => {}} />
      <Input
        placeholder="UserName"
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
      <p>Already have an account?</p>
      <span style={{ color: "#ffffff", cursor: "pointer" }}>Sign up</span>
    </div>
  ) satisfies ReactElement;

  return (
    <Modal
      title="Create an account"
      actionLabel="Register"
      body={bodyContent}
      footer={footerContent}
      onSubmit={onSubmit}
      onClose={() => {}}
    />
  );
};
