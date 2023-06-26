import type { Meta, StoryObj } from "@storybook/react";
import { UserBio } from "./UserBio";
import { userEvent, within } from "@storybook/testing-library";
import { expect, jest } from "@storybook/jest";

const meta: Meta<typeof UserBio> = {
  title: "Example/Users/UserBio",
  component: UserBio,
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
type Story = StoryObj<typeof UserBio>;

export const Default: Story = {
  args: {
    isMine: false,
    name: "Guest User",
    username: "Guest User",
    bio: "test biography",
    createdAt: "2023 06",
    isFollowing: false,
    followersCount: 999,
    onClickEvent: jest.fn(),
    onFollowEvent: jest.fn(),
  },
  play: async ({ canvasElement, args: { onClickEvent, onFollowEvent } }) => {
    const canvas = within(canvasElement);
    const followElement = canvas.getByText("Follow");
    await expect(followElement).toBeInTheDocument();
    await userEvent.click(followElement);
    await expect(onClickEvent).not.toBeCalled();
    await expect(onFollowEvent).toBeCalled();
  },
};

export const FollowUser: Story = {
  args: {
    isMine: false,
    name: "Followed Guest User",
    username: "Followed Guest User",
    bio: "test biography",
    createdAt: "2023 06",
    isFollowing: true,
    followersCount: 999,
    onClickEvent: jest.fn(),
    onFollowEvent: jest.fn(),
  },
  play: async ({ canvasElement, args: { onClickEvent, onFollowEvent } }) => {
    const canvas = within(canvasElement);
    const followElement = canvas.getByText("UnFollowing");
    await expect(followElement).toBeInTheDocument();
    await userEvent.click(followElement);
    await expect(onClickEvent).not.toBeCalled();
    await expect(onFollowEvent).not.toBeCalled();
  },
};

export const MyPage: Story = {
  args: {
    isMine: true,
    name: "John Doe",
    username: "John Doe",
    bio: "test biography",
    createdAt: "2023 06",
    isFollowing: false,
    followersCount: 999,
    onClickEvent: jest.fn(),
    onFollowEvent: jest.fn(),
  },
  play: async ({ canvasElement, args: { onClickEvent, onFollowEvent } }) => {
    const canvas = within(canvasElement);
    const followElement = canvas.getByText("Edit");
    await expect(followElement).toBeInTheDocument();
    await userEvent.click(followElement);
    await expect(onClickEvent).toBeCalled();
    await expect(onFollowEvent).not.toBeCalled();
  },
};
