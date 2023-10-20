import { useAxios } from "@/hooks/useAxios";
import { authService } from "@/services/auth";
import { GoogleAuthResponse } from "@/services/services.types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
interface GoogleResponse {
  credential: string;
}
declare global {
  const google: typeof import("google-one-tap");
}
const GoogleBtn = () => {
  const navigate = useNavigate();

  const onSuccess = () => {
    navigate("/");
  };

  const onError = (msg: string) => {
    console.log("error");
  };

  const { request } = useAxios<string, GoogleAuthResponse>({
    service: authService.googleAuth,
    onSuccess,
    onError,
  });

  const handleGoogleResponse = async (response: GoogleResponse) => {
    console.log(response);
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
  return <div id="googleButton" />;
};

export default GoogleBtn;
