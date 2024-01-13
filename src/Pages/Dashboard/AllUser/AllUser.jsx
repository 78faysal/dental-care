import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Updated",
              text: "User got admin role",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      <h2>All Users: {users.length}</h2>

      <div>
        <div className="overflow-x-auto">
          <table className="table mt-10">
            {/* head */}
            <thead>
              <tr className="bg-base-200">
                <th>#</th>
                <th>Image</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user._id}>
                  <th>{idx + 1}</th>
                  <th>
                    <img
                      src={user.image}
                      className="w-10 h-10 rounded-full"
                      alt=""
                    />
                  </th>
                  <td>{user.email}</td>
                  <td>
                    {user.role ? (
                      <p>Admin</p>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user._id)}
                        className="btn btn-sm bg-green-800 text-white"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td>
                    <button className="btn bg-green-800 text-white">
                      Remove User
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
