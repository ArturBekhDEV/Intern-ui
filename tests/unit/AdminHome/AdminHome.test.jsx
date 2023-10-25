import { act } from "@testing-library/react-hooks";
import { fireEvent, screen } from "@testing-library/react";
import AdminHome from "@/pages/AdminHome/AdminHome";
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
});
