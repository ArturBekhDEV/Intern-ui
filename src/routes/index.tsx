import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "@/pages/WelcomePage/WelcomePage";

export default createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/signup",
    element: <div>sign up page</div>,
  },
  {
    path: "/signin",
    element: <div>sign in page</div>,
  },
]);
