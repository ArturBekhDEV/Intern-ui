import { baseToastifyConfig } from "@/configs/toastify";
import { SuccessfulSignInMsg } from "@/constants/response-messages";
import { useAuth } from "@/context/hook";
import { useAxios } from "@/hooks/use-axios";
import { authService } from "@/services/auth";
import { GoogleAuthResponse } from "@/services/services.types";
import { saveToStorage } from "@/utils/local-storage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
interface GoogleResponse {
  credential: string;
}
declare global {
  const google: typeof import("google-one-tap");
}
const GoogleBtn = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const onSuccess = (data?: GoogleAuthResponse) => {
    navigate("/");
    saveToStorage("token", data?.token);
    setAuth(data!.role, data!.firstName);
    setTimeout(() => {
      toast.success(
        SuccessfulSignInMsg,
        baseToastifyConfig
      );
    }, 500);
  };

  const onError = (msg: string) => {
    toast.error(msg, baseToastifyConfig);
  };

  const { request } = useAxios<string, GoogleAuthResponse>({
    service: authService.googleAuth,
    onSuccess,
    onError,
  });

  const handleGoogleResponse = async (response: GoogleResponse) => {
    const token = response.credential;
    await request(token);
  };

  useEffect(() => {
    const googleButton = document.getElementById("googleButton");
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleGoogleResponse,
    });

    if (googleButton) {
      google.accounts.id.renderButton(googleButton, {
        theme: "filled_black",
        size: "large",
        text: "continue_with",
        locale: "en",
      });
    }
  }, []);
  return (
    <>
      <div id="googleButton" />
      <ToastContainer />
    </>
  );
};

export default GoogleBtn;
