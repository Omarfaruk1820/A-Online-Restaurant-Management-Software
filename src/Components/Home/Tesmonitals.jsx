import SectionTitle from "../Pages/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import '@smastrom/react-rating/style.css'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Tesmonitals = () => {
    const [reviews,setReview]=useState([])
    useEffect(()=>{
        fetch('https://bistro-boss-resturant-server-side-psi.vercel.app/reviews')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    return (
        <div>
          <section>
            <SectionTitle subHeading="what our client say" heading="Tesmonitals ">

            </SectionTitle>
           
            

 <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
            {
                reviews.map(review=><SwiperSlide key={review._id}>
                    <div className=' flex flex-col items-center m-15'>
 <Rating 
      style={{ maxWidth: 180 }}
      value={review.rating}
      
    />

                       <p> {review.details}</p>
                       <h1 className='text-2xl text-orange-500 text-center'>{review.name}</h1>
                    </div>
                     </SwiperSlide>  )
            }
       
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
 </section> 
        </div>
    );
};

export default Tesmonitals;