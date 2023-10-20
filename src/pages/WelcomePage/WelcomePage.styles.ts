import palette from "@/styles/app-theme/app.palette";
export const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
  },
  btn: {
    width: "200px",
    color: "basic.white",
  },
  btnContainer: {
    maxWidth: "700px",
    padding: "30px",
    marginTop: "40px",
    backgroundColor: "basic.dark",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "20px",
    boxShadow: "1px 12px 12px rgba(0, 0, 0, 0.4)",

    "@media (min-width: 768px)": {
      width: "100%",
    },
  },
  title: {
    marginTop: "20px",
    color: palette.primary[700],
    textAlign: "center",

    "@media (max-width: 768px)": {
      fontSize: "34px",
    },
  },
  iconstyles: {
    fontSize: "80px",
    color: palette.primary[800],
  },
  description: {
    color: palette.basic.grey,
    fontSize: "18px",
  },
};
