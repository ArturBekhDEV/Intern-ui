import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import "@/clear-styles";

import router from "@/routes/index";
import theme from "@/styles/app-theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
