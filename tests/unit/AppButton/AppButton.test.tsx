import AppButton from "@/components/AppButton/AppButton";
import { render, screen } from "@testing-library/react";

const mockedChildren = <div>children</div>;

describe("AppButton", () => {
  beforeEach(() => {
    render(<AppButton children={mockedChildren} />);
  });

  it("should render children", () => {
    const children = screen.getByText("children");

    expect(children).toBeInTheDocument();
  });
});
