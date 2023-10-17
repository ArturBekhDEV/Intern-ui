import { styles } from "./WelcomePage.styles";
import Box from "@mui/material/Box";
import PublicIcon from "@mui/icons-material/Public";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <Box sx={styles.container}>
      <PublicIcon sx={styles.iconstyles} />
      <Box sx={styles.title}>
        <span>Welcome there! Ready to explore the unknown ?</span>
      </Box>
      <Box sx={styles.btnContainer}>
        <span>If you don't have an account :</span>
        <Link to="/signup">
          <Button variant="contained" color="primary" sx={styles.btn}>
            Sign Up
          </Button>
        </Link>
        <span>If you already have an account :</span>
        <Link to="/signin">
          <Button variant="contained" color="primary" sx={styles.btn}>
            Sign In
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default WelcomePage;
