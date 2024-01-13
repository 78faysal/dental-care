import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import useAdmin from "../../../Hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();

  console.log(isAdmin);

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your account will be sign out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Sign Out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {})
          .catch((err) => {
            console.log(err.message);
          });
      }
    });
  };

  const navLinks = (
    <>
      <li className="block py-2 transition duration-300 border-b border-transparent hover:border-green-500">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="block py-2 transition duration-300 border-b border-transparent hover:border-green-500">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="block py-2 transition duration-300 border-b border-transparent hover:border-green-500">
        <NavLink to="/appointment">Appointment</NavLink>
      </li>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} className=" rounded-full border m-1">
          {user?.photoURL ? (
            <img
              src={`${user?.photoURL}`}
              className="w-10 h-10 rounded-full object-cover"
              alt=""
            />
          ) : (
            <FaUser className="text-xl" />
          )}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-opacity-40 bg-black rounded-box w-52"
        >
          <li className="hover:bg-green-700  transition duration-300">
            <Link to={`/dashboard/${isAdmin?.admin === true ? 'allUser' : 'myAppointments'}`}>Dashboard</Link>
          </li>
          {user ? (
            <li className="hover:bg-green-700  transition duration-300">
              <button onClick={handleLogOut} className=" pt-4">
                Sign Out
              </button>
            </li>
          ) : (
            <li className="block hover:bg-green-700 transition duration-300">
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </ul>
      </div>
    </>
  );

  return (
    <div className="navbar bg-base-100 fixed left-0 md:px-28 z-20 bg-opacity-20 bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost font-bold text-2xl">Dental Care.</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center">
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
