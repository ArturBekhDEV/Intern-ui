import { renderWithProviders } from "@tests/utils";
import { screen } from "@testing-library/react";
import { render } from "@testing-library/react";

console.log(renderWithProviders);
const childrenMockDataTestID = "children-mock";

const childrenMock = (
  <div data-testid={childrenMockDataTestID}>I'm children</div>
);

jest.mock("@/utils/getEnv", () => ({
  getEnv: jest.fn(() => ({
    apiUrl: "http://localhost:3001/",
    googleClientId: "test-google-client-id",
  })),
}));

describe("AuthProvider", () => {
  beforeEach(() => {
    render(childrenMock);
  });
  it("should render children in provider", () => {
    const children = screen.getByTestId(childrenMockDataTestID);

    expect(children).toBeInTheDocument();
  });
});
