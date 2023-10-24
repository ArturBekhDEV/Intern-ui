import { Box, Breakpoint, Container, SxProps } from "@mui/material";
import { FC, ReactNode } from "react";
import { styles } from "./Header.styles";
import { spliceSx } from "@/utils/splice-sx";

interface HeaderProps {
  children: ReactNode[] | ReactNode;
  contentMaxWidth: Breakpoint;
  sx?: SxProps;
}

const Header: FC<HeaderProps> = ({ children, sx, contentMaxWidth }) => {
  return (
    <Box sx={spliceSx(styles.root, sx)}>
      <Container maxWidth={contentMaxWidth}>
        <Box sx={styles.container}>
          {children}
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
