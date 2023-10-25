import { ThemeProvider } from "@mui/material";
import { render } from "@testing-library/react";
import { AuthProvider } from "@/context/context";
import theme from "@/styles/app-theme";
import MockAdapter from "axios-mock-adapter";
import { axiosClient, axiosClientWithCredentials } from "@/services";
import { createMemoryRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { routerConfig } from "@/routes";
import { RouterProvider } from "react-router-dom";

export const renderWithProviders = (component, authContextValue) => {
  const Wrapper = ({ children }) => (
    <ThemeProvider theme={theme}>
      <AuthProvider value={authContextValue}>{children}</AuthProvider>
    </ThemeProvider>
  );
  render(component, { wrapper: Wrapper });
};

export const renderWithProvidersRouter = (authContextValue) => {
  const router = createMemoryRouter(createRoutesFromElements(routerConfig), {
    initialEntries: ["/"],
  });
  const Component = () => (
    <ThemeProvider theme={theme}>
      <AuthProvider value={authContextValue}>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
  render(Component);
};

export const mockAxiosClient = new MockAdapter(axiosClient);
export const mockAxiosClientWithCredentials = new MockAdapter(
  axiosClientWithCredentials
);
