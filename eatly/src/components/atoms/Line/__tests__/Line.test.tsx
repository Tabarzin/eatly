import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Line from "../Line";

describe("Line component", () => {
  it("renders a line", () => {
    const { container } = render(<Line />);
    const lineElement = container.querySelector("hr");
    expect(lineElement).toBeInTheDocument();
  });
});
