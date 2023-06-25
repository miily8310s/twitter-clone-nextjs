import { render } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "./SidebarTweetButton.stories";

const { Default, Phone } = composeStories(stories);

describe("SidebarTweetButton", () => {
  test("default", async () => {
    const { container } = render(<Default />);
    await Default.play({ canvasElement: container });
  });
  test("Disable", async () => {
    const { container } = render(<Phone />);
    await Default.play({ canvasElement: container });
  });
});
