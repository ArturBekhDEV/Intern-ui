import { styles } from "./WelcomePage.styles";
import Box from "@mui/material/Box";
import PublicIcon from "@mui/icons-material/Public";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { ToastContainer } from "react-toastify";

const WelcomePage = () => {
  return (
    <Box sx={styles.container}>
      <ToastContainer />
      <PublicIcon sx={styles.iconstyles} />
      <Box sx={styles.title}>
        <Typography variant="h2" color="initial" sx={styles.title}>
          Welcome there! Ready to explore the unknown ?
        </Typography>
      </Box>
      <Box sx={styles.btnContainer}>
        <Typography variant="h4" color="initial" sx={styles.description}>
          If you don't have an account:
        </Typography>
        <Link to="/sign-up">
          <Button variant="contained" color="primary" sx={styles.btn}>
            Sign Up
          </Button>
        </Link>
        <Typography variant="h4" color="initial" sx={styles.description}>
          If you already have an account:
        </Typography>
        <Link to="/sign-in">
          <Button variant="contained" color="primary" sx={styles.btn}>
            Sign In
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default WelcomePage;
