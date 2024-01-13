import { Link } from "react-router-dom";
import img1 from "../../../assets/ban1.jpg";
import img2 from "../../../assets/ban2.jpg";
import img3 from "../../../assets/ban3.jpg";
// import svgBg from "../../../assets/banner-bg.svg";

const Banner = () => {
  return (
    <div>
      <div className="flex max-sm:flex-col max-sm:px-5 gap-20 max-sm:pt-28 bg-[#07332F] text-white justify-center min-h-screen items-center absolute top-0 w-full left-0">
        <div data-aos="fade-up" className="space-y-5">
          <h1 className="md:text-6xl font-semibold">
            Your Best Dental <br /> Help Center
          </h1>
          <p>
            Welcome to Your Best Dental, where your oral health is our priority.{" "}
            <br /> Our team of experienced professionals is dedicated to
            providing top-notch dental care.
          </p>
          <Link className="btn btn-primary btn-outline" to={'/appointment'}>
          <button>Book an Appointment</button>
          </Link>
        </div>
        <div
          data-aos="fade-up"
          className="flex items-center static gap-10 md:mb-24"
        >
          <img
            className="h-80 max-sm:w-32 max-sm:h-56 w-56 rounded-full w-full z-0"
            src={img2}
            alt=""
          />
          <img
            className="h-80 rounded-full max-sm:translate-y-24 translate-y-36 z-10 absolute w-56 max-sm:w-32 max-sm:h-56 max-sm:translate-x-24 translate-x-36"
            src={img1}
            alt=""
          />
          <img
            className="h-80 rounded-full max-sm:w-32 max-sm:h-56 z-0"
            src={img3}
            alt=""
          />
        </div>
      </div>
      {/* <div className="min-h-screen"></div>
      <svg className="w-full absolute" id="visual" viewBox="0 0 1500 540" width="1500" height="540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="960" height="540" fill="#ffffff"></rect><path d="M0 206L80 207.3C160 208.7 320 211.3 480 220.5C640 229.7 800 245.3 880 253.2L960 261L960 0L880 0C800 0 640 0 480 0C320 0 160 0 80 0L0 0Z" fill="#07332F" strokeLinecap="round" strokeLinejoin="miter"></path></svg> */}
    </div>
  );
};

export default Banner;
