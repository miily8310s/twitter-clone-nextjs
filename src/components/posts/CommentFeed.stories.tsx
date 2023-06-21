import type { Meta, StoryObj } from "@storybook/react";
import { CommentFeed } from "./CommentFeed";

const meta: Meta<typeof CommentFeed> = {
  title: "Example/Posts/CommentFeed",
  component: CommentFeed,
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
type Story = StoryObj<typeof CommentFeed>;

export const Default: Story = {
  args: {
    comments: [
      {
        id: 111,
        created_at: "test_date",
        body: "test comment1",
        profiles: {
          id: "test_id_1",
          name: "Guest User",
          username: "guest_user",
          email: "test@gmail.com",
          avatar_url:
            "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
          cover_image: "",
          bio: "",
          followingIds: [],
          created_at: "",
        },
      },
      {
        id: 222,
        created_at: "test_date2",
        body: "test comment2",
        profiles: {
          id: "test_id_2",
          name: "Guest User",
          username: "guest_user",
          email: "test@gmail.com",
          avatar_url:
            "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
          cover_image: "",
          bio: "",
          followingIds: [],
          created_at: "",
        },
      },
    ],
  },
};
