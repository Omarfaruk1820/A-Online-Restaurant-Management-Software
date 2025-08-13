import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";


const Main = () => {
    const location =useLocation()
    const noHeaderFooter=location.pathname.includes('login')||location.pathname.includes('register')
    return (
        <div>
           { noHeaderFooter||<Navbar></Navbar>}
           <Outlet></Outlet> 
           {noHeaderFooter||<Footer></Footer>}
        </div>
    );
};

export default Main;