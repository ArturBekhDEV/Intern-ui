import { FC, createContext, useState } from "react";
import {
  AuthProviderProps,
  ContextInitialValues,
  InitialValues,
  Roles,
} from "./types";
import { getFromStorage, removeFromStorage } from "@/utils/local-storage";

const initialValues = {
  role: "",
  isAuth: !!getFromStorage("token"),
  firstName: '',
  lastName: ''
};

const contextInitialValues = {
  state: initialValues,
  setAuth: (role: Roles | string) => console.log(role),
  removeAuth: () => {},
  setUser: (role: Roles | string, firstName: string, lastName?: string) => console.log(role, firstName, lastName)
};

const AuthContext = createContext<ContextInitialValues>(contextInitialValues);

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, setState] = useState<InitialValues>(initialValues);

  const setAuth = (role: Roles | string, firstName: string) => {
    setState({ role, isAuth: !!getFromStorage("token"), firstName });
  };

  const removeAuth = () => {
    removeFromStorage("token");
    setState({ role: "", isAuth: false, firstName: '', lastName: '' });
  };

  const setUser = (role: Roles | string, firstName: string, lastName?: string) => {
    setState(prev => ({...prev, role, firstName, lastName }))
  }

  const value = { state, setAuth, removeAuth, setUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
