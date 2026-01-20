import loginPhoto from "../../assets/assets/others/authentication1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import SocialLogin from "../Pages/Shared/SocialLogin";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { loginWithUser } = useContext(AuthContext);

  const handleLoginUser = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      // 🔹 1. Firebase login
      const result = await loginWithUser(email, password);

      // 🔹 2. Request JWT from server
      const userInfo = { email: result.user.email };

      const res = await axios.post(
        "https://bistro-boss-resturant-server-side-psi.vercel.app/jwt",
        userInfo
      );

      // 🔹 3. Save token
      localStorage.setItem("access-token", res.data.token);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });

      // 🔹 4. Redirect safely
      navigate(from, { replace: true });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message,
      });
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-10 max-w-6xl w-full">
        
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={loginPhoto}
            alt="Login"
            className="w-[250px] sm:w-[320px] md:w-[380px] lg:w-[420px]"
          />
        </div>

        {/* Login Card */}
        <div className="card bg-white w-full max-w-md shadow-2xl">
          <h1 className="text-3xl font-bold text-center text-primary mt-6">
            Login Now!
          </h1>

          <div className="card-body">
            <form onSubmit={handleLoginUser} className="space-y-4">
              
              {/* Email */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Password */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                  required
                />
                <label className="label">
                  <span className="label-text-alt link link-hover">
                    Forgot password?
                  </span>
                </label>
              </div>

              <button className="btn btn-primary w-full text-lg">
                Login
              </button>
            </form>

            <p className="text-center mt-4 text-sm">
              New to Bistro Boss Restaurant?{" "}
              <Link to="/register" className="text-secondary font-semibold">
                Please Register
              </Link>
            </p>

            <div className="divider my-4">OR</div>

            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
