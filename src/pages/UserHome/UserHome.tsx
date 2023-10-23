import { useAuth } from "@/context/hook";
import { FC } from "react";
import { ToastContainer } from "react-toastify";

export interface UserHomeProps {}
const UserHome: FC<UserHomeProps> = () => {
  const { state } = useAuth();
  return (
    <div>
      You are default USER {state.firstName} - {state.lastName}
      <ToastContainer />
    </div>
  );
};

export default UserHome;
