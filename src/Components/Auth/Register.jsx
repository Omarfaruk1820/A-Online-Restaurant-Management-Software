// import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import lotteRegister from "../../assets/register.json";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import SocialLogin from "../Pages/Shared/SocialLogin";
import { AuthContext } from "./AuthProvider";


const Register = () => {
  const axiosPublic=useAxiosPublic()
 const navigate=useNavigate()
   const {register, reset,   handleSubmit, formState: { errors },  } = useForm()
  const { createUserWithLogin,updateUserProfile } = useContext(AuthContext);
     const onSubmit = (data) => {
        console.log(data)
        createUserWithLogin(data.email,data.password)
        .then(result=>{
          console.log(result.user)
        
          updateUserProfile(data.name,data.photo)
          .then(()=>{
            const userInfo={
              name:data.name,
              email:data.email
            }
            axiosPublic.post('/user',userInfo)
            .then(res=>{
              if(res.data.insertedId){
                 reset()
 console.log('Update profile')
               Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User Register Successfully",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/')
           
              }
            })
           
          })
          .catch(error=>{
            console.log(error.message)
          })
        })
        .catch(error=>{
          console.log(error.message)
        })
    }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie className="w-[300px]" animationData={lotteRegister}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl text-center font-bold">Register now!</h1>
          <div className="card-body">
            <form onSubmit={  handleSubmit(onSubmit)}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                   {...register("name",{ required: true })}
                  className="input"
                  placeholder="Name"
                />
                <label className="label">Photo</label>
                <input
                  type="text"
                  name="photo"
                   {...register("photo",{ required: true })}
                  className="input"
                  placeholder="Photo URL"
                />
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                   {...register("email",{ required: true })}
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                   {...register("password",{ required: true })}
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
            <h1 className="text-center">
              Already have an aacount{" "}
              <Link className="text-green-500" to="/login">
                Please Login
              </Link>{" "}
            </h1>

          </div>
           <div className="divider">OR</div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
