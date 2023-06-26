import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { SidebarLogo } from "./SidebarLogo";
import { userEvent, within } from "@storybook/testing-library";
import { expect, jest } from "@storybook/jest";

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

export const Default = {
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
  play: async ({
    canvasElement,
    parameters: {
      nextjs: {
        router: { push },
      },
    },
  }) => {
    const canvas = within(canvasElement);
    const logoElement = canvas.getByLabelText("back_to_top");
    await userEvent.click(logoElement);
    await expect(push).lastCalledWith("/");
  },
} satisfies Story;
