import { render, screen, fireEvent } from "@testing-library/react";
import UserTable from "@/components/UserTable/UserTable";

const mockedData = [
  {
    id: 1,
    lastName: "Lannister",
    firstName: "Cersei",
    email: "test@gmail.com",
    role: "admin",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    email: "test@gmail.com",
    role: "admin",
  },
];

describe("UserTable", () => {
  it("Renders table and checks selecting rows", () => {
    render(<UserTable handleUserData={() => {}} response={mockedData} />);

    const table = screen.getByRole("grid");
    expect(table).toBeInTheDocument();

    const rowCheckboxes = screen.getAllByRole("checkbox", {
      name: /Select row/,
    });

    expect(rowCheckboxes).toHaveLength(2);

    fireEvent.click(rowCheckboxes[0]);

    const selectedRows = screen.getAllByRole("row", { selected: true });
    expect(selectedRows).toHaveLength(1);

    fireEvent.click(rowCheckboxes[1]);

    const selectedRowsAfterSecondClick = screen.getAllByRole("row", {
      selected: true,
    });
    expect(selectedRowsAfterSecondClick).toHaveLength(2);
  });
});
