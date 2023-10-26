import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/styles/app-theme";
import { Typography } from "@mui/material";

describe("createCustomTheme creates a valid MUI theme", () => {
  it("should render with theme", () => {
    const TestComponent = () => (
      <ThemeProvider theme={theme}>
        <Typography variant="h1" sx={{ color: "text.primary" }}>
          Test
        </Typography>
      </ThemeProvider>
    );

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <TestComponent />
      </ThemeProvider>
    );

    const textElement = getByText("Test");

    expect(textElement).toBeInTheDocument();

    expect(textElement).toHaveStyle("font-size: 6rem");
    expect(textElement).toHaveStyle(`color: ${theme.palette.text.primary}`);
  });
});
