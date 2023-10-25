import { renderWithProvidersRouter } from "../../setup/utils";
import { screen } from "@testing-library/react";

const mockedContextValue = {
  setAuth: (role, firstName) => {
    console.log(role, firstName);
  },
  removeAuth: () => {},
  setUser: (role, firstName, lastName) => {
    console.log(role, firstName, lastName);
  },
};

jest.mock("@/utils/getEnv", () => ({
  async getEnv() {
    jest.fn(() => ({
      apiUrl: "http://localhost:3001",
      googleClientId: "test-google-client-id",
    }));
  },
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: () => [false, jest.fn()],
}));

describe("Home", () => {
  it("should render UserHome page if user role is USER", () => {
    renderWithProvidersRouter({
      ...mockedContextValue,
      isAuth: true,
      role: "USER",
    });

    const userHomePage = screen.getByTestId("user-home-page");
    expect(userHomePage).toBeInTheDocument();
  });
});
