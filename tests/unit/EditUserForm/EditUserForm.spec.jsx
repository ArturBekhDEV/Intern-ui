import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import EditUserForm from "@/components/EditUserForm/EditUserForm";

const mockedOnSubmit = jest.fn();
const selectorPlaceholder = "Please choose a role";
const userDataMock = [
  { name: "Artur", lastName: "bekh", email: "foo@bar.com", role: "ADMIN" },
];

describe("EditUserForm", () => {
  beforeEach(() => {
    render(<EditUserForm onSubmit={mockedOnSubmit} userData={userDataMock} />);
  });

  it("should render selector options", () => {
    const selector = screen.getByPlaceholderText(
      new RegExp(selectorPlaceholder)
    );
    expect(selector).toBeInTheDocument();
  });

  it("should render with correct autoComplete attribute", () => {
    const fields = screen.getAllByRole("textbox");

    fields.forEach((field) => {
      expect(field).toHaveAttribute("autocomplete", "off");
    });
  });
  it("should display errors and helper text on invalid input", async () => {
    const inputFields = screen.getAllByRole("textbox");

    await userEvent.type(inputFields[2], "invalid-.-email", {
      shouldFinish: true,
    });
    await userEvent.type(inputFields[1], "USER", {
      shouldFinish: true,
    });

    const errorText = screen.getByText(
      "Email format should be like: name@example.com"
    );
    expect(errorText).toBeInTheDocument();
  });
});
