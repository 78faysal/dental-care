import { Helmet } from "react-helmet-async";
import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img3.jpg";
import img3 from "../../../assets/img4.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center md:pt-24 max-sm:pt-20 mb-10">About Us</h2>

      <div className="grid md:grid-cols-2 gap-10 items-center ">
        <div data-aos="fade-right" className="relative">
          <img className="z-0" src={img2} alt="" />
          <img
            className="absolute w-40 rounded-full z-10 top-0 right-0 -translate-y-5 translate-x-6 border border-4 border-green-600"
            src={img1}
            alt=""
          />
        </div>
        <div data-aos="fade-left">
          <div className="text-right right-0 my-10">
            <h2 className="text-3xl font-bold mb-4">Make your dream <br /> smile a reality!</h2>
            <p>Transform your aspirations for a radiant smile into reality! With a commitment to personalized care, our dental clinic aims to enhance your well-being. Our experienced team focuses on creating a comfortable environment, addressing your unique needs with precision.</p>
          </div>
          <div className="flex max-sm:flex-col items-center gap-5">
            <div>
              <p>
              At our clinic, we understand the importance of tailored treatments. Our skilled professionals utilize advanced techniques to ensure optimal results. We strive to provide comprehensive solutions.
              </p>
              <Link to={'/appointment'}><button className="btn btn-outline mt-3">Make an Appointment</button></Link>
            </div>
            <img className="md:w-1/2" src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
