import { styles } from "./SignInPage.styles";
import SignIn from "@/components/sign-in-form/SignIn";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import GoogleBtn from "@/components/google-button/GoogleBtn";

const SignInPage = () => {
  return (
    <Box sx={styles.root}>
      <SignIn />
      <GoogleBtn />
      <Divider
        sx={{
          borderColor: "green",
          mt: "24px",
          width: "100px",
        }}
      />
      <Typography variant="body1" color="grey" sx={{ mt: "16px" }}>
        Don't have an account yet?{" "}
        <Link href="/sign-up" color="primary">
          Sign up
        </Link>{" "}
        for our services for free!
      </Typography>
    </Box>
  );
};

export default SignInPage;
