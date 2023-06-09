import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import { userEvent, within } from "@storybook/testing-library";

const meta: Meta<typeof Avatar> = {
  title: "Example/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const avatarElement = canvas.getByAltText("Avatar image");
    await userEvent.click(avatarElement);
  },
};

export const WithImage: Story = {
  args: {
    imageUrl:
      "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const avatarElement = canvas.getByAltText("Avatar image");
    await userEvent.click(avatarElement);
  },
};

export const Bordered: Story = {
  args: {
    imageUrl:
      "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
    hasBorder: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const avatarElement = canvas.getByAltText("Avatar image");
    await userEvent.click(avatarElement);
  },
};

export const Large: Story = {
  args: {
    imageUrl:
      "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
    isLarge: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const avatarElement = canvas.getByAltText("Avatar image");
    await userEvent.click(avatarElement);
  },
};
