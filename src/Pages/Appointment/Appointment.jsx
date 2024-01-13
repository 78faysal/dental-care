import { useState } from "react";
import { Calendar } from "react-date-range";
import appointmentImg from "../../assets/appointment/den_care.jpg";
import ServiceItem from "./ServiceItem";
import service1 from "../../assets/appointment/service1.png";
import service2 from "../../assets/appointment/service2.png";
import service3 from "../../assets/appointment/service3.png";
import service4 from "../../assets/appointment/service4.png";
import service5 from "../../assets/appointment/service5.png";
import service6 from "../../assets/appointment/service6.png";
import { format } from "date-fns";
import useAuth from "../../Hooks/useAuth";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Appointment = () => {
  const { user } = useAuth();
  const [modalName, setModalName] = useState(null);
  const [modalPrice, setModalPrice] = useState(0);
  const [date, setDate] = useState(new Date());

  const handleDateChange = (item) => {
    setDate(item);
  };
  const formattedDate = format(date, "yyyy-MM-dd");

  console.log(modalName);

  const handleModal = (name, price) => {
    document.getElementById("my_modal_3").showModal();

    setModalName(name);
    setModalPrice(price);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const date = form.date.value;
    const time = form.time.value;
    const name = form.name.value;
    const number = form.number.value;
    const email = form.email.value;

    const appointmentInfo = {
      date,
      time,
      name,
      treatment: modalName,
      price: modalPrice,
      number,
      email,
      bookedBy: user?.email,
    };

    console.table(appointmentInfo);
    axiosSecure.post("/appointments", appointmentInfo).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Appointment</title>
      </Helmet>
      <div
        className="mb-20"
        style={{
          backgroundImage: "url(../../assets/appointment/landing-bg.png)",
        }}
      >
        <div className="bg-[#07332F] h-96 text-white p-20 pt-52">
          <p>Home / Appointment</p>
          <h2 className="text-3xl font-semibold">Appointment</h2>
        </div>

        <div className="md:flex max-sm:p-10 md:p-20 gap-10">
          <div
            data-aos="fade-right"
            className="flex-1 mx-auto flex justify-center"
          >
            <Calendar
              className="md:ml-20"
              dateDisplayFormat="yyyy-MM-dd"
              minDate={new Date()}
              onChange={(item) => handleDateChange(item)}
              date={date}
              renderDay={(day) => format(day, "yyyy-MM-dd")}
            />
          </div>
          <div data-aos="fade-left" className="flex-1">
            <img src={appointmentImg} alt="" />
          </div>
        </div>

        <div className="md:px-28 max-sm:px-10 my-20 text-center">
          <p>Available Services</p>
          <h2 className="text-3xl font-bold mb-10">Please select a service.</h2>

          <div
            data-aos="fade-up"
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            <ServiceItem
              image={service1}
              name={"Oral Surgery"}
              price={23}
              handleModal={handleModal}
            />
            <ServiceItem
              image={service2}
              name={"Pediatric Dental"}
              price={100}
              handleModal={handleModal}
            />
            <ServiceItem
              image={service3}
              name={"Cavity Protection"}
              price={230}
              handleModal={handleModal}
            />
            <ServiceItem
              image={service4}
              name={"Teeth Cleaning"}
              price={200}
              handleModal={handleModal}
            />
            <ServiceItem
              image={service5}
              name={"Cosmetic Dentisty"}
              price={60}
              handleModal={handleModal}
            />
            <ServiceItem
              image={service6}
              name={"Teeth Orthodontics"}
              price={150}
              handleModal={handleModal}
            />
          </div>
        </div>

        <dialog
          id="my_modal_3"
          className="modal modal-bottom sm:modal-middle z-10"
        >
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h2 className="text-xl font-bold text-center">{modalName}</h2>
            <form className="card-body" onSubmit={handleFormSubmit}>
              <div className="form-control">
                <input
                  // type="date"
                  name="date"
                  value={formattedDate}
                  readOnly
                  placeholder="Date"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="time"
                  placeholder="Time"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="number"
                  name="number"
                  placeholder="Number"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Appointment;
