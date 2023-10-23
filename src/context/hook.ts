import { useContext } from "react";
import { AuthContext } from "./context";
import { ContextInitialValues } from "./types";

export const useAuth = (): ContextInitialValues => {
  return useContext<ContextInitialValues>(AuthContext);
};
