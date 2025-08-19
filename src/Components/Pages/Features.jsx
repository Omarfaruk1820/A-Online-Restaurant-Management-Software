import SectionTitle from "./SectionTitle";
import featuredImg from "../../assets/assets/home/featured.jpg"
import  "./Photo.css"
import { NavLink } from "react-router-dom";
const Features = () => {
    return (
        <div className='featured-item bg-fixed pt-10 my-10  text-white'>
          <section className=''>
            <SectionTitle heading="Featured Items" subHeading=" Check it Out">

            </SectionTitle>
            </section> 
            <div className='md:flex justify-center  bg-opacity-20 items-center px-20'>
               <div className="md:p-20">
                 <img src={featuredImg} alt="" />
               </div>
               
                <div className='md:ml-10 items-center'>
                    <p className="text-pink-500 text-3xl">JUN 18 2025</p>
                    <p className=" text-black text-2xl">Where can i get some</p>
                    <p className='text-black'>Lorem ipsum dolor sit amet,
                         consectetur adipisicing elit. At qui suscipit accusantium ab porro sint debitis ipsam ex,
                          architecto excepturi, fugit, laboriosam labore voluptate eligendi.
                         Sapiente facere cumque dolor. Adipisci.</p>
                        <NavLink to="/orderFood/salad">
                           <button className="btn border-0 border-b-4 mt-5 
                          text-white cosmic-button">Order Now</button>
                        </NavLink>
                </div>
                 </div> 
        </div>
    );
};

export default Features;