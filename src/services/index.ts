import { getEnv } from "@/utils/getEnv";
import { storage } from "@/utils/local-storage";
import axios from "axios";

export const axiosClient = axios.create({
  baseURL: getEnv("apiUrl"),
});

export const axiosClientWithCredentials = axios.create({
  baseURL: getEnv("apiUrl"),
});

axiosClientWithCredentials.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    if (error?.response?.body?.statusCode === 401 || error?.response?.status === 401) {
      storage.remove("token");
    }
    throw error;
  }
);

axiosClientWithCredentials.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${storage.get("token")}`;
    return config;
  }
  return config;
});
