import palette from "@/styles/app-theme/app.palette";

export const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    color: palette.primary[600],
  },
  description: {
    fontSize: "16px",
    color: palette.basic.grey,
  },
  icon: {
    fontSize: "42px",
    marginBottom: "10px",
    color: palette.primary[700],
  },
  btn: {
    width: "200px",
    color: "basic.white",
    mt: "30px",
    mb: "15px",
  },
  input: {
    width: "550px",
    "@media (max-width: 600px)": {
      width: "300px",
    },
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
    "& .MuiOutlinedInput-root": {
      "&:hover:not(.Mui-focused) fieldset": {
        borderColor: palette.basic.grey,
      },
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
};
