import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "./Header.stories";

const { Default, ArrowBack } = composeStories(stories);

jest.mock("next/router", () => {
  const router = jest.requireActual("next/router");
  return {
    ...router,
    useRouter: jest.fn(),
  };
});

describe("Header", () => {
  test("default", () => {
    render(<Default />);
    const headerElement = screen.getByLabelText("header");
    const labelElement = screen.getByText("Click Here");
    expect(headerElement).not.toBeNull();
    expect(labelElement).not.toBeNull();
  });
  test("arrow back", async () => {
    render(<ArrowBack />);
    const headerElement = screen.getByLabelText("header");
    const labelElement = screen.getByText("Click Here");
    const iconElement = screen.getByLabelText("arrow_icon");
    expect(headerElement).not.toBeNull();
    expect(labelElement).not.toBeNull();
    expect(iconElement).not.toBeNull();
  });
});
