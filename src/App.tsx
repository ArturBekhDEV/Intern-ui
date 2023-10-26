import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

import "@/clear-styles";

import theme from "@/styles/app-theme";
import { AuthProvider } from "./context/context";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
