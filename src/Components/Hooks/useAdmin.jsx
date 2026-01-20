import { useQuery } from "@tanstack/react-query";
import useAuth from "../Auth/useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin = false, isLoading } = useQuery({
    queryKey: ["admin", user?.email],
    enabled: !loading && !!user?.email,
    retry: false,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/admin/${user.email}`);
      return res.data.admin;
    },
  });

  return [isAdmin, isLoading];
};

export default useAdmin;
