import { render, screen } from "@testing-library/react";
import NewUserForm from "@/components/NewUserForm/NewUserForm";

const mockedOnSubmit = jest.fn();
const selectorPlaceholder = "Please choose a role";

describe("NewUserForm", () => {
  beforeEach(() => {
    render(<NewUserForm onSubmit={mockedOnSubmit} />);
  });

  it("should render selector options", () => {
    const selector = screen.getByPlaceholderText(
      new RegExp(selectorPlaceholder)
    );
    expect(selector).toBeInTheDocument();
  });
});
