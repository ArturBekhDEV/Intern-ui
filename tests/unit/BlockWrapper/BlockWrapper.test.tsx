import BlockWrapper from "@/components/BlockWrapper/BlockWrapper";
import { render, screen } from "@testing-library/react";

const mockedChildren = <div>children</div>;

describe("BlockWrapper", () => {
  beforeEach(() => {
    render(<BlockWrapper children={mockedChildren} />);
  });

  it("should render children", () => {
    const children = screen.getByText("children");

    expect(children).toBeInTheDocument();
  });
});
