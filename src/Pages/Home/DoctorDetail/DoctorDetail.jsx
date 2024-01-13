import { useLoaderData } from "react-router-dom";
import ReactStarsRating from "react-awesome-stars-rating";
import { CiLocationOn } from "react-icons/ci";
import { Helmet } from "react-helmet-async";

const DoctorDetail = () => {
  const doctorData = useLoaderData();
  const { image, name, rating, totalRating, services, aboutMe, location, degrees } =
    doctorData;
  return (
    <div className="bg-base-200 mb-20">
      <Helmet>
        <title>Doctor Detail</title>
      </Helmet>
      <div className="bg-[#07332F] h-96 text-white p-20 pt-52">
        <p>Home / Doctor Profile</p>
        <h2 className="text-3xl font-semibold">Doctor Profile</h2>
      </div>
      <div>
        <div className="md:flex justify-center items-center max-w-3xl bg-white p-10 rounded-lg gap-5 mx-auto rounded my-10">
          <figure>
            <img
              src={image}
              alt=""
              className="w-96 mx-auto h-96 object-cover object-center"
            />
          </figure>
          <div className="space-y-3">
            <h2 className="text-3xl font-bold">{name}</h2>
            <p>{degrees.map((item, idx) => <span key={idx}>{item}, </span>)}</p>
            <p className="flex ">
              <ReactStarsRating
                isEdit={false}
                className="flex mb-4"
                value={rating}
              />{" "}
              ({rating})
            </p>
            <p className="flex items-center gap-2">
              <CiLocationOn /> {location}
            </p>
            <div className="flex flex-wrap gap-4">
              {services.map((item, idx) => (
                <button className="btn btn-outline" key={idx}>
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div role="tablist" className="tabs tabs-lifted p-5">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab px-10"
            aria-label="Overview"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <div>
              <div>
                <h2 className="text-xl font-bold">About Me</h2>
                <p>{aboutMe}</p>
              </div>
              <div></div>
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Location"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <p className="flex items-center gap-2">
              <CiLocationOn /> {location}
            </p>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Reviews"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Total Reviews: {totalRating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
