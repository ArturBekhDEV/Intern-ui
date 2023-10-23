import { useAuth } from "@/context/hook";
import { FC } from "react";
import { ToastContainer } from "react-toastify";

export interface AdminHomeProps {}
const AdminHome: FC<AdminHomeProps> = () => {
  const { state } = useAuth();
  return (
    <div>
      You are admin {state.firstName} - {state.lastName}
      <ToastContainer />
    </div>
  );
};

export default AdminHome;
