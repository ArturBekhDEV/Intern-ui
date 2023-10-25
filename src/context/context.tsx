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
  firstName: "",
  lastName: "",
};

const contextInitialValues = {
  state: initialValues,
  setAuth: (role: Roles | string) => console.log(role),
  removeAuth: () => {},
  setUser: (role: Roles | string, firstName: string, lastName?: string) =>
    console.log(role, firstName, lastName),
};

const AuthContext = createContext<ContextInitialValues>(contextInitialValues);

const AuthProvider: FC<AuthProviderProps> = ({ children, value }) => {
  const [state, setState] = useState<InitialValues>(initialValues);

  const setAuth = (role: Roles | string, firstName: string) => {
    setState({ role, isAuth: !!getFromStorage("token"), firstName });
  };

  const removeAuth = () => {
    removeFromStorage("token");
    setState({ role: "", isAuth: false, firstName: "", lastName: "" });
  };

  const setUser = (
    role: Roles | string,
    firstName: string,
    lastName?: string
  ) => {
    setState((prev) => ({ ...prev, role, firstName, lastName }));
  };

  const defaultValue = value ? value : { state, setAuth, removeAuth, setUser };
  console.log("val", defaultValue);
  return (
    <AuthContext.Provider value={defaultValue}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
