import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import silder1 from "../../assets/assets/home/slide1.jpg"
import silder2 from "../../assets/assets/home/slide2.jpg"
import silder3 from "../../assets/assets/home/slide3.jpg"
import silder4 from "../../assets/assets/home/slide4.jpg"
import silder5 from "../../assets/assets/home/slide5.jpg"
import SectionTitle from '../Pages/SectionTitle';

const Category = () => {
    return (
        <div >
          <section >
            <SectionTitle subHeading={"From 11.00 to 10.00pm"} heading={"Order Online"} >

            </SectionTitle>
             <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-5 mb-10"
      >
        <SwiperSlide><img src={silder1 } alt="silder1" />
        <h1 className='text-2xl text-center -mt-24 text-white uppercase'>Salads</h1>
        </SwiperSlide>
        <SwiperSlide><img src={silder2} alt="silder2" />
         <h1 className='text-2xl text-center -mt-24 text-white uppercase'>pizza</h1>
        </SwiperSlide>
        <SwiperSlide><img src={silder3} alt="silder3" />
         <h1 className='text-2xl text-center -mt-24 text-white uppercase'>soup</h1>
        </SwiperSlide>
        <SwiperSlide><img src={silder4} alt="silder4" />
        <h1 className='text-2xl text-center -mt-24 text-white uppercase'>dessert</h1>
        </SwiperSlide>
        <SwiperSlide><img src={silder5} alt="silder5" />
         <h1 className='text-2xl text-center -mt-24 text-white uppercase'>Salads</h1>
        </SwiperSlide>
         <SwiperSlide><img src={silder3} alt="silder6" />
         <h1 className='text-2xl text-center -mt-24 text-white uppercase'>soup</h1>
         </SwiperSlide>
         <h1 className='text-2xl text-center -mt-24 text-white uppercase'>salads</h1>
           <SwiperSlide><img src={silder1 } alt="silder6" />
           </SwiperSlide>
           <SwiperSlide><img src={silder2} alt="silder7" />
            <h1 className='text-2xl text-center -mt-24 text-white uppercase'>Salads</h1>
           </SwiperSlide>
           </Swiper> 
          </section>
        </div>
    );
};

export default Category;