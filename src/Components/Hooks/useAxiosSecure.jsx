import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../Auth/useAuth";

 const axiosSecure=axios.create({
baseURL:"https://bistro-boss-resturant-server-side-psi.vercel.app"
})
const useAxiosSecure = () => {
    const navigate=useNavigate()
    const { userLogOut}=useAuth()
axiosSecure.interceptors.request.use(function(config){
    const token=localStorage.getItem('access-token')
    // console.log('request stopped by the interceptors',token)
    config.headers.authorization=`Bearer ${token}`
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
  } )

  axiosSecure.interceptors.response.use(function(response){
    return response;
  },async(error)=>{
    const status=error.response.status
    // console.log('status error',status)
    // for the 401 and 403 logout the user and move to the login page
    if(status===401||status===403){
         await userLogOut()
        navigate('/login')
    }
     return Promise.reject(error);
  })
    return  axiosSecure
  
};

export default useAxiosSecure;