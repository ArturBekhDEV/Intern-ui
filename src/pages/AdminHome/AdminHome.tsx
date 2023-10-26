import PageWrapper from "@/components/PageWrapper/PageWrapper";
import { useAuth } from "@/context/hook";
import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { ToastContainer } from "react-toastify";
import { styles } from "@/pages/AdminHome/AdminHome.styles";
import Header from "@/components/Header/Header";
import AppButton from "@/components/AppButton/AppButton";

export interface AdminHomeProps {
  onLogOut: () => void;
}
const AdminHome: FC<AdminHomeProps> = ({ onLogOut }) => {
  const { state } = useAuth();

  return (
    <>
      <Header contentMaxWidth="lg">
        <Typography variant='h6'>
          Hi,
          <span style={styles.name}>{` ${state.firstName}${
            state.lastName ? ` ${state.lastName}` : ""
          }`}</span>
          . You are logged in as an administrator
        </Typography>
        <AppButton onClick={onLogOut} sx={styles.headerBtn} variant="contained" data-testid="logoutBtn">
          Log Out
        </AppButton>
      </Header>
      <PageWrapper>
        <Box data-testid="admin-home-page" sx={styles.contentContainer}>
          <AppButton>New user</AppButton>
          <Box>
            <AppButton disabled sx={styles.editBtn}>
              Edit
            </AppButton>
            <AppButton disabled sx={styles.deleteBtn}>
              Delete
            </AppButton>
          </Box>
        </Box>
      </PageWrapper>
      <ToastContainer />
    </>
  );
};

export default AdminHome;
