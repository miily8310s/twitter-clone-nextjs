import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { Sidebar } from "./Sidebar";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Provider } from "react-redux";
import { store } from "../libs/store";

const meta: Meta<typeof Modal> = {
  title: "Example/Sidebar/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <div style={{ padding: "1.54rem", backgroundColor: "#333333" }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default = {} satisfies Story;

export const WildPhone = {
  parameters: {
    viewport: {
      defaultViewport: "pixel",
    },
  },
} satisfies Story;

export const Phone = {
  parameters: {
    viewport: {
      defaultViewport: "iphone12",
    },
  },
} satisfies Story;
