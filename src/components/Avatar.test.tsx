import { render } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "./Avater.stories";

const { Default, WithImage, Bordered, Large } = composeStories(stories);

describe("Avatar", () => {
  test("Default", async () => {
    const { container } = render(<Default />);
    await Default.play({ canvasElement: container });
  });
  test("WithImage", async () => {
    const { container } = render(<WithImage />);
    await Default.play({ canvasElement: container });
  });
  test("Bordered", async () => {
    const { container } = render(<Bordered />);
    await Default.play({ canvasElement: container });
  });
  test("Large", async () => {
    const { container } = render(<Large />);
    await Default.play({ canvasElement: container });
  });
});
