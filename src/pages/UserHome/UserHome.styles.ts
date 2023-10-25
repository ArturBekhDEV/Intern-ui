import palette from "@/styles/app-theme/app.palette";

export const styles = {
  root: {},
  name: {
    color: palette.primary[300],
  },
  headerText: {
    m: "0 10px",
  },
  contentSoonText: {
    mt: "40px",
    typography: "h3",
    textAlign: "center",
    width: "100%",
  },
  header: {
    background: palette.basic.dark,
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    padding: "20px 0",
  },
  headerBtn: {
    color: palette.basic.white,
  },
  icon: {
    fontSize: "90px",
    margin: "0 auto",
    display: "block",
  },
  iconContainer: { width: "100%", mt: "50px" },
};
