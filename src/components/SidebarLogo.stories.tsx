import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { SidebarLogo } from "./SidebarLogo";

const meta: Meta<typeof Modal> = {
  title: "Example/Sidebar/SidebarLogo",
  component: SidebarLogo,
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
type Story = StoryObj<typeof Modal>;

export const Default = {} satisfies Story;
