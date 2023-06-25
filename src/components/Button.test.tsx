import { render } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "./Button.stories";

const { Default, Disabled } = composeStories(stories);

describe("Button", () => {
  test("default", async () => {
    const { container } = render(<Default />);
    await Default.play({ canvasElement: container });
  });
  test("default", async () => {
    const { container } = render(<Disabled />);
    await Disabled.play({ canvasElement: container });
  });
});
