import { useEffect } from "react";
interface GoogleResponse {
  credential: string;
}
declare global {
  const google: typeof import("google-one-tap");
}
const GoogleBtn = () => {
  const handleGoogleResponse = (response: GoogleResponse) => {
    console.log("Token encoded is " + response.credential);
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
