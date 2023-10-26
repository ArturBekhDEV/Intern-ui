import { DataGrid } from "@mui/x-data-grid";
import { Container } from "@mui/material";
import { styles } from "./UserTable.styles";
import { columns } from "./UserTable.constans";
import { useState } from "react";
import { dataRowType } from "./UserTable.constans";

interface UserTableProps {
  data: dataRowType[];
}

const UserTable: React.FC<UserTableProps> = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState<dataRowType[]>([]);
  console.log(selectedRows);

  return (
    <Container sx={styles.root}>
      <DataGrid
        sx={styles.grid}
        rows={data}
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
        onRowSelectionModelChange={(id) => {
          const selectedId = new Set(id);
          const selectedRows = data.filter((data) => selectedId.has(data.id));
          setSelectedRows(selectedRows);
        }}
      />
    </Container>
  );
};

export default UserTable;
