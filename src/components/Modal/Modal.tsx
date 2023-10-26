import { Box } from "@mui/material";
import { FC, ReactNode } from "react";
import { styles } from "@/components/Modal/Modal.styles";
import { Modal as MUIModal, ModalProps as MUIModalProps } from "@mui/material";

interface ModalProps
  extends Omit<MUIModalProps, "children" | "open" | "handleClose"> {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

const Modal: FC<ModalProps> = ({ children, isOpen, handleClose, ...props }) => {
  return (
    <MUIModal
      onClose={handleClose}
      open={isOpen}
      {...props}
      data-testid="modal"
      >
      <Box sx={styles.root}>{children}</Box>
    </MUIModal>
  );
};

export default Modal;
