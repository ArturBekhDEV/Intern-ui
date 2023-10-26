import { Box, CircularProgress } from "@mui/material";
import { styles } from "@/components/Loader/Loader.styles";
import { FC } from "react";

interface LoaderProps {
  size?: number;
}

const Loader: FC<LoaderProps> = ({ size = 100 }) => {
  return (
    <Box sx={styles.root} data-testid="loader">
      <CircularProgress size={size} />
    </Box>
  );
};

export default Loader;
