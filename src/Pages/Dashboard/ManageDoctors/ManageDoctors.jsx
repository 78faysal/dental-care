import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageDoctors = () => {
    const axiosSecure = useAxiosSecure();

    const {data: doctors = [], refetch} = useQuery({
        queryKey: ['doctors'],
        queryFn: async() => {
            const res = await axiosSecure.get('/doctors');
            return res.data
        }
    })

    const handleRemove = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Remove it!",
          }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure.delete(`/doctors/${id}`).then((res) => {
                if (res.data.deletedCount > 0) {
                  Swal.fire({
                    title: "Removed",
                    text: "Doctor removed from the database",
                    icon: "success",
                  });
                  refetch();
                }
              });
            }
          });
    }
    return (
        <div>
            <h2>Total Doctors: {doctors.length}</h2>

            <div>
            <div className="overflow-x-auto">
          <table className="table mt-10">
            {/* head */}
            <thead>
              <tr className="bg-base-200">
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Specialty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor, idx) => (
                <tr key={doctor._id}>
                  <th>{idx + 1}</th>
                  <th>
                    <img
                      src={doctor?.image}
                      className="w-14 h-14 object-cover rounded-full"
                      alt=""
                    />
                  </th>
                  <td className="font-bold">{doctor?.name}</td>
                  <td>
                    {doctor?.services.map((item, idx) => <p key={idx}>{item}, </p>)}
                  </td>
                  <td>
                    <button onClick={() => handleRemove(doctor._id)} className="btn btn-sm bg-green-800 text-white">
                      Remove doctor
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

export default ManageDoctors;