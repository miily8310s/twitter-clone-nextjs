import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Click Here",
    onClick: () => {},
  },
};

export const Disabled: Story = {
  args: {
    label: "No Click",
    onClick: () => {},
    disable: true,
  },
};

export const Large: Story = {
  args: {
    label: "Click here",
    onClick: () => {},
    disable: true,
    large: true,
  },
};

export const Blacked: Story = {
  args: {
    label: "Click here",
    onClick: () => {},
    blacked: true,
    large: true,
  },
};
