import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { Input } from "./Input";

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
        <Input
          type="email"
          placeholder="Email"
          value=""
          disabled={false}
          onChange={() => {}}
        />
        <Input
          placeholder="Name"
          value=""
          disabled={false}
          onChange={() => {}}
        />
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
