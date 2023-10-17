import SignUpForm from "@/components/sign-up-form/SignUpForm";
import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "@/pages/WelcomePage/WelcomePage";

export default createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/sign-up",
    element: <div>sign up page</div>,
  },
  {
    path: "/sign-in",
    element: <SignUpForm />,
  },
]);
