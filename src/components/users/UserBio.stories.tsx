import type { Meta, StoryObj } from "@storybook/react";
import { UserBio } from "./UserBio";

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
    onClickEvent: () => {},
    onFollowEvent: () => {},
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
    onClickEvent: () => {},
    onFollowEvent: () => {},
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
    onClickEvent: () => {},
    onFollowEvent: () => {},
  },
};
