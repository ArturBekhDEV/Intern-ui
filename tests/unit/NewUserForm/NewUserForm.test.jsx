import { render, screen } from "@testing-library/react";
import NewUserForm from "@/components/NewUserForm/NewUserForm";

const mockedOnSubmit = jest.fn();

describe("NewUserForm", () => {
  beforeEach(() => {
    render(<NewUserForm onSubmit={mockedOnSubmit} />);
  });

  it("should render selector options", () => {
    const selectors = screen.getAllByTestId("selector");

    expect(selectors.length).toBeGreaterThanOrEqual(2)
  });
});
