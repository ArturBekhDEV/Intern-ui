import PageWrapper from "@/components/PageWrapper/PageWrapper";
import { useAuth } from "@/context/hook";
import { Box, Typography } from "@mui/material";
import { FC, useState } from "react";
import UserTable from "@/components/UserTable/UserTable";
import { userService } from "@/services/user-service";
import { baseToastifyConfig } from "@/configs/toastify";
import { UserResponse, GetUsersParams } from "@/services/services.types";
import Loader from "@/components/Loader/Loader";
import { dataRowType } from "@/components/UserTable/UserTable.constans";
import { ToastContainer, toast } from "react-toastify";
import { styles } from "@/pages/AdminHome/AdminHome.styles";
import Header from "@/components/Header/Header";
import AppButton from "@/components/AppButton/AppButton";
import Modal from "@/components/Modal/Modal";
import NewUserForm from "@/components/NewUserForm/NewUserForm";
import { FormikHelpers } from "formik";
import { useAxios } from "@/hooks/use-axios";
import { usersService } from "@/services/users";
import { CreateUserResponse } from "@/services/services.types";
import EditUserForm from "@/components/EditUserForm/EditUserForm";

export interface AdminHomeProps {
  onLogOut: () => void;
}

const AdminHome: FC<AdminHomeProps> = ({ onLogOut }) => {
  const { state } = useAuth();
  const [userData, setUserData] = useState<UserResponse>({
    items: [],
    counts: 0,
  });

  const [chosenUsers, setChosenUsers] = useState<dataRowType[]>([]);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<"new-user" | "edit" | "">("");

  const params: GetUsersParams = {
    page: 0,
    countPerPage: 10,
  };

  const onSuccessUserDeletion = () => {
    toast.success('Users were successfully deleted', baseToastifyConfig)
  }

  const onError = (msg: string) => {
    toast.error(msg, baseToastifyConfig);
  };


  const { request } = useAxios({
    service: userService.deleteUsers,
    onSuccess: onSuccessUserDeletion,
    onError:onError
  });

  const onDeleteUsers = () => {
    const ids = chosenUsers.map( u => u.id)
    void request(ids)
  }

  const handleUsers = (data: dataRowType[]) => {
    setChosenUsers(data);
  };

  const onSuccess = (response?: UserResponse) => {
    setUserData(response || { items: [], counts: 0 });
  };

  const { refetch } = useAxios({
    params,
    service: userService.getUsers,
    onSuccess,
    onError,
    requestOnRender: true,
  });

  const onSuccessUserCreation = (data?: CreateUserResponse) => {
    toast.success(`User ${data?.email} was created`, baseToastifyConfig);
    void refetch();
  };

  const { request: createUser } = useAxios({
    service: usersService.createUser,
    onSuccess: onSuccessUserCreation,
    onError: onError,
  });

  const handleOpenNewUser = () => {
    setModalType("new-user");
    setOpen(true);
  };
  const handleOpenEditUser = () => {
    setModalType("edit");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setModalType("");
  };

  const onSubmitNewUser = async (
    values: Record<string, string>,
    helpers: FormikHelpers<Record<string, string>> | undefined
  ) => {
    createUser(values);
    helpers?.resetForm();
  };

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
          <AppButton onClick={handleOpenNewUser} data-testid="newUserBtn">
            New user
          </AppButton>
          {isOpen && (
            <Modal isOpen={isOpen} handleClose={handleClose}>
              {modalType == "new-user" && (
                <NewUserForm onSubmit={onSubmitNewUser} />
              )}
            </Modal>
          )}
          <Box>
            <AppButton
              disabled={!chosenUsers || chosenUsers.length !== 1}
              sx={styles.editBtn}
              onClick={handleOpenEditUser}
            >
              Edit
            </AppButton>
            {isOpen && modalType === "edit" && (
              <Modal isOpen={isOpen} handleClose={handleClose}>
                <EditUserForm
                  onSubmit={async () => console.log("hello")}
                  userData={chosenUsers}
                />
              </Modal>
            )}
            <AppButton onClick={onDeleteUsers} disabled={!chosenUsers.length} sx={styles.deleteBtn}>
              Delete
            </AppButton>
          </Box>
        </Box>
        <Box sx={{ marginTop: "30px" }}>
          {userData?.items?.length ? (
            <UserTable response={userData.items} handleUserData={handleUsers} />
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
