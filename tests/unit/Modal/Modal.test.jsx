import Modal from "@/components/Modal/Modal";
import { render, screen } from "@testing-library/react";

const mockedChildren = <div>children</div>;
const mockedHandleClose = jest.fn();

describe("Modal", () => {
  it("should show modal", () => {
    render(
      <Modal
        isOpen={true}
        handleClose={mockedHandleClose}
        children={mockedChildren}
      />
    );

    const modal = screen.getByTestId("modal");

    expect(modal).toBeInTheDocument();
  });

  it("should not show modal", () => {
    render(
      <Modal
        isOpen={false}
        handleClose={mockedHandleClose}
        children={mockedChildren}
      />
    );

    const modal = screen.queryByTestId("modal");

    expect(modal).not.toBeInTheDocument();
  });
});
