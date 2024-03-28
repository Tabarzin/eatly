import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Text from "../Text";

describe("Text component", () => {
  it("renders text with default type 'p'", () => {
    const { getByText } = render(<Text>Hello, Jest!</Text>);
    const textElement = getByText("Hello, Jest!");
    expect(textElement.tagName).toBe("P");
  });

  it("renders text with specified type", () => {
    const { getByText } = render(<Text type="h2">Hello, Jest!</Text>);
    const textElement = getByText("Hello, Jest!");
    expect(textElement.tagName).toBe("H2");
  });

  it("applies custom styles", () => {
    const customStyle = { color: "red" };
    const { getByText } = render(
      <Text customStyle={customStyle}>Hello, Jest!</Text>
    );
    const textElement = getByText("Hello, Jest!");
    expect(textElement).toHaveStyle(customStyle);
  });

  it("applies custom class name", () => {
    const customClassName = "custom-text";
    const { getByText } = render(
      <Text className={customClassName}>Hello, Jest!</Text>
    );
    const textElement = getByText("Hello, Jest!");
    expect(textElement).toHaveClass(customClassName);
  });
});
