import { styles } from "./SignUpPage.styles";
import { ToastContainer, toast } from "react-toastify";
import SignUpForm from "@/components/SignUpForm/SignUpForm";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import GoogleBtn from "@/components/google-button/GoogleBtn";
import { useAxios } from "@/hooks/useAxios";
import { authService } from "@/services/auth";
import { SignUpResponse } from "@/services/services.types";

const SignInPage = () => {
  const onError = (msg: string) => {
    toast(msg);
  };

  const onSuccess = () => {};

  const { request } = useAxios<Record<string, string>, SignUpResponse>({
    service: authService.signUp,
    onError,
    onSuccess,
  });

  const onSubmit = async (values: Record<string, string>) => {
    await request(values);
  };

  return (
    <>
      <Box sx={styles.root}>
        <SignUpForm onSubmit={onSubmit} />
        <GoogleBtn />
        <Divider
          sx={{
            borderColor: "green",
            mt: "24px",
            width: "100px",
          }}
        />
        <Typography variant="body1" color="grey" sx={{ mt: "16px" }}>
          Do you have already account?{" "}
          <Link href="/sign-in" color="primary">
            Sign in
          </Link>{" "}
          for our services for free!
        </Typography>
      </Box>
    </>
  );
};

export default SignInPage;
