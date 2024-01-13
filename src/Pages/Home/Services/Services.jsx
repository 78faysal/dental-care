import sideImg from "../../../assets/img.png";
import teathImg from "../../../assets/teathImg.png";

const Services = () => {
  return (
    <div className="md:flex gap-10 my-20">
      <div data-aos="fade-right" className="flex-1">
        <img src={sideImg} className="mx-auto" alt="" />
      </div>
      <div data-aos="fade-left" className="flex-1 space-y-5">
        <h2 className="text-3xl font-semibold">Our Services</h2>
        <p>
        Discover excellence in dental care at Your Best Dental. From preventive treatments to specialized procedures, our dedicated team ensures your smile stays healthy and vibrant
        </p>
        <div className="flex text-black">
          <h2 className="px-10 rounded bg-[#F7A582] hover:bg-gray-200 py-5">
            Cavity Protection
          </h2>
          <h2 className="px-10 rounded bg-gray-200 hover:bg-[#F7A582] py-5">
            Cosmetic Dentisty
          </h2>
          <h2 className="px-10 rounded bg-gray-200 hover:bg-[#F7A582] py-5">
            Oral Surgery
          </h2>
        </div>
        <div>
          <div>
            <img className="my-10" src={teathImg} alt="" />
          </div>
        </div>
        <h2 className="text-3xl font-semibold">Electro Gastrology Therapy</h2>
        <p>
        Experience the transformative Electro Gastrology Therapy at its finest. Our advanced techniques ensure optimal well-being, combining innovative approaches with personalized care for lasting results.
        </p>
        <p>
        Whether you are seeking relief from specific digestive issues or aiming to enhance your overall wellness, our expert team is dedicated to providing effective and compassionate care that goes beyond expectations.
        </p>
        <button className="btn btn-primary">More Details</button>
      </div>
    </div>
  );
};

export default Services;
