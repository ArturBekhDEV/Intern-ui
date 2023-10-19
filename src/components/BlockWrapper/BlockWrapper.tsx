import Box from "@mui/material/Box";
import { styles } from "@/components/BlockWrapper/BlockWrapper.styles";
import { ReactElement, FC } from "react";
import { SxProps } from "@mui/material";
import { spliceSx } from "@/utils/splice-sx";

interface BlockWrapperProps {
  children: ReactElement | ReactElement[];
  sx?: SxProps;
}

const BlockWrapper: FC<BlockWrapperProps> = ({ children, sx }) => {
  return <Box sx={spliceSx(styles.root, sx)}>{children}</Box>;
};

export default BlockWrapper;
