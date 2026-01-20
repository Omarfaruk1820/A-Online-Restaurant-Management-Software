import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SectionTitle from "../Pages/SectionTitle";

import slider1 from "../../assets/assets/home/slide1.jpg";
import slider2 from "../../assets/assets/home/slide2.jpg";
import slider3 from "../../assets/assets/home/slide3.jpg";
import slider4 from "../../assets/assets/home/slide4.jpg";
import slider5 from "../../assets/assets/home/slide5.jpg";

const categories = [
  { name: "Salads", image: slider1 },
  { name: "Pizza", image: slider2 },
  { name: "Soup", image: slider3 },
  { name: "Dessert", image: slider4 },
  { name: "Drinks", image: slider5 },
  { name: "Salads", image: slider1 },
  { name: "Soup", image: slider3 },
  { name: "Pizza", image: slider2 },
];

const Category = () => {
  return (
    <div className="my-10 px-4 md:px-10 lg:px-20">
      <section>
        <SectionTitle
          subHeading="From 11.00 AM to 10.00 PM"
          heading="Order Online"
        />
        <Swiper
          slidesPerView={1} // default for mobile
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 25 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
          className="mySwiper mt-5"
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index} className="relative group">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
              <h1 className="absolute bottom-4 w-full text-center text-lg sm:text-xl md:text-2xl font-bold text-white uppercase drop-shadow-lg">
                {cat.name}
              </h1>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Category;
