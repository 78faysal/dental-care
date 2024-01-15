import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";
import useAxiosPublic from "./useAxiosPublic";

const useAdmin = () => {
  const { user, loading } = useAuth();
  // const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic()

  console.log(loading);

  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      console.log(loading);
      const res = await axiosPublic.get(`/users/admin/${user?.email}`);
      return res.data;
    },
  });
  console.log(isAdmin);

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
