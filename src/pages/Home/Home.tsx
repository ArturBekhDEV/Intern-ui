import { useAuth } from "@/context/hook";
import { Roles } from "@/context/types";
import WelcomePage from "@/pages/WelcomePage/WelcomePage";
import AdminHome from "@/pages/AdminHome/AdminHome";
import UserHome from "@/pages/UserHome/UserHome";
import { authService } from "@/services/auth";
import { useAxios } from "@/hooks/use-axios";
import { CurrentUserResponse } from "@/services/services.types";
import { useState } from "react";
import { CircularProgress } from "@mui/material";

const Home = () => {
  const { state, setUser } = useAuth();
  const [loading, setLoading] = useState(true);

  const onSuccess = (data?: CurrentUserResponse) => {
    setUser(data!.role, data!.firstName, data!.lastName);
    setLoading(false);
  };

  useAxios({
    service: authService.currentUser,
    onSuccess,
    requestOnRender: true,
  });
  
  if (state.isAuth && state.role == Roles.Admin) {
    return <AdminHome />;
  }
  if (state.isAuth && state.role == Roles.User) {
    return <UserHome />;
  }

  return loading ? <CircularProgress /> : <WelcomePage />;
};

export default Home;
