import { getEnv } from "@/utils/getEnv";
import { getFromStorage } from "@/utils/local-storage";
import axios from "axios";

export const axiosClient = axios.create({
  baseURL: getEnv('apiUrl'),
});

export const axiosClientWithCredentials = axios.create({
  baseURL: getEnv('apiUrl'),
  headers: {
    Authorization: `Bearer ${getFromStorage('token')}`
  }
})