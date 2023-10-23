import SignInPage from "@/pages/SignInPage/SignInPage";
import SignUpPage from "@/pages/SignUpPage/SignUpPage";
import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "@/pages/WelcomePage/WelcomePage";

export default createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
    index: true,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
]);
