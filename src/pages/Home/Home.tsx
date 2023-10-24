import { useAuth } from "@/context/hook";
import { Roles } from "@/context/types";
import WelcomePage from "@/pages/WelcomePage/WelcomePage";
import AdminHome from "@/pages/AdminHome/AdminHome";
import UserHome from "@/pages/UserHome/UserHome";
import { authService } from "@/services/auth";
import { useAxios } from "@/hooks/use-axios";
import { CurrentUserResponse } from "@/services/services.types";
import { useState } from "react";
import Loader from "@/components/Loader/Loader";
import { toast } from "react-toastify";
import { baseToastifyConfig } from "@/configs/toastify";

const Home = () => {
  const { state, setUser, removeAuth } = useAuth();
  const [loading, setLoading] = useState(true);

  const onSuccess = (data?: CurrentUserResponse) => {
    setUser(data!.role, data!.firstName, data!.lastName);
    setLoading(false);
  };

  const onError = (msg: string) => {
    if (state.isAuth) toast.error(msg, baseToastifyConfig);
    setLoading(false);
  };

  const onLogOut = () => {
    removeAuth();
  };
  useAxios({
    service: authService.currentUser,
    onSuccess,
    onError,
    requestOnRender: true,
  });

  if (loading) return <Loader />;

  if (state.isAuth && state.role == Roles.Admin) {
    return <AdminHome onLogOut={onLogOut} />;
  }
  if (state.isAuth && state.role == Roles.User) {
    return <UserHome onLogOut={onLogOut} />;
  }

  return <WelcomePage />;
};

export default Home;
