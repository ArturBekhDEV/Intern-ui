import PageWrapper from "@/components/PageWrapper/PageWrapper";
import { useAuth } from "@/context/hook";
import { Box, Typography } from "@mui/material";
import { FC, useState } from "react";
import { ToastContainer } from "react-toastify";
import { styles } from "@/pages/AdminHome/AdminHome.styles";
import Header from "@/components/Header/Header";
import AppButton from "@/components/AppButton/AppButton";
import UserTable from "@/components/UserTable/UserTable";
import { useAxios } from "@/hooks/use-axios";
import { userService } from "@/services/user-service";
import { toast } from "react-toastify";
import { baseToastifyConfig } from "@/configs/toastify";
import { UserResponse, GetUsersParams } from "@/services/services.types";
import Loader from "@/components/Loader/Loader";
import { dataRowType } from "@/components/UserTable/UserTable.constans";

export interface AdminHomeProps {
  onLogOut: () => void;
}
const AdminHome: FC<AdminHomeProps> = ({ onLogOut }) => {
  const { state } = useAuth();
  const [userData, setUserData] = useState<UserResponse>();
  const [userTableData, setUserTableData] = useState<dataRowType[] | null>(
    null
  );

  const params: GetUsersParams = {
    page: 0,
    countPerPage: 10,
  };

  const userDataTable = (data: dataRowType[] | null) => {
    setUserTableData(data);
  };

  const onSuccess = (response?: UserResponse) => {
    setUserData(response);
  };
  const onError = (msg: string) => {
    toast.error(msg, baseToastifyConfig);
  };

  useAxios({
    params,
    service: userService.getUsers,
    onSuccess,
    onError,
    requestOnRender: true,
  });

  return (
    <>
      <Header contentMaxWidth="lg">
        <Typography variant="h6">
          Hi,
          <span style={styles.name}>{` ${state.firstName}${
            state.lastName ? ` ${state.lastName}` : ""
          }`}</span>
          . You are logged in as an administrator
        </Typography>
        <AppButton
          onClick={onLogOut}
          sx={styles.headerBtn}
          variant="contained"
          data-testid="logoutBtn"
        >
          Log Out
        </AppButton>
      </Header>
      <PageWrapper breakpoint={"lg"}>
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
        <Box sx={{ marginTop: "30px" }}>
            {userData ? (
              <UserTable
                response={userData.items}
                handleUserData={userDataTable}
              />
            ) : (
              <Loader />
            )}
          </Box>
      </PageWrapper>
      <ToastContainer />
    </>
  );
};

export default AdminHome;
