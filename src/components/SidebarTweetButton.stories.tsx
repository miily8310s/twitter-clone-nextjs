import type { Meta, StoryObj } from "@storybook/react";
import { SidebarTweetButton } from "./SidebarTweetButton";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const meta: Meta<typeof SidebarTweetButton> = {
  title: "Example/Sidebar/SidebarTweetButton",
  component: SidebarTweetButton,
  tags: ["autodocs"],
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
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
type Story = StoryObj<typeof SidebarTweetButton>;

export const Default = {} satisfies Story;

export const Phone = {
  parameters: {
    viewport: {
      defaultViewport: "iphone12",
    },
  },
} satisfies Story;
