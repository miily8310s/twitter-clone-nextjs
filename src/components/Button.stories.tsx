import type { Meta, StoryObj } from "@storybook/react";
import { expect, jest } from "@storybook/jest";
import { Button } from "./Button";
import { userEvent, within } from "@storybook/testing-library";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Click Here",
    onClick: jest.fn(),
  },
  play: async ({ canvasElement, args: { onClick } }) => {
    const canvas = within(canvasElement);
    const buttonElement = canvas.getByText("Click Here");
    await userEvent.click(buttonElement);
    await expect(onClick).toBeCalled();
  },
};

export const Disabled: Story = {
  args: {
    label: "No Click",
    onClick: jest.fn(),
    disable: true,
  },
  play: async ({ canvasElement, args: { onClick } }) => {
    const canvas = within(canvasElement);
    const buttonElement = canvas.getByText("No Click");
    await userEvent.click(buttonElement);
    await expect(onClick).toBeCalled();
  },
};

export const Large: Story = {
  args: {
    label: "Click here",
    onClick: () => {},
    disable: true,
    large: true,
  },
};

export const Blacked: Story = {
  args: {
    label: "Click here",
    onClick: () => {},
    blacked: true,
    large: true,
  },
};
