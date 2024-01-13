import { Link, Outlet } from "react-router-dom";
import { TbChecklist } from "react-icons/tb";
import { GiTalk } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import useAdmin from "../Hooks/useAdmin";
import { FaUsers } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { IoMdPersonAdd } from "react-icons/io";
import { Helmet } from "react-helmet-async";

const DashboardLayout = () => {
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  return (
    <div className="drawer lg:drawer-open">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ml-5 mt-5">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-300 text-base-content">
          {/* Sidebar content here */}
          <h2 className="text-xl font-bold text-center py-4 border">
            Dental Care.
          </h2>
          {isAdmin?.admin === true ? (
            <div className="text-lg space-y-2 mt-3">
              <li>
                <Link to={"/dashboard/allUser"}>
                  <FaUsers />
                  All User
                </Link>
              </li>
              <li>
                <Link to={"/dashboard/addDoctor"}>
                  <IoMdPersonAdd />
                  Add Doctor
                </Link>
              </li>
              <li>
                <Link to={"/dashboard/manageDoctors"}>
                  <FaUserDoctor />
                  Manage Doctors
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <IoHomeOutline />
                  Go Home
                </Link>
              </li>
            </div>
          ) : (
            <div className="text-lg space-y-2 mt-3">
              <li>
                <Link to={"/dashboard/myAppointments"}>
                  <TbChecklist />
                  My Appointment
                </Link>
              </li>
              <li>
                <Link to={"/dashboard/addReview"}>
                  <GiTalk />
                  Add Review
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <IoHomeOutline />
                  Go Home
                </Link>
              </li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
