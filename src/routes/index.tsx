import SignInPage from "@/pages/SignInPage/SignInPage";
import SignUpPage from "@/pages/SignUpPage/SignUpPage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "@/pages/Home/Home";
import App from "@/App";

export const routerConfig = (
  <Route element={<App />} path={"/"}>
    <Route element={<Home />} path="" />
    <Route element={<SignInPage />} path="sign-in" />
    <Route element={<SignUpPage />} path="sign-up" />
  </Route>
);

export const router = createBrowserRouter(
  createRoutesFromElements(routerConfig)
);
