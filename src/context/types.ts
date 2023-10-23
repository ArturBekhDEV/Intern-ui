import { ReactNode } from "react";

export interface AuthProviderProps {
  children: ReactNode
}

export enum Roles {
  User = "USER",
  Admin = "ADMIN",
}

export interface InitialValues {
  role: Roles | string;
  isAuth: boolean;
  firstName: string
  lastName?: string
}

export type ContextInitialValues = {
  state: InitialValues;
  setAuth: (role: Roles | string, firstName: string) => void
  removeAuth: () => void
  setUser: (role: Roles | string, firstName: string, lastName?: string) => void
}
