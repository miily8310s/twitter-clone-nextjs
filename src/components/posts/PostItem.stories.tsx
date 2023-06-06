import type { Meta, StoryObj } from "@storybook/react";
import { PostItem } from "./PostItem";

const meta: Meta<typeof PostItem> = {
  title: "Example/Posts/PostItem",
  component: PostItem,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "1.54rem", backgroundColor: "#333333" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PostItem>;

export const Default: Story = {
  args: {
    isLiked: false,
    post: {
      body: "test post",
      user: {
        id: "test_id",
        name: "Guest User",
        username: "guest_user",
        email: "test@gmail.com",
        avatar_url:
          "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
        cover_image: "",
        bio: "",
        followingIds: [],
      },
    },
  },
};

export const Liked: Story = {
  args: {
    isLiked: true,
    post: {
      body: "test post",
      user: {
        id: "test_id",
        name: "Guest User",
        username: "guest_user",
        email: "test@gmail.com",
        avatar_url:
          "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
        cover_image: "",
        bio: "",
        followingIds: [],
      },
    },
  },
};
