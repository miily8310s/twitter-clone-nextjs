import { render } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "./Input.stories";

const { Default, Disable } = composeStories(stories);

describe("Input", () => {
  test("default", async () => {
    const { container } = render(<Default />);
    await Default.play({ canvasElement: container });
  });
  test("Disable", async () => {
    const { container } = render(<Disable />);
    await Default.play({ canvasElement: container });
  });
});
