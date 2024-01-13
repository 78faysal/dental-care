import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="hero min-h-screen bg-[#07332F] text-white p-10 mb-20 absolute left-0">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" lg:text-left flex-1 p-5">
          <h1 className="text-5xl font-bold">Contact With Us</h1>
          <p className="py-4">
          Connect with us for personalized care and assistance. Our team is here to address your needs and provide you with the support you deserve. Experience the difference in care with Your Best Dental.
          </p>
          <p className="flex items-center gap-3 mb-4">
            <FaPhoneAlt className=" text-xl" /> +88 01750 14 14 14
          </p>
          <p className="flex items-center gap-3">
            <FaMapMarkerAlt className=" text-xl" /> Dhanmondi, Dhaka, Bangladesh
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-2xl text-white flex-1">
          <form className="card-body">
            <div className="md:flex gap-5 justify-center">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered text-black w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered text-black w-full"
                  required
                />
              </div>
            </div>
            <div className="md:flex gap-5 justify-center">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Number</span>
                </label>
                <input
                  type="number"
                  placeholder="Number"
                  className="input input-bordered text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Doctor Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered text-black"
                  required
                />
              </div>
            </div>
            <div className="md:flex gap-5 justify-center">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Date</span>
                </label>
                <input
                  type="date"
                  placeholder="Date"
                  className="input input-bordered text-black px-10"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Time</span>
                </label>
                <input
                  type="text"
                  placeholder="Time"
                  className="input input-bordered text-black"
                  required
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary w-[84%] mx-auto">Book Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
