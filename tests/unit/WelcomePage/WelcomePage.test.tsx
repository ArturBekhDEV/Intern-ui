import { render, screen } from "@testing-library/react";
import WelcomePage from "@/pages/WelcomePage/WelcomePage";
import { MemoryRouter } from "react-router-dom";

describe("WelcomePage", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <WelcomePage />
      </MemoryRouter>
    );
  });

  it("renders the welcome message", () => {
    const welcomeMessage = screen.getByText(
      "Welcome there! Ready to explore the unknown ?"
    );
    expect(welcomeMessage).toBeInTheDocument();
  });

  it("renders the 'Sign Up' button with the correct link", () => {
    const signUpButton = screen.getByText("Sign Up");
    expect(signUpButton).toBeInTheDocument();

    const signUpButtonLink = screen.getByRole("link", { name: "Sign Up" });
    expect(signUpButtonLink).toHaveAttribute("href", "/signup");
  });

  it("renders the 'Sign In' button with the correct link", () => {
    const signInButton = screen.getByText("Sign In");
    expect(signInButton).toBeInTheDocument();

    const signInButtonLink = screen.getByRole("link", { name: "Sign In" });
    expect(signInButtonLink).toHaveAttribute("href", "/signin");
  });
});
