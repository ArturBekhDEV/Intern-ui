import { fireEvent, screen, waitFor } from "@testing-library/react";
import { newUserInputs } from "@/constants/validations";
import AdminHome from "@/pages/AdminHome/AdminHome";
import { render, act } from "@testing-library/react";
import { mockAxiosClientWithCredentials, renderWithProvidersAndRouter } from "../../setup/utils";
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
  describe("Without table", () => {
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

  describe("With table", () => {
    it("should update user", async () => {
     act(() => {
      renderWithProvidersAndRouter(<AdminHome onLogOut={onLogOutMock} />);
     })
        mockAxiosClientWithCredentials.onGet("/users").reply(200, {
          items: [
            {
              createdAt: "2023-11-02T11:18:36.670Z",
              email: "artbekh94@gmail.com",
              firstName: "Artur",
              id: "e316e965-62c7-49a7-aeca-8fe3cbe96fec",
              lastName: "Bekh",
              password:
                "52d4363c2d25cca956ecb0c1187583bd0395bcc3c37649c996fed6f7699f54e349829a906866ae51f531cc4f388b090e8fcf4bc858fd7d46d53fe6c8826000f3:5df861",
              role: "ADMIN",
              updatedAt: "2023-11-02T11:18:36.670Z",
            },
          ],
          counts: 1,
        });
        await waitFor(() => {
          const table = screen.getByTestId("users-table");

          expect(table).toBeInTheDocument()

          const tableRows = screen.getAllByRole('row')
          const tableRow = tableRows[1]

          expect(tableRow).toBeInTheDocument()

          fireEvent.click(tableRow)

          const editBtn = screen.getByTestId('editUser')

          fireEvent.click(editBtn)

          // const modal = screen.getByTestId('modal')

          // expect(modal).toBeInTheDocument()
        })
    });
  });
});
