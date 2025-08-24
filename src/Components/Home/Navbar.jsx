
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import {  AuthContext } from "../Auth/AuthProvider";
import Swal from "sweetalert2";
import { FaCartArrowDown } from "react-icons/fa6";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";
import { cn } from './../../lib/utils';


const Navbar = () => {
  const {user,userLogOut}=useContext(AuthContext)
  const [cart]=useCart()
  const [isAdmin]=useAdmin()

{
  user&&isAdmin&&  <li><NavLink to="/dashboard/adminHome'">AdminHome'</NavLink></li>
}
{
  user&&!isAdmin&&  <li><NavLink to="/dashboard/userHome'">UserHome'</NavLink></li>
}

  const handleLogOutUser=()=>{
    userLogOut()
    .then(()=>{
      
      Swal.fire({
  position: "top-end",
  icon: "success",
  title: "User Log Out Successfuly",
  showConfirmButton: false,
  timer: 1500
});
    })
    .catch((error)=>{
      console.log(error.message)
    })
  }

const navliks = (
    <>
      <li> <NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/menu">Menu</NavLink></li>
     <li><NavLink to="/orderFood/salad"> Order Food</NavLink></li>
     <li>
        <Link to='/dashboard/cart'>
        <button className="btn btn-sm">
<FaCartArrowDown />
 <div className="badge badge-sm badge-secondary">+{cart.length}</div>
</button>

        </Link>
      </li>
    </>
  );
  return (
   <div   className={cn(
        "fixed w-full z-40 transition-all duration-300  bg-background/80 backdrop-blur-md shadow-xs"
      )}>
     <div className="navbar  text-green-500 bg-black ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32  shadow"
          >
            {navliks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Smart Kitchen</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navliks}</ul>
      </div>
      <div className="navbar-end">
   
{user? <>
<span className='text-white mr-1'>{user.email}</span>
<button onClick={handleLogOutUser} className='btn  cosmic-button '>SignOut</button>
</>: <>
<Link to='/login'> <button className='btn cosmic-button'>Login</button> </Link>
</>

}
  
      </div>
    </div>
   </div>
  );
};

export default Navbar;
