import ContinueWith from "../ContinueWith/ContinueWith";
import img from "../../../assets/authenticate.jpg";
import { Link, useNavigate } from "react-router-dom";
import { imageUpload } from "../../../Hooks/imageUpload";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, updateUser } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.files[0];
    const photoData = await imageUpload(photo);
    const password = form.password.value;
    // console.log(photoData?.data?.display_url);

    // create user
    createUser(email, password)
      .then((result) => {
        if (result.user) {
          updateUser(name, photoData?.data?.display_url)
            .then(() => {
              // set user to the database
              axiosSecure.patch("/users", {
                name,
                email,
                image: photoData?.data?.display_url,
              }).then((res) => {
                // console.log(res);
                if (res.data.upsertedId) {
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Account created successfully",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/");
                }
              });
            })
            .catch((err) => {
              console.log(err.message);
            });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="grid md:grid-cols-2 items-center min-h-screen ">
      <div className="">
        <figure>
          <img className="" src={img} alt="" />
        </figure>
      </div>
      <div className=" card shrink-0 w-full max-w-lg mx-auto border border-4 border-dashed hover:border-double bg-base-100">
        <form className="card-body" onSubmit={handleFormSubmit}>
          <h2 className="text-2xl font-bold text-center">Sign Up</h2>
          <div className="flex gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                name="photo"
                type="file"
                placeholder="Photo"
                className="input input-bordered p-2 w-full"
                required
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn bg-green-400 text-black"
              type="submit"
              value="Sign Up"
            />
          </div>
          <div className="divider">OR</div>
          <div>
            <ContinueWith />
          </div>
          <div>
            <p className="text-center mt-4">
              Already have acccount?{" "}
              <Link className="text-green-500" to="/login">
                SignIn Now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
