import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import { IoMdArrowRoundBack } from "react-icons/io";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  const navigate = useNavigate();

    console.log(isAdminLoading, loading);

  //   TODO: isAdminLoading value change after data get
  if (loading || isAdminLoading) {
    //   if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  if (user && isAdmin?.admin) {
    return children;
  } 
  else if (user && !isAdmin?.admin) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-3xl font-bold text-center">
          403 <br /> Forbidden access
        </h2>
        <p
          onClick={() => navigate(-1)}
          className="text-xl flex items-center gap-2 mt-4 cursor-pointer underline"
        >
          <IoMdArrowRoundBack />
          Go Back
        </p>
      </div>
    );
  }

  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default AdminRoute;
