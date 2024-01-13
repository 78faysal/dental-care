import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Doctors from "../Doctors/Doctors";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Dental Care. | Home</title>
      </Helmet>
      <Banner />
      <div className="min-h-screen"></div>
      <Services />
      <Doctors />
      <Contact />
      <div className="min-h-screen mb-20"></div>
    </div>
  );
};

export default Home;
