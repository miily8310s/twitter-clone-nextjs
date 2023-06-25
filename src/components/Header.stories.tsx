import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { Header } from "./Header";
import { jest } from "@storybook/jest";

const meta: Meta<typeof Header> = {
  title: "Example/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default = {
  args: {
    label: "Click Here",
  },
} satisfies Story;

export const ArrowBack = {
  args: {
    label: "Click Here",
    isBackArrow: true,
  },
  parameters: {
    nextRouter: {
      back: jest.fn(),
    },
  },
  play: async ({
    canvasElement,
    parameters: {
      nextRouter: { back },
    },
  }) => {
    const canvas = within(canvasElement);
    const arrowElement = canvas.getByLabelText("arrow_icon");
    await userEvent.click(arrowElement);
  },
} satisfies Story;
