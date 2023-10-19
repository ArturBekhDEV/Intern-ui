import palette from "@/styles/app-theme/app.palette";

export const styles = {
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  containerBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "30px",
    padding: "24px",
  },
  title: {
    color: palette.primary[600],
  },
  description: {
    fontSize: "16px",
    color: palette.basic.grey,
  },
  icon: {
    fontSize: "36px",
    marginBottom: "10px",
    color: palette.primary[700],
  },
  btn: {
    width: "200px",
    color: "basic.white",
    mt: "30px",
  },
  input: {
    backgroundColor: palette.basic.light,
    color: palette.basic.grey,
    "& input": {
      color: palette.basic.grey,
    },
    "& .MuiInputLabel-root": {
      color: palette.basic.grey,
    },
    "& .MuiFormHelperText-root": {
      color: palette.error[500],
      backgroundColor: "#1c1c1c",
      m: "0px",
    },
  },
};
