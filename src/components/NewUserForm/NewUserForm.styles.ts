import palette from "@/styles/app-theme/app.palette";

export const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  block: {
    margin: 0,
    padding: "40px 0",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  selectorInput: {
    width: "550px",
    "@media (max-width: 600px)": {
      width: "300px",
    },
    "& input": {
      color: palette.basic.grey,
      backgroundColor: palette.basic.light,
    },
    mb: "25px",
    "& .MuiInputLabel-root": {
      color: palette.basic.grey,
    },
    "& .MuiInputBase-input::placeholder": {
      color: palette.basic.white,
    },
    "& .MuiOutlinedInput-root": {
      "&:hover:not(.Mui-focused) fieldset": {
        borderColor: palette.basic.grey,
      },
    },
    "& .MuiOutlinedInput-input": {
      color: palette.basic.grey
    },
  },
  input: {
    width: "550px",
    "@media (max-width: 600px)": {
      width: "300px",
    },
    "& input": {
      color: palette.basic.grey,
      backgroundColor: palette.basic.light,
    },
    mb: "25px",
    "& .MuiInputLabel-root": {
      color: palette.basic.grey,
    },
    "& .MuiInputBase-input::placeholder": {
      color: palette.basic.white,
    },
    "& .MuiOutlinedInput-root": {
      "&:hover:not(.Mui-focused) fieldset": {
        borderColor: palette.basic.grey,
      },
    },
  },
  button: {
    width: "200px",
    color: palette.basic.white,
    "@media (min-width: 600px)": {
      fontSize: "14px",
    },
    mb: "15px",
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
};
