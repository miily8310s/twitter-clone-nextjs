import { FC, ReactElement, useCallback } from "react";
import { Modal } from "../Modal";
import { Input } from "../Input";
import { useRegisterModal } from "@/hooks/useRegisterModal";

export const RegisterModal: FC = () => {
  const { register, isRegisterOpen, onSubmit, onClose, onSwitchLogin } =
    useRegisterModal();

  const bodyContent = (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Input
        type="email"
        placeholder="Email"
        register={register}
        regLabel="email"
        disabled={false}
      />
      <Input
        placeholder="Name"
        register={register}
        regLabel="name"
        disabled={false}
      />
      <Input
        placeholder="UserName"
        register={register}
        regLabel="username"
        disabled={false}
      />
      <Input
        type="password"
        placeholder="Password"
        register={register}
        regLabel="password"
        disabled={false}
      />
    </div>
  ) satisfies ReactElement;

  const footerContent = (
    <div style={{ color: "#333333", textAlign: "center", marginTop: "0.5rem" }}>
      <p>Already have an account?</p>
      <span
        style={{ color: "#ffffff", cursor: "pointer" }}
        onClick={onSwitchLogin}
      >
        Sign In
      </span>
    </div>
  ) satisfies ReactElement;

  return (
    <Modal
      isOpen={isRegisterOpen}
      title="Create an account"
      actionLabel="Register"
      body={bodyContent}
      footer={footerContent}
      onSubmit={onSubmit}
      onClose={onClose}
    />
  );
};
