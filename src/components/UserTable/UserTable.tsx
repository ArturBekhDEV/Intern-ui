import { DataGrid } from "@mui/x-data-grid";
import { Container } from "@mui/material";
import { styles } from "./UserTable.styles";
import { columns } from "./UserTable.constans";
import { dataRowType } from "./UserTable.constans";

interface UserTableProps {
  response: dataRowType[];
  handleUserData: (data: dataRowType[]) => void;
}

const UserTable: React.FC<UserTableProps> = ({ response, handleUserData }) => {
  return (
    <Container sx={styles.root}>
      <DataGrid
        sx={styles.grid}
        rows={response}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        disableColumnFilter
        disableColumnMenu
        disableDensitySelector
        disableRowSelectionOnClick={false}
        disableColumnSelector
        hideFooterSelectedRowCount
        checkboxSelection
        data-testid='users-table'
        onRowSelectionModelChange={(id) => {
          const selectedId = new Set(id);
          const selectedRows = response.filter((data) =>
            selectedId.has(data.id)
          );
          handleUserData(selectedRows);
        }}
      />
    </Container>
  );
};

export default UserTable;
