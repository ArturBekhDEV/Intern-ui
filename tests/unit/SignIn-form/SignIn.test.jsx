import { fireEvent, screen } from "@testing-library/react";
import SignIn from "@/components/SignInForm/SignIn";
import { renderWithProvidersAndRouter } from "@tests/utils";

const mockedOnSubmit = async (_, helpers) => {
  helpers?.resetForm();
};

jest.mock("@/utils/getEnv", () => ({
  async getEnv() {
    jest.fn(() => ({
      apiUrl: "http://localhost:3001",
      googleClientId: "test-google-client-id",
    }));
  },
}));

describe("SignIn", () => {
  beforeEach(() => {
    renderWithProvidersAndRouter(<SignIn onSubmit={mockedOnSubmit} />);
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
    let emailInput = screen.getByPlaceholderText("Enter your email");
    let passwordInput = screen.getByPlaceholderText("Enter your password");
    const submitButton = screen.getByText("Sign In");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    fireEvent.click(submitButton);

    await screen.findByPlaceholderText("Enter your email");
    await screen.findByPlaceholderText("Enter your password");
    emailInput = screen.getByPlaceholderText("Enter your email");
    passwordInput = screen.getByPlaceholderText("Enter your password");
    expect(emailInput).toHaveValue("");
    expect(passwordInput).toHaveValue("");
  });
});
