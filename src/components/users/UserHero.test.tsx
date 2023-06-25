import { render } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "./UserHero.stories";

const { Default, Avatar, Cover } = composeStories(stories);

describe("UserHero", () => {
  test("Default", async () => {
    const { container } = render(<Default />);
    await Default.play({ canvasElement: container });
  });
  test("Avatar", async () => {
    const { container } = render(<Avatar />);
    await Default.play({ canvasElement: container });
  });
  test("Cover", async () => {
    const { container } = render(<Cover />);
    await Cover.play({ canvasElement: container });
  });
});
