import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Example/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default = {
  args: {
    label: "Click Here",
  },
} satisfies Story;

export const ArrowBack = {
  args: {
    label: "Click Here",
    isBackArrow: true,
  },
} satisfies Story;
