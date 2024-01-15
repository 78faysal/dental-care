import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../Hooks/useAuth";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const ContinueWith = () => {
    const {googleSignIn} = useAuth();
    // const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleContinue = () => {
        googleSignIn()
        .then((res) => {
            axiosPublic.patch("/users", { name: res.user.displayName, email: res.user.email, image: res.user.photoURL })
            .then((res) => {
                console.log(res.data);
                if (res.data.insertedId || res.data.matchedCount > 0) {
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Logged in successfully",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate('/')
                }
              });
        })
        .catch(err => {
            console.log(err.message);
        })
    }
    return (
        <div>
            <h2 onClick={handleContinue} className="text-xl font-semibold text-center flex gap-2 btn items-center">Continue With<FcGoogle className="text-2xl" /></h2>
        </div>
    );
};

export default ContinueWith;