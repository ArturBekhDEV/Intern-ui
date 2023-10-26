import PageWrapper from "@/components/PageWrapper/PageWrapper";
import { render, screen } from "@testing-library/react";

const mockedChildren = <div>children</div>;

describe("PageWrapper", () => {
  beforeEach(() => {
    render(<PageWrapper children={mockedChildren} />);
  });

  it("should render children", () => {
    const children = screen.getByText("children");

    expect(children).toBeInTheDocument();
  });
});
