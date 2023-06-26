import type { Meta, StoryObj } from "@storybook/react";
import { CommentItem } from "./CommentItem";
import { userEvent, within } from "@storybook/testing-library";
import { expect, jest } from "@storybook/jest";

const meta: Meta<typeof CommentItem> = {
  title: "Example/Posts/CommentItem",
  component: CommentItem,
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
type Story = StoryObj<typeof CommentItem>;

export const Default: Story = {
  parameters: {
    nextjs: {
      router: {
        path: "/some-default-path",
        asPath: "/some-default-path",
        query: {},
        push: jest.fn(),
      },
    },
  },
  args: {
    comment: {
      id: 111,
      created_at: "test_date",
      body: "test reply1",
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
  },
  play: async ({
    canvasElement,
    parameters: {
      nextjs: {
        router: { push },
      },
    },
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByLabelText("user_name"));
    await expect(push).lastCalledWith("users/test_id_1");
  },
};
