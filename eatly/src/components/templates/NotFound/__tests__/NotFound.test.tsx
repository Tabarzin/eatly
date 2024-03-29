import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import NotFound from "../NotFound";

describe("NotFound component", () => {
  test("renders correctly", () => {
    const { getByAltText, getByText } = render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    expect(getByAltText("Page Not Found")).toBeInTheDocument();
    expect(getByText("Go Home")).toBeInTheDocument();
    expect(getByText("Image by")).toBeInTheDocument();
    expect(getByText("Freepik")).toBeInTheDocument();
  });

  test("redirects to home page when Go Home button is clicked", () => {
    const { getByText } = render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    fireEvent.click(getByText("Go Home"));
    expect(window.location.pathname).toBe("/");
  });
});
