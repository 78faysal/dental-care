import { useEffect, useState } from "react";
import ReactStarsRating from "react-awesome-stars-rating";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/doctors").then((res) => {
      setDoctors(res.data);
    });
  }, [axiosPublic]);
  return (
    <div className="mb-20">
      <div className="text-center">
        <h2 className="text-4xl font-semibold mb-2">Our Expert Doctors</h2>
        <p>
          Meet our seasoned team of expert doctors dedicated to your well-being.
          With a wealth of experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {doctors.slice(0,3).map((doctor, idx) => (
          <div
            data-aos="fade-up"
            key={idx}
            className="card bg-base-100 shadow-xl"
          >
            <figure className="px-10 pt-10">
              <img
                src={doctor?.image}
                alt=""
                className="rounded-xl w-72 h-56 object-cover object-center"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{doctor?.name}</h2>
              {/* <p>{doctor?.profile?.qualifications}</p> */}
              <ReactStarsRating
                isEdit={false}
                className="flex mb-4"
                value={doctor?.rating}
              />
              <p className="font-bold">Services:</p>
              {doctor?.services.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
              <div className="card-actions">
                <Link
                  className="mx-auto mt-4"
                  to={`/doctorDetail/${doctor?._id}`}
                >
                  <button className="btn btn-primary">View Profile</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
