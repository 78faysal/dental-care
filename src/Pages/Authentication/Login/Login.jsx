import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../../assets/authenticate.jpg";
import ContinueWith from "../ContinueWith/ContinueWith";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const {logInUser} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || '/';

  const handleFormSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    // login user 
    logInUser(email, password)
    .then(res => {
      if(res.user){
        navigate(from, {replace: true})
      }
    })
    .catch(err => {
      console.log(err.message);
    })
  }
  return (
    <div className="grid md:grid-cols-2 min-h-screen">
      <div className="md:p-28 ">
        <figure>
          <img className="w-full" src={img} alt="" />
        </figure>
      </div>
      <div className="md:m-28 card shrink-0 w-full max-w-sm mx-auto border border-4 border-dashed hover:border-double bg-base-100">
        <form className="card-body" onSubmit={handleFormSubmit}>
          <h2 className="text-2xl font-bold text-center p-5">Sign In</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
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
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <input
              className="btn bg-green-400 text-black"
              type="submit"
              value="Sign In"
            />
          </div>
          <div className="divider">OR</div>
          <div>
            <ContinueWith />
          </div>
          <div>
            <p className="text-center mt-4">New Here? <Link className="text-green-500" to='/signUp'>Create Account</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
