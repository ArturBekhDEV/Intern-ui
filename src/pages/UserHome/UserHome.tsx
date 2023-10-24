import PageWrapper from "@/components/PageWrapper/PageWrapper";
import { useAuth } from "@/context/hook";
import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { ToastContainer } from "react-toastify";
import { styles } from "@/pages/UserHome/UserHome.styles";
import Header from "@/components/Header/Header";
import Public from "@mui/icons-material/Public";
import AppButton from "@/components/AppButton/AppButton";

export interface UserHomeProps {
  onLogOut: () => void;
}

const UserHome: FC<UserHomeProps> = ({ onLogOut }) => {
  const { state } = useAuth();

  return (
    <>
      <Header contentMaxWidth="lg">
        <Typography variant="h6" sx={styles.headerText}>
          Hi,
          <span style={styles.name}>{` ${state.firstName}${
            state.lastName ? ` ${state.lastName}` : ""
          }`}</span>
          . Welcome to our website
        </Typography>
        <AppButton
          data-testid="logoutBtn"
          onClick={onLogOut}
          sx={styles.headerBtn}
        >
          Log Out
        </AppButton>
      </Header>
      <PageWrapper>
        <Box data-testid="user-home-page" sx={styles.iconContainer}>
          <Public sx={styles.icon} />
        </Box>
        <Box sx={styles.iconContainer}>
          <Public sx={styles.icon} />
        </Box>
        <Typography
          sx={styles.contentSoonText}
          variant="h6"
          data-testid="contentTxt"
        >
          Content will be soon...
        </Typography>
        <ToastContainer />
      </PageWrapper>
    </>
  );
};

export default UserHome;
