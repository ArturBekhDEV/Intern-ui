import palette from "@/styles/app-theme/app.palette";

export const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  block: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minWidth:'300px'
  },
  icon: {
    fontSize: "100px",
  },
  input: {
    width: "100%",
    "& input": {
      color: palette.basic.white,
    },
    mb: "25px",
    "& .MuiInputLabel-root": {
      color: "gray",
    },
    "& .MuiInputBase-input::placeholder": {
      color: palette.basic.white, // Placeholder color when not focused (white)
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: palette.basic.grey, // Default border color
      },
      "&:hover:not(.Mui-focused) fieldset": {
        borderColor: palette.basic.grey, // Border color on hover when not focused
      },
    },
  },
  button: {
    width: '70%'
  }
};
