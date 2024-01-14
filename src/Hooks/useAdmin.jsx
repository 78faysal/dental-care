import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
   const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  console.log(loading);

  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email ], 
    enabled: !!loading,
    queryFn: async () => {
      console.log(loading);
      // if (user) {
        const res = await axiosSecure.get(`/users/admin/${user?.email}`);
        // axiosSecure.get(`/users/admin/${user?.email}`)
        // .then(res => {
        //   console.log(res.data);
          return res.data;
        // })
      //   .catch(error => {
      //     console.log(error);
      //   })
      // }
      // return null;
    },
  });
  console.log(isAdmin);

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
