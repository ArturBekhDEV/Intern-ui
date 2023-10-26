import { render, screen } from "@testing-library/react";
import Loader from "@/components/Loader/Loader";

describe("Loader", () => {
  beforeEach(() => {
    render(<Loader />);
  });

  it("should render loader", () => {
    const loader = screen.getByTestId("loader");

    expect(loader).toBeInTheDocument();
  });
});
