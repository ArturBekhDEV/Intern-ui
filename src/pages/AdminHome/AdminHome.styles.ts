import palette from "@/styles/app-theme/app.palette";

const disabledBtn = {
  "&.Mui-disabled": {
    backgroundColor: "lightgray",
    color: "gray",
  },
};

export const styles = {
  name: {
    color: palette.primary[300],
  },
  headerBtn: {
    color: palette.basic.white,
  },
  editBtn: {
    mr: "20px",
    px: "33px",
    ...disabledBtn,
  },
  deleteBtn: disabledBtn,
  contentContainer: {
    display: "flex",
    justifyContent: "space-between",
    mt: "50px",
  },
};
