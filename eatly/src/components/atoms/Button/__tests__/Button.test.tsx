import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Button from "../Button";

describe("Button component", () => {
  test("renders primary button properly", () => {
    const { getByText } = render(
      <Button type="primary">Primary Button</Button>
    );

    const buttonElement = getByText("Primary Button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders secondary button properly", () => {
    const { getByText } = render(
      <Button type="secondary">Secondary Button</Button>
    );

    const buttonElement = getByText("Secondary Button");
    expect(buttonElement).toBeInTheDocument();
  });
});
