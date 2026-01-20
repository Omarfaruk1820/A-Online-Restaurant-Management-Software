import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../Auth/useAuth";

const axiosSecure = axios.create({
  baseURL: "https://bistro-boss-resturant-server-side-psi.vercel.app",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  axiosSecure.interceptors.request.use((config) => {
    const token = localStorage.getItem("access-token");
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  });

  axiosSecure.interceptors.response.use(
    (res) => res,
    async (error) => {
      const status = error.response?.status;

      if (status === 401) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
