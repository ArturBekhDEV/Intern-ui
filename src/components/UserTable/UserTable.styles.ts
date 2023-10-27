import palette from "@/styles/app-theme/app.palette";

export const styles = {
  root: {
    "& .MuiDataGrid-root": {
      backgroundColor: palette.basic.dark,
      color: palette.primary[700],
      fontSize: "24px",
      border: "none",
    },
  },
  grid: {
    "& .MuiDataGrid-columnSeparator": { display: "none" },

    "& .MuiDataGrid-withBorderColor": {
      borderColor: palette.primary[700],
    },
    "& .MuiDataGrid-cell": {
      color: palette.basic.grey,
      fontSize: "18px",
    },
    "& .MuiDataGrid-checkboxInput": {
      color: palette.primary[700],
    },
    "& .MuiTablePagination-root": {
      color: palette.primary[700],
    },
    "& .MuiDataGrid-row-selected": {
      BorderThickness: "none",
    },
    "& .MuiDataGrid-cell:hover": {
      color: palette.primary[700],
    },
    "& .muiDataGrid-selectedRowCount": {
      backgroundColor: palette.primary[700],
    },
  },
};
