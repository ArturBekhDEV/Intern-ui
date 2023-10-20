import {
  GoogleAuthResponse,
  SignUpResponse,
} from "@/services/services.types";
import { axiosClient } from ".";
import { AxiosResponse } from "axios";

export const authService = {
  googleAuth: async (
    token?: string
  ): Promise<AxiosResponse<GoogleAuthResponse>> => {
    return await axiosClient.post("/auth/google", { token });
  },

  signUp: async (dto?: Record<string, string>): Promise<AxiosResponse<SignUpResponse>> => {
    return await axiosClient.post("/auth/sign-up", dto);
  },
};
