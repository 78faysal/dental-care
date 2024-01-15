import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";
import AppointmentItem from "./AppointmentItem";
import CheckoutForm from "./CheckoutForm";

const MyAppointment = () => {
  const axiosSecure = useAxiosSecure();
  const [modalData, setModalData] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState({});

  const { user } = useAuth();

  const {
    data: appointments = [],
    isPending: appointmentLoading,
    refetch
  } = useQuery({
    queryKey: ["appointmenst", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/appointments/${user?.email}`);
        // console.log(res.data);
      return res.data;
    },
  });

  if (appointmentLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  if (!appointments.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-3xl font-bold text-center">
          You have no appointments
        </h2>
      </div>
    );
  }

  const handlePay = (appointmentInfo) => {
    document.getElementById("my_modal_3").showModal();
    // console.log(appointmentInfo);
    setModalData(appointmentInfo);
  };

  // if(paymentInfo.id){
  //   refetch();
  // }

  // console.log(modalData);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center">
        Total appointments: {appointments.length}
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table mt-10">
            <thead>
              <tr className="bg-base-200">
                <th>#</th>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Treatment</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((item, idx) => (
                <AppointmentItem
                  key={idx}
                  item={item}
                  handlePay={handlePay}
                  idx={idx}
                  paymentId={paymentInfo?.id}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <dialog
        // open={isOpen}
        id="my_modal_3"
        className="modal modal-bottom sm:modal-middle z-10"
      >
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h2 className="text-xl font-bold text-center">
            {modalData?.treatment}
          </h2>
          <CheckoutForm refetch={refetch} setPaymentInfo={setPaymentInfo} modalData={modalData} />
        </div>
      </dialog>
    </div>
  );
};

export default MyAppointment;
