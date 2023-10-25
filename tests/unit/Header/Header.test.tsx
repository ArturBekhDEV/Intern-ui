import Header from "@/components/Header/Header";
import { render, screen } from "@testing-library/react";

const mockedChildren = <div>children</div>;

describe("Header", () => {
  beforeEach(() => {
    render(<Header children={mockedChildren} contentMaxWidth="lg" />);
  });

  it("should render children", () => {
    const children = screen.getByText("children");

    expect(children).toBeInTheDocument();
  });
});
