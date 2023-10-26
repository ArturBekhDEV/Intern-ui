import { screen, render, fireEvent } from "@testing-library/react";
import { AuthProvider } from "@/context/context";
import { useAuth } from "@/context/hook";

const childrenMockDataTestID = "children-mock";

const childrenMock = (
  <div data-testid={childrenMockDataTestID}>I'm children</div>
);

const ChildrenWithSetAuth = () => {
  const { setAuth } = useAuth();

  return (
    <div>
      <button onClick={setAuth} data-testid="btn">Call setAuth</button>
    </div>
  );
};
const ChildrenWithRemoveAuth = () => {
  const { removeAuth } = useAuth();

  return (
    <div>
      <button onClick={removeAuth} data-testid="btn">Call removeAuth</button>
    </div>
  );
};
const ChildrenWithSetUser = () => {
  const { setUser } = useAuth();

  return (
    <div>
      <button onClick={setUser} data-testid="btn">Call removeAuth</button>
    </div>
  );
};

jest.mock("@/utils/getEnv", () => ({
  getEnv: jest.fn(() => ({
    apiUrl: "http://localhost:3001/",
    googleClientId: "test-google-client-id",
  })),
}));

describe("AuthProvider", () => {
  it("should render children in provider", () => {
    render(<AuthProvider>{childrenMock}</AuthProvider>);
    const children = screen.getByTestId(childrenMockDataTestID);

    expect(children).toBeInTheDocument();
  });

  it("should perform setAuth function", () => {
    render(
      <AuthProvider>
        <ChildrenWithSetAuth />
      </AuthProvider>
    );

    const button = screen.getByTestId('btn')

    expect(button).toBeInTheDocument()

    fireEvent.click(button)
  });

  it("should perform removeAuth function", () => {
    render(
      <AuthProvider>
        <ChildrenWithRemoveAuth />
      </AuthProvider>
    );

    const button = screen.getByTestId('btn')

    expect(button).toBeInTheDocument()

    fireEvent.click(button)
  });

  it("should perform setUser function", () => {
    render(
      <AuthProvider>
        <ChildrenWithSetUser />
      </AuthProvider>
    );

    const button = screen.getByTestId('btn')

    expect(button).toBeInTheDocument()

    fireEvent.click(button)
  });
});
