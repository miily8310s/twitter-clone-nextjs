import { render } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "./SidebarItem.stories";

const { Default, Profile, Phone } = composeStories(stories);

describe("SidebarItem", () => {
  test("default", async () => {
    const { container } = render(<Default />);
    await Default.play({ canvasElement: container });
  });
  test("Profile", async () => {
    const { container } = render(<Profile />);
    await Profile.play({ canvasElement: container });
  });
  test("Phone", async () => {
    const { container } = render(<Phone />);
    await Default.play({ canvasElement: container });
  });
});
