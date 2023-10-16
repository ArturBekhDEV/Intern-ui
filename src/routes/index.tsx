import { Button } from "@mui/material";
import { createBrowserRouter } from "react-router-dom";

export default createBrowserRouter([
  {
    path: "/",
    element: (
      <Button variant="contained" sx={{ color: "basic.white" }}>
        Test
      </Button>
    ),
  },
]);
