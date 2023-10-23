import SignInPage from "@/pages/SignInPage/SignInPage";
import SignUpPage from "@/pages/SignUpPage/SignUpPage";
import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home/Home";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
