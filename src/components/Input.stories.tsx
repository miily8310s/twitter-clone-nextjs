import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { Path, useForm } from "react-hook-form";
import { RegisterModalInputs } from "../hooks/useRegisterModal";
import { FC } from "react";

type StoryInputProps = {
  type?: string;
  label?: string;
  disabled?: boolean;
  placeholder: string;
  regLabel: Path<RegisterModalInputs>;
};

const StoryInput: FC<StoryInputProps> = ({
  type,
  label,
  disabled,
  placeholder,
  regLabel,
}) => {
  const { register } = useForm<RegisterModalInputs>();
  return (
    <Input<RegisterModalInputs>
      type={type}
      label={label}
      disabled={disabled}
      register={register}
      placeholder={placeholder}
      regLabel={regLabel}
    />
  );
};

const meta: Meta<typeof Input> = {
  title: "Example/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "2rem", backgroundColor: "#333333" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default = {
  render: () => {
    return <StoryInput placeholder="name" regLabel="name" />;
  },
} satisfies Story;

export const Valued = {
  render: () => {
    return <StoryInput placeholder="Username" regLabel="username" />;
  },
} satisfies Story;

export const Disable = {
  render: () => {
    return (
      <StoryInput placeholder="Username" regLabel="username" disabled={true} />
    );
  },
} satisfies Story;

export const Labeled = {
  render: () => {
    return (
      <StoryInput placeholder="Username" regLabel="username" label="user" />
    );
  },
} satisfies Story;

export const Password = {
  render: () => {
    return (
      <StoryInput type="password" placeholder="Password" regLabel="password" />
    );
  },
} satisfies Story;

export const Email = {
  render: () => {
    return <StoryInput type="email" placeholder="Email" regLabel="email" />;
  },
} satisfies Story;
