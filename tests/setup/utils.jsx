import { ThemeProvider } from "@mui/material";
import { render } from "@testing-library/react";
import { AuthProvider } from "@/context/context";
import theme from "@/styles/app-theme";
import MockAdapter from "axios-mock-adapter";
import { axiosClient, axiosClientWithCredentials } from "@/services";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

export const renderWithProviders = (component, authContextValue) => {
  const Wrapper = ({ children }) => (
    <ThemeProvider theme={theme}>
      <AuthProvider value={authContextValue}>{children}</AuthProvider>
    </ThemeProvider>
  );
  render(component, { wrapper: Wrapper });
};

export const renderWithProvidersAndRouter = (children, authContextValue) => {
  const history = createMemoryHistory();
  const component = (
    <Router location={history.location} navigator={history}>
      <AuthProvider value={authContextValue}>{children}</AuthProvider>
    </Router>
  );
  render(component);
};

export const mockAxiosClient = new MockAdapter(axiosClient);
export const mockAxiosClientWithCredentials = new MockAdapter(
  axiosClientWithCredentials
);
