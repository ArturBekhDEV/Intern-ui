import SignUpForm from "@/components/SignUpForm/SignUpForm";
import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "@/pages/WelcomePage/WelcomePage";

export default createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/sign-up",
    element: <SignUpForm />,
    index: true,
  },
  {
    path: "/sign-in",
    element: <div>sign up page</div>,
  },
]);
