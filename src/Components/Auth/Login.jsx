import Lottie from "lottie-react";
import loginPhoto from "../../assets/assets/others/authentication1.png"
// import loginData from "../../assets/login.json"
import { Link, useLocation, useNavigate,  } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";

import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import Swal from "sweetalert2";
import SocialLogin from "../Pages/Shared/SocialLogin";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const location=useLocation()
  const navigate=useNavigate()
  const from=location.state?.from?.pathname||"/"
  
  const captchaRef=useRef(null)
  const [disabled,setDisabled]=useState(true)
  useEffect(()=>{
      loadCaptchaEnginge(6);
  },[])
  const {loginWithUser}=useContext(AuthContext)
  const handleLoginUser=(event)=>{
    event.preventDefault()
    const form=event.target
    const email=form.email.value
    const password=form.password.value
    console.log(email,password)
    
    loginWithUser(email,password)
    .then(result=>{
      console.log(result.user)
      Swal.fire({
  position: "top-end",
  icon: "success",
  title: "User Login Successfully",
  showConfirmButton: false,
  timer: 1500
});
     
    })
     navigate(from)
    .catch(error=>console.log(error.message))

  }

  const validationCattecha=()=>{
    const user_captcha_value=captchaRef.current.value
    console.log(user_captcha_value)
    if(validateCaptcha(user_captcha_value)){
setDisabled(false)
    }
    else{
setDisabled(true)
    }


  }
    return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      {/* <Lottie className='w-[300px]' animationData={loginData}></Lottie> */}
      <img src={loginPhoto} className="md:w-[350px]" alt="Login photo" />
     
    </div>
    <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-3xl text-center font-bold">Login now!</h1>
      <div className="card-body">
       <form  onSubmit={handleLoginUser}>
         <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input " placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <label className="label"> <LoadCanvasTemplate /></label>
         
          <input ref={captchaRef} name='captcha' type="text"  className="input " placeholder="Captcha" />
 <button onClick={validationCattecha} className="btn btn-xs">Validation</button>
          {/* <div><a className="link link-hover">Forgot password?</a></div> */}
          <button disabled={disabled} className="btn btn-neutral mt-4">Login</button>
        </fieldset>
       </form>
       <h1 className='text-center'>New to bistro biss resturant <Link className='text-green-500' to='/register'>Please Register</Link> </h1>
      </div>
       <div className="divider">OR</div>
      <SocialLogin></SocialLogin>
    </div>
  </div>
</div>
    );
};

export default Login;