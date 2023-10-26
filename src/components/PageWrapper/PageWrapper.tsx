import { Breakpoint, Container } from "@mui/material";
import { FC, ReactNode } from "react";

export interface PageWrapperProps {
  children: ReactNode;
  breakpoint?: Breakpoint;
}

const PageWrapper: FC<PageWrapperProps> = ({ children, breakpoint = "sm" }) => {
  return <Container maxWidth={breakpoint}>{children}</Container>;
};

export default PageWrapper;
