import axios from "axios";
import envs from "./envs";

const createAxiosInstance = (baseURL: string) => {
  const axiosInstance = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      // You can add authorization tokens or other headers here
      const token = localStorage.getItem("authToken") || envs.AUTH_TOKEN;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      // Handle global errors here
      if (error.response && error.response.status === 401) {
        // Handle unauthorized access, e.g., redirect to login
      }
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

export const axiosV1Instance = createAxiosInstance(envs.API_V1_URL);
