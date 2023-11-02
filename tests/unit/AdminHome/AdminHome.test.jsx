import { fireEvent, screen, waitFor } from "@testing-library/react";
import { newUserInputs } from "@/constants/validations";
import AdminHome from "@/pages/AdminHome/AdminHome";
import { render, act } from "@testing-library/react";
import { mockAxiosClientWithCredentials } from "../../setup/utils";
import userEvent from "@testing-library/user-event";
import React from "react";

const onLogOutMock = jest.fn();

const mockedInputCorrectValues = {
  firstName: "Testing",
  lastName: "Testing",
  email: "test@example.com",
  password: "SomeTest1!",
  role: "ADMIN",
};
const inputsPlaceholders = newUserInputs.map((i) => i.placeholder);

jest.mock("@/utils/getEnv", () => ({
  async getEnv() {
    jest.fn(() => ({
      apiUrl: "http://localhost:3001",
      googleClientId: "test-google-client-id",
    }));
  },
}));

describe("AdminHome", () => {
  beforeEach(() => {
    act(() => {
      render(<AdminHome onLogOut={onLogOutMock} />);
    });
  });

  it("should logout on click button", () => {
    const logoutBtn = screen.getByTestId("logoutBtn");
    fireEvent.click(logoutBtn);

    expect(onLogOutMock).toHaveBeenCalled();
  });

  it("should open modal with creating user", () => {
    const newUserBtn = screen.getByTestId("newUserBtn");

    expect(newUserBtn).toBeInTheDocument();

    fireEvent.click(newUserBtn);

    const modal = screen.getByTestId("modal");
    expect(modal).toBeInTheDocument();
  });

  it("should open and close modal with creating user", () => {
    const newUserBtn = screen.getByTestId("newUserBtn");

    expect(newUserBtn).toBeInTheDocument();

    fireEvent.click(newUserBtn);

    const modal = screen.getByTestId("modal");
    expect(modal).toBeInTheDocument();

    userEvent.click(document.body);
  });

  it("should submit form on submit create new user button and show toast", async () => {
    const newUserBtn = screen.getByTestId("newUserBtn");

    expect(newUserBtn).toBeInTheDocument();

    fireEvent.click(newUserBtn);

    const modal = screen.getByTestId("modal");
    expect(modal).toBeInTheDocument();

    const submitNewUserBtn = screen.getByTestId("submit-btn");

    expect(submitNewUserBtn).toBeInTheDocument();

    inputsPlaceholders.forEach(async (key) => {
      const input = screen.getByPlaceholderText(key);
      await waitFor(() => {
        fireEvent.change(input, {
          target: { value: mockedInputCorrectValues[input.id] },
        });
        expect(input).toHaveValue(mockedInputCorrectValues[input.id]);
      });
    });
    await waitFor(() => {
      mockAxiosClientWithCredentials
        .onPost("/users")
        .reply(201, mockedInputCorrectValues);

      fireEvent.click(submitNewUserBtn);

      const notificationText = `User ${mockedInputCorrectValues.email} was created`;
      const notification = screen.getByText(notificationText);
      expect(notification).toBeInTheDocument();
    });
  });

  it("should throw an error and show notification", async () => {
    const newUserBtn = screen.getByTestId("newUserBtn");

    expect(newUserBtn).toBeInTheDocument();

    fireEvent.click(newUserBtn);

    const modal = screen.getByTestId("modal");
    expect(modal).toBeInTheDocument();

    const submitNewUserBtn = screen.getByTestId("submit-btn");

    expect(submitNewUserBtn).toBeInTheDocument();

    inputsPlaceholders.forEach(async (key) => {
      const input = screen.getByPlaceholderText(key);
      await waitFor(() => {
        fireEvent.change(input, {
          target: { value: mockedInputCorrectValues[input.id] },
        });
        expect(input).toHaveValue(mockedInputCorrectValues[input.id]);
      });
    });
    await waitFor(() => {
      const errorMsg = "Something went wrong";
      mockAxiosClientWithCredentials
        .onPost("/users")
        .reply(401, { message: errorMsg });

      fireEvent.click(submitNewUserBtn);

      const notification = screen.getByText(errorMsg);
      expect(notification).toBeInTheDocument();
    });
  });
});
