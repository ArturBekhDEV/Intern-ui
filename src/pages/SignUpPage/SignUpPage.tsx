import { useEffect } from "react";
import { styles } from "@/pages/SignUpPage/SignUpPage.styles";
import { ToastContainer, toast } from "react-toastify";
import SignUpForm from "@/components/SignUpForm/SignUpForm";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import GoogleBtn from "@/components/GoogleBtn/GoogleBtn";
import { useAxios } from "@/hooks/use-axios";
import { authService } from "@/services/auth";
import { SignUpResponse } from "@/services/services.types";
import { baseToastifyConfig } from "@/configs/toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/hook";
import { storage } from "@/utils/local-storage";
import { SuccessfulSignInMsg } from "@/constants/response-messages";
import { FormikHelpers } from "formik";

const SignInPage = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const isAuth = () => {
    const isExistingToken = storage.get("token");
    return !!isExistingToken;
  };

  useEffect(() => {
    if (isAuth()) {
      navigate("/");
    }
  }, []);

  const onError = (msg: string) => {
    toast.error(msg, baseToastifyConfig);
  };

  const onSuccess = (data?: SignUpResponse) => {
    navigate("/");
    window.location.reload();
    storage.save("token", data?.token);
    setAuth(data!.role, data!.firstName);
    setTimeout(() => {
      toast.success(SuccessfulSignInMsg, baseToastifyConfig);
    }, 500);
  };

  const { request } = useAxios<Record<string, string>, SignUpResponse>({
    service: authService.signUp,
    onError,
    onSuccess,
  });

  const onSubmit = async (
    values: Record<string, string>,
    helpers?: FormikHelpers<Record<string, string>>,
  ) => {
    await request(values);
    helpers?.resetForm();
  };

  return (
    <>
      <Box sx={styles.root}>
        <ToastContainer />
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
          <Link to="/sign-in" color="primary" component={RouterLink}>
            Sign in
          </Link>{" "}
          for our services for free!
        </Typography>
      </Box>
    </>
  );
};

export default SignInPage;
