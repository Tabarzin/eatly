import { render } from "@testing-library/react";
import PurchasesCard from "../PurchasesCard";
import "@testing-library/jest-dom";

describe("PurchasesCard component", () => {
  const props = {
    imageSrc: "image.jpg",
    title: "Sample Purchase",
    status: "Pending",
    time: "10:00 AM",
  };

  test("renders properly with provided props", () => {
    const { getByAltText, getByText } = render(<PurchasesCard {...props} />);

    const imageElement = getByAltText("Purchase");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", props.imageSrc);

    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText(props.status)).toBeInTheDocument();
    expect(getByText(props.time)).toBeInTheDocument();
  });
});
