import { axiosClientWithCredentials } from ".";
import { CreateUserResponse } from "@/services/services.types";
import { AxiosResponse } from "axios";

export const usersService = {
  async createUser(
    dto?: Record<string, string>
  ): Promise<AxiosResponse<CreateUserResponse>> {
    return await axiosClientWithCredentials.post("/users", dto);
  },
};
