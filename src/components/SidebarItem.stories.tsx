import type { Meta, StoryObj } from "@storybook/react";
import { SidebarItem } from "./SidebarItem";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { BsHouseFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const meta: Meta<typeof SidebarItem> = {
  title: "Example/Sidebar/SidebarItem",
  component: SidebarItem,
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
type Story = StoryObj<typeof SidebarItem>;

export const Default = {
  args: {
    icon: BsHouseFill,
    label: "Home",
    href: "/",
  },
} satisfies Story;

export const Profile = {
  args: {
    icon: FaUser,
    label: "Profile",
  },
} satisfies Story;

export const Phone = {
  args: {
    icon: BsHouseFill,
    label: "Home",
  },
  parameters: {
    viewport: {
      defaultViewport: "iphone12",
    },
  },
} satisfies Story;
