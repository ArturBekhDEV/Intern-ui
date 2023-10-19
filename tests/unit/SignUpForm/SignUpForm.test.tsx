import SignUpForm from "@/components/SignUpForm/SignUpForm";
import { inputs } from "@/components/SignUpForm/SignUpForm.constants";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";

const btnTestId = "submit-btn";

const mockedInputCorrectValues: Record<string, string> = {
  firstName: "Testing",
  lastName: "Testing",
  email: "test@example.com",
  password: "SomeTest1!",
  confirmPassword: "SomeTest1!",
};
const inputsPlaceholders = inputs.map((i) => i.placeholder);

describe("SignUpForm", () => {
  beforeEach(() => {
    render(<SignUpForm />);
  });

  it("should render sign up button", () => {
    const btn = screen.getByTestId(btnTestId);

    expect(btn).toBeInTheDocument();
  });

  it("should clean all inputs on submitting", async () => {
    const btn = screen.getByTestId(btnTestId);

    inputsPlaceholders.map((key) => {
      const input = screen.getByPlaceholderText(key);
      fireEvent.change(input, {
        target: { value: mockedInputCorrectValues[input.id] },
      });
      expect(input).toHaveValue(mockedInputCorrectValues[input.id]);
    });
    await waitFor(() => {
      fireEvent.click(btn);
      inputsPlaceholders.forEach((key) => {
        const input = screen.getByPlaceholderText(key);
        expect(input).toHaveValue("");
      });
    });
  });

  it("should show error helper text on firstName", async () => {
    const input = screen.getByPlaceholderText(
      inputs.find((input) => input.id === "confirmPassword")!.placeholder
    );
    await waitFor(() => {
      fireEvent.change(input, { target: { value: "We" } });
      fireEvent.focusOut(input);

      expect(input).toHaveAttribute("aria-invalid", "true");
    });
  });
});
