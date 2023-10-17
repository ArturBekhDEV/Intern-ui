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
    fontSize: "2rem",
    padding: "30px",
    marginTop: "40px",
    backgroundColor: "basic.dark",
    border: "1px solid gray",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "20px",
    boxShadow: "1px 12px 12px rgba(0, 0, 0, 0.4)",
  },
  title: {
    fontSize: "3rem",
    marginTop: "30px",
    color: palette.primary[700],
  },
  iconstyles: {
    fontSize: "100px",
  },
};
