import { render, screen } from "@testing-library/react";
import Loader from "@/components/Loader/Loader";

describe("Loader", () => {
  it("should render loader", () => {
    render(<Loader />);
    const loader = screen.getByTestId("loader");

    expect(loader).toBeInTheDocument();
  });
});
