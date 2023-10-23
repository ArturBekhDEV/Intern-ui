import {
  CurrentUserResponse,
  GoogleAuthResponse,
  SignInResponse,
  SignUpResponse,
} from "@/services/services.types";
import { axiosClient, axiosClientWithCredentials } from ".";
import { AxiosResponse } from "axios";

export const authService = {
  googleAuth: async (
    token?: string
  ): Promise<AxiosResponse<GoogleAuthResponse>> => {
    return await axiosClient.post("/auth/google", { token });
  },

  signUp: async (
    dto?: Record<string, string>
  ): Promise<AxiosResponse<SignUpResponse>> => {
    return await axiosClient.post("/auth/sign-up", dto);
  },

  signIn: async (
    dto?: Record<string, string>
  ): Promise<AxiosResponse<SignInResponse>> => {
    return await axiosClient.post("/auth/sign-in", dto);
  },

  currentUser: async (): Promise<AxiosResponse<CurrentUserResponse>> => {
    return await axiosClientWithCredentials.get("/auth/current-user")
  }
};
