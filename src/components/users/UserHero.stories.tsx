import type { Meta, StoryObj } from "@storybook/react";
import { UserHero } from "./UserHero";

const meta: Meta<typeof UserHero> = {
  title: "Example/Users/UserHero",
  component: UserHero,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof UserHero>;

export const Default: Story = {
  args: {},
};

export const Avatar: Story = {
  args: {
    profileImage:
      "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
  },
};

export const Cover: Story = {
  args: {
    coverImage:
      "https://images.unsplash.com/photo-1685462576399-d3a3c11e3f79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    profileImage:
      "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
  },
};
