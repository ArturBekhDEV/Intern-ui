import { axiosClientWithCredentials } from ".";
import {
  CreateUserResponse,
  UpdateUserResponse,
  GetUsersParams,
  UserResponse,
} from "@/services/services.types";

import { AxiosResponse } from "axios";

export const usersService = {
  async createUser(
    dto?: Record<string, string>
  ): Promise<AxiosResponse<CreateUserResponse>> {
    return await axiosClientWithCredentials.post("/users", dto);
  },
  async updateUser(
    dto?: Record<string, string>,
    userId?: string
  ): Promise<AxiosResponse<UpdateUserResponse>> {
    return await axiosClientWithCredentials.patch(`/users/${userId}`, dto);
  },
  getUsers: async (
    params?: GetUsersParams
  ): Promise<AxiosResponse<UserResponse>> => {
    return await axiosClientWithCredentials.get("/users", { params });
  },
};
