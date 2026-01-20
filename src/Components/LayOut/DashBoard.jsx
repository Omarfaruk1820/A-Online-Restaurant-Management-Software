import { NavLink, Outlet } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { RiReservedFill } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaCartArrowDown } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import { TbBrandBooking } from "react-icons/tb";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
    const [cart]=useCart()
    const [isAdmin]=useAdmin();
    return (
        <div className='flex'>
            <div className="w-48 bg-amber-500 min-h-screen">
<ul className="menu">
   {
    isAdmin?<>
     <li><NavLink to='/dashboard/adminHome'> <IoHome /> Admin Home</NavLink></li>
    <li><NavLink to='/dashboard/addItems'> <RiReservedFill /> Add Items</NavLink></li>
    <li><NavLink to='/dashboard/manageItems'><FaCartArrowDown />  Mange Items </NavLink></li>
    <li><NavLink to='/dashboard/bookin'> <RiSecurePaymentLine /> Manage Bookings</NavLink></li>
    <li><NavLink to='/dashboard/allUser'><VscPreview /> All Users</NavLink></li>
    <li><NavLink to='/dashboard/booking'> <TbBrandBooking /> My  Booking</NavLink></li>
    </>:<>
     <li><NavLink to='/dashboard/userHome'> <IoHome /> User Home</NavLink></li>
    <li><NavLink to='/dashboard/paymentHistory'> <RiReservedFill />paymentHistory</NavLink></li>
    <li><NavLink to='/dashboard/payment'> <RiSecurePaymentLine /> Payment</NavLink></li>
    <li><NavLink to='/dashboard/cart'><FaCartArrowDown />  My Cart :({cart.length}) </NavLink></li>
    {/* <li><NavLink to='/dashboard/review'><VscPreview /> Add Review</NavLink></li>
    <li><NavLink to='/dashboard/booking'> <TbBrandBooking /> My  Booking</NavLink></li> */}
    </>
   }
     <div className="divider">OR</div>
     <li><NavLink to='/'> <IoHome />Home</NavLink></li>
     <li><NavLink to='/orderFood/salad'> <IoHome />Menu</NavLink></li>
</ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;