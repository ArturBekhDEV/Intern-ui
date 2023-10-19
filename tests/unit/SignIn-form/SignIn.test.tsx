import { render, fireEvent, screen } from "@testing-library/react";
import SignIn from "@/components/sign-in-form/SignIn";

describe("WelcomePage", () => {
  beforeEach(() => {
    render(<SignIn />);
  });

  it("renders all inputs properly", () => {
    const emailInput = screen.getByPlaceholderText("Enter your email");
    const passwordInput = screen.getByPlaceholderText("Enter your password");
    const submitButton = screen.getByText("Sign In");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("Submits the form and resets it", async () => {
    const emailInput = screen.getByPlaceholderText("Enter your email");
    const passwordInput = screen.getByPlaceholderText("Enter your password");
    const submitButton = screen.getByText("Sign In");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    fireEvent.click(submitButton);

    await screen.findByPlaceholderText("Enter your email");
    await screen.findByPlaceholderText("Enter your password");

    expect(emailInput).toHaveValue("");
    expect(passwordInput).toHaveValue("");
  });
});
