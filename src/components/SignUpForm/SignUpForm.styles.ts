import palette from "@/styles/app-theme/app.palette";

export const styles = {
  root: {
    width: 'fit-content',
    display: 'block',
    margin: '0 auto',
  },
  block: {
    margin: 0,
    padding: '40px 0',
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: '10px 20px',
    width: '100%'
  },
  input: {
    width: '450px',
    "@media (max-width: 600px)": {
      width:'300px'
    },
    "& input": {
      color: palette.basic.white,
    },
    mb: "25px",
    "& .MuiInputLabel-root": {
      color: "gray",
    },
    "& .MuiInputBase-input::placeholder": {
      color: palette.basic.white, 
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: palette.basic.grey,
      },
      "&:hover:not(.Mui-focused) fieldset": {
        borderColor: palette.basic.grey, 
      },
    },
  },
  button: {
    width: '50%',
    "@media (min-width: 600px)": {
      padding: '10px 40px',
      fontSize: '17px'
    },
  }
};
