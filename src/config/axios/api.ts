import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ detail: string }>) => {
    throw new Error(error.response?.data?.detail ?? error.message);
  },
);

export default api;
