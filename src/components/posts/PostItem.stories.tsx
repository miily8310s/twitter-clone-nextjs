import type { Meta, StoryObj } from "@storybook/react";
import { PostItem } from "./PostItem";
import { userEvent, within } from "@storybook/testing-library";
import { expect, jest } from "@storybook/jest";

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
    isLiked: false,
    post: {
      id: 111,
      created_at: "test_date",
      body: "test post1",
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
    await expect(canvas.getByLabelText("like_icon_white")).toBeInTheDocument();
    await userEvent.click(canvas.getByLabelText("Body"));
    await expect(push).lastCalledWith("/posts/111");
  },
};

export const Liked: Story = {
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
    isLiked: true,
    post: {
      id: 111,
      created_at: "test_date",
      body: "test post1",
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
    await expect(canvas.getByLabelText("like_icon_red")).toBeInTheDocument();
    await userEvent.click(canvas.getByLabelText("UserLink"));
    await expect(push).lastCalledWith("users/test_id_1");
  },
};
