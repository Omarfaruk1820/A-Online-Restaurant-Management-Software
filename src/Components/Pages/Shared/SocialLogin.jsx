import { useContext } from "react";
import {  AuthContext } from "../../Auth/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {siginInwithGoogle}=useContext(AuthContext)
    const axiosPublic=useAxiosPublic()
    const navigate=useNavigate()
    const handleSigninGoogle=()=>
       siginInwithGoogle ()
    .then(result=>{
      console.log(result.user,'google register done')
      const userinfo={
email:result.user?.email,
name:result.user?.displayName
      }
      axiosPublic.post('/user',userinfo)
      .then(res=>{
        console.log(res.data)
        navigate("/")
      })
    })
    .catch(error=>{
        console.log(error.message)
    })
    
    return (
        <div >
          <h1 className='text-center'> <button onClick={handleSigninGoogle} className=' mb-2 w-full btn btn-outline btn-secondary'>Login With Google</button> </h1>
        </div>
    );
};

export default SocialLogin;