import { FC, ReactElement } from "react";
import { Modal } from "../Modal";
import { Input } from "../Input";
import { LoginModalInputs, useLoginModal } from "../../hooks/useLoginModal";

export const LoginModal: FC = () => {
  const { register, errors, onSubmit, onClose, onSwitch, isLoginOpen } =
    useLoginModal();

  const bodyContent = (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Input<LoginModalInputs>
        register={register}
        type="email"
        placeholder="Email"
        disabled={false}
        regLabel="email"
      />
      {errors.email && (
        <p style={{ color: "#bf1650" }}>*This field is required</p>
      )}
      <Input<LoginModalInputs>
        register={register}
        type="password"
        placeholder="Password"
        disabled={false}
        regLabel="password"
      />
      {errors.password && (
        <p style={{ color: "#bf1650" }}>*This field is required</p>
      )}
    </div>
  ) satisfies ReactElement;

  const footerContent = (
    <div style={{ color: "#333333", textAlign: "center", marginTop: "0.5rem" }}>
      <p>
        First time using Twitter?
        <span
          style={{ color: "#ffffff", cursor: "pointer" }}
          onClick={onSwitch}
        >
          Create an account
        </span>
      </p>
    </div>
  ) satisfies ReactElement;

  return (
    <Modal
      isOpen={isLoginOpen}
      title="Login"
      actionLabel="Sign in"
      body={bodyContent}
      footer={footerContent}
      onSubmit={onSubmit}
      onClose={onClose}
    />
  );
};
