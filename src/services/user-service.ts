import { AxiosResponse } from "axios";
import { axiosClientWithCredentials } from ".";
import { UserResponse, GetUsersParams } from "./services.types";

export const userService = {
  getUsers: async (
    params?: GetUsersParams
  ): Promise<AxiosResponse<UserResponse>> => {
    return await axiosClientWithCredentials.get("/users", { params });
  },
};
