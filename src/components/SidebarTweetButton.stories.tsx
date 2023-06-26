import type { Meta, StoryObj } from "@storybook/react";
import { SidebarTweetButton } from "./SidebarTweetButton";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { userEvent, within } from "@storybook/testing-library";

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

export const Default = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const logoElement = canvas.getByLabelText("back_to_top");
    await userEvent.click(logoElement);
  },
} satisfies Story;

export const Phone = {
  parameters: {
    viewport: {
      defaultViewport: "iphone12",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const logoElement = canvas.getByLabelText("back_to_top");
    await userEvent.click(logoElement);
  },
} satisfies Story;
