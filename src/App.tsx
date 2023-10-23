import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

import "@/clear-styles";

import router from "@/routes/index";
import theme from "@/styles/app-theme";
import { AuthProvider } from "./context/context";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
