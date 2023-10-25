import { render, screen } from "@testing-library/react";
import Loader from "@/components/Loader/Loader";

describe("Loader", () => {
  beforeEach(() => {
    render(<Loader />);
  });

  it("renders all inputs properly", () => {
    const loader = screen.getByTestId("loader");

    expect(loader).toBeInTheDocument();
  });
});
