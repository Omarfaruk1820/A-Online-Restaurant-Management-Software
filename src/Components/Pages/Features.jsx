import SectionTitle from "./SectionTitle";
import featuredImg from "../../assets/assets/home/featured.jpg"
import  "./Photo.css"
const Features = () => {
    return (
        <div className='featured-item bg-fixed pt-10 my-20  text-white'>
          <section className='mt-10'>
            <SectionTitle heading="Featured Items" subHeading=" Check it Out">

            </SectionTitle>
            </section> 
            <div className='md:flex justify-center  bg-opacity-20 items-center py-16 px-20'>
               <div>
                 <img src={featuredImg} alt="" />
               </div>
               
                <div className='md:ml-10'>
                    <p>JUN 18 2025</p>
                    <p>Where can i get some</p>
                    <p className='text-black'>Lorem ipsum dolor sit amet,
                         consectetur adipisicing elit. At qui suscipit accusantium ab porro sint debitis ipsam ex,
                          architecto excepturi, fugit, laboriosam labore voluptate eligendi.
                         Sapiente facere cumque dolor. Adipisci.</p>
                         <button className="btn border-0 border-b-4 mt-5 
                          text-white btn-primary">Order Now</button>
                </div>
                 </div> 
        </div>
    );
};

export default Features;