import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Id:",
    sortable: false,
    width: 200,
  },
  {
    field: "firstName",
    hideSortIcons: true,
    headerName: "First name:",
    sortable: false,
    width: 200,
  },
  {
    field: "lastName",
    hideSortIcons: true,
    sortable: false,
    headerName: "Last name:",
    width: 200,
    flex: 1,
  },
  {
    field: "email",
    hideSortIcons: true,
    headerName: "Email adress:",
    width: 200,
    sortable: false,
    flex: 1,
  },
  {
    field: "role",
    headerName: "Role:",
    type: "string",
    width: 200,
    hideSortIcons: true,
    sortable: false,
    flex: 1,
  },
];

export type dataRowType = {
  id: number;
  lastName: string;
  firstName: string;
  email: string;
  role: string;
};
