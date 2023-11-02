import { getEnv } from "@/utils/getEnv";
import { getFromStorage } from "@/utils/local-storage";
import { removeFromStorage } from "@/utils/local-storage";
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
    if (error.response.statusCode === 401) {
      removeFromStorage("token");
    }
    throw error;
  }
);

axiosClientWithCredentials.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${getFromStorage("token")}`;
    return config;
  }
  return config;
});
