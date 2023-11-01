import UserHome from "@/pages/UserHome/UserHome";
import { screen, fireEvent, act } from "@testing-library/react";
import { render } from "@testing-library/react";

const onLogOutMock = jest.fn();

jest.mock("@/utils/getEnv", () => ({
  async getEnv() {
    jest.fn(() => ({
      apiUrl: "http://localhost:3001",
      googleClientId: "test-google-client-id",
    }));
  },
}));

describe("UserHome", () => {
  beforeEach(() => {
    act(() => {
      render(<UserHome onLogOut={onLogOutMock} />);
    });
  });

  it("should logout on click button", () => {
    const logoutBtn = screen.getByTestId("logoutBtn");
    fireEvent.click(logoutBtn);

    expect(onLogOutMock).toHaveBeenCalled();
  });
});
