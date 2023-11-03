import { FC, createContext, useState } from "react";
import {
  AuthProviderProps,
  ContextInitialValues,
  InitialValues,
  Roles,
} from "./types";
import { storage } from "@/utils/local-storage";

const initialValues = {
  role: "",
  isAuth: !!storage.get("token"),
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
    setState({ role, isAuth: !!storage.get("token"), firstName });
  };

  const removeAuth = () => {
    storage.remove("token");
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
  return (
    <AuthContext.Provider value={defaultValue}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
