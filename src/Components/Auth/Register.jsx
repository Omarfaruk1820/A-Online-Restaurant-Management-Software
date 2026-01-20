import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import SocialLogin from "../Pages/Shared/SocialLogin";
import Lottie from "lottie-react";
import lotteRegister from "../../assets/register.json";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const { createUserWithLogin, updateUserProfile } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUserWithLogin(data.email, data.password)
      .then((result) => {
        updateUserProfile(data.name, data.photo)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
            };
            axiosPublic.post("/user", userInfo).then((res) => {
              if (res.data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User Registered Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
          })
          .catch((error) => console.log(error.message));
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center px-4">
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-10 max-w-6xl w-full">
        {/* 🔹 Lottie Animation */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Lottie
            className="w-[250px] sm:w-[350px] md:w-[400px]"
            animationData={lotteRegister}
          />
        </div>

        {/* 🔹 Register Card */}
        <div className="card bg-base-100 w-full max-w-md shadow-2xl">
          <h1 className="text-3xl font-bold text-center text-primary mt-6">
            Register Now!
          </h1>

          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1">
                    Name is required
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">
                    Email is required
                  </span>
                )}
              </div>

              {/* Password */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                />
                {errors.password && (
                  <span className="text-red-500 text-sm mt-1">
                    Password is required
                  </span>
                )}
                <label className="label">
                  <a href="#" className="link link-hover text-sm">
                    Forgot password?
                  </a>
                </label>
              </div>

              <button className="btn btn-primary w-full py-2 mt-2 text-lg hover:bg-primary-focus transition duration-300">
                Register
              </button>
            </form>

            <p className="text-center mt-4 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-secondary font-semibold">
                Please Login
              </Link>
            </p>

            {/* Divider */}
            <div className="divider my-4">OR</div>

            {/* Social Login */}
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
