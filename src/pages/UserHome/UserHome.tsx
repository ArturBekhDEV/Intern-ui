import PageWrapper from "@/components/PageWrapper/PageWrapper";
import { useAuth } from "@/context/hook";
import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { ToastContainer } from "react-toastify";
import { styles } from "@/pages/UserHome/UserHome.styles";
import Header from "@/components/Header/Header";
import Public from "@mui/icons-material/Public";
import AppButton from "@/components/AppButton/AppButton";

export interface UserHomeProps {}
const UserHome: FC<UserHomeProps> = () => {
  const { state, removeAuth } = useAuth();

  const onLogOut = () => removeAuth();

  return (
    <>
      <Header contentMaxWidth="lg">
        <Typography sx={styles.headerText}>
          Hi,
          <span style={styles.name}>{` ${state.firstName}${
            state.lastName ? ` ${state.lastName}` : ""
          }`}</span>
          . Welcome to our website
        </Typography>
        <AppButton onClick={onLogOut} sx={styles.headerBtn}>
          Log Out
        </AppButton>
      </Header>
      <PageWrapper>
        <Box sx={styles.iconContainer}>
          <Public sx={styles.icon} />
        </Box>
        <Typography sx={styles.contentSoonText}>
          Content will be soon...
        </Typography>
        <ToastContainer />
      </PageWrapper>
    </>
  );
};

export default UserHome;
