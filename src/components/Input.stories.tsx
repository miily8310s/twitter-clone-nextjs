import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

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
  args: {
    placeholder: "Username",
    value: "",
  },
} satisfies Story;

export const Disable = {
  args: {
    placeholder: "Username",
    value: "",
    disabled: true,
  },
} satisfies Story;

export const Labeled = {
  args: {
    label: "user",
    placeholder: "Username",
    value: "",
  },
} satisfies Story;

export const Password = {
  args: {
    type: "password",
    placeholder: "Password",
    value: "",
  },
} satisfies Story;

export const Email = {
  args: {
    type: "email",
    placeholder: "Email",
    value: "",
  },
} satisfies Story;
