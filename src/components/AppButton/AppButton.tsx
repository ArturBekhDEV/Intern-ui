import { spliceSx } from "@/utils/splice-sx";
import { Button, SxProps, ButtonProps } from "@mui/material";
import { FC, ReactNode } from "react";
import { styles } from "./AppButton.styles";

interface AppButtonProps extends ButtonProps {
  children: ReactNode | string;
  sx?: SxProps;
}
const AppButton: FC<AppButtonProps> = ({
  children,
  variant = "contained",
  sx,
  ...props
}) => {
  return (
    <Button {...props} variant={variant} sx={spliceSx(styles.root, sx)}>
      {children}
    </Button>
  );
};

export default AppButton;
