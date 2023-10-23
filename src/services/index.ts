import { getFromStorage } from "@/utils/local-storage";
import axios from "axios";

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const axiosClientWithCredentials = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${getFromStorage('token')}`
  },
  withCredentials: true
})