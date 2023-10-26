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
export const rows = [
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
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    email: "test@gmail.com",
    role: "admin",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    email: "test@gmail.com",
    role: "admin",
  },
  {
    id: 63232,
    lastName: "Melisandre",
    firstName: "Farrey",
    email: "test@gmail.com",
    role: "admin",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    email: "test@gmail.com",
    role: "admin",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    email: "test@gmail.com",
    role: "admin",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    email: "test@gmail.com",
    role: "admin",
  },
];
