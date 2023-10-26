import { renderWithProvidersAndRouter } from "@tests/utils";
import { screen, fireEvent } from "@testing-library/react";
import Home from "@/pages/Home/Home";
import React from "react";

const mockedContextValue = {
  setAuth: (role, firstName) => {
    console.log(role, firstName);
  },
  removeAuth: () => {},
  setUser: (role, firstName, lastName) => {
    console.log(role, firstName, lastName);
  },
};

const adminMockedState = {
  state: {
    isAuth: true,
    role: "ADMIN",
    firstName: "Test",
    lastName: "Test",
  },
};

const userMockedState = {
  state: {
    isAuth: true,
    role: "USER",
    firstName: "Test",
    lastName: "Test",
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
    renderWithProvidersAndRouter(<Home />, {
      ...mockedContextValue,
      ...userMockedState,
    })

    const userHomePage = screen.getByTestId("user-home-page");
    expect(userHomePage).toBeInTheDocument();
  });

  it("should render AdminHome page if user role is ADMIN", () => {
    renderWithProvidersAndRouter(<Home />, {
      ...mockedContextValue,
      ...adminMockedState,
    });

    const adminHomePage = screen.getByTestId("admin-home-page");
    expect(adminHomePage).toBeInTheDocument();
  });

  it("should render WelcomePage if user is not authorized", () => {
    renderWithProvidersAndRouter(<Home />, {
      ...mockedContextValue,
      state: {
        isAuth: false,
        role: "",
      },
    });

    const welcomePage = screen.getByTestId("welcome-page");
    expect(welcomePage).toBeInTheDocument();
  });

  it("should logout by clicking on LogOut button", async () => {
    renderWithProvidersAndRouter(<Home />, {
      ...mockedContextValue,
      ...adminMockedState,
    });

    const adminHomePage = screen.getByTestId("admin-home-page");
    expect(adminHomePage).toBeInTheDocument();

    const logoutBtn = screen.getByText("Log Out");

    fireEvent.click(logoutBtn);
  });

  it("should render Loader if loading is true", () => {
    const mockUseState1 = jest.spyOn(React, "useState");
    mockUseState1.mockImplementation(() => [true, jest.fn()]);

    renderWithProvidersAndRouter(<Home />, {
      ...mockedContextValue,
      ...adminMockedState,
    });

    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });
});
