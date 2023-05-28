import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { Input } from "./Input";
import { FieldValues, Path, useForm } from "react-hook-form";
import { LoginModalInputs } from "../hooks/useLoginModal";
import { RegisterModalInputs } from "../hooks/useRegisterModal";

type StoryInputProps<T> = {
  type?: string;
  label?: string;
  disabled?: boolean;
  placeholder: string;
  regLabel: Path<T>;
};

const StoryInput = <T extends FieldValues>({
  type,
  label,
  disabled,
  placeholder,
  regLabel,
}: StoryInputProps<T>) => {
  const { register } = useForm<T>();
  return (
    <Input<T>
      type={type}
      label={label}
      disabled={disabled}
      register={register}
      placeholder={placeholder}
      regLabel={regLabel}
    />
  );
};

const meta: Meta<typeof Modal> = {
  title: "Example/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default = {
  args: {
    isOpen: true,
    actionLabel: "Resister",
  },
} satisfies Story;

export const Login = {
  args: {
    isOpen: true,
    title: "Login",
    body: (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <StoryInput<LoginModalInputs>
          type="email"
          placeholder="Email"
          regLabel="email"
        />
        <StoryInput<LoginModalInputs>
          type="password"
          placeholder="Password"
          regLabel="password"
        />
      </div>
    ),
    disabled: false,
    actionLabel: "Sign In",
    footer: (
      <div
        style={{ color: "#333333", textAlign: "center", marginTop: "0.5rem" }}
      >
        <p>
          First time using Twitter?{`  `}
          <span style={{ color: "#ffffff", cursor: "pointer" }}>
            Create an account
          </span>
        </p>
      </div>
    ),
  },
} satisfies Story;

export const Register = {
  args: {
    isOpen: true,
    title: "Create an account",
    body: (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <StoryInput<RegisterModalInputs>
          type="email"
          placeholder="Email"
          regLabel="email"
        />
        <StoryInput<RegisterModalInputs> placeholder="Name" regLabel="name" />
        <StoryInput<RegisterModalInputs>
          placeholder="UserName"
          regLabel="username"
        />
        <StoryInput<RegisterModalInputs>
          type="password"
          placeholder="Password"
          regLabel="password"
        />
      </div>
    ),
    disabled: false,
    actionLabel: "Sign In",
    footer: (
      <div
        style={{ color: "#333333", textAlign: "center", marginTop: "0.5rem" }}
      >
        <p>
          Already have an account?{` `}
          <span style={{ color: "#ffffff", cursor: "pointer" }}>Sign up</span>
        </p>
      </div>
    ),
  },
} satisfies Story;
