import SectionTitle from "../Pages/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "@smastrom/react-rating/style.css";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Modules
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Tesmonitals = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetch("https://bistro-boss-resturant-server-side-psi.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div className="my-20 px-4 sm:px-10 md:px-20">
      <SectionTitle
        subHeading="What Our Clients Say"
        heading="Testimonials"
      />

      <Swiper
        pagination={{ type: "progressbar" }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mt-10"
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center h-full transition-transform duration-300 hover:scale-105">
              {/* Quote Icons */}
              <FaQuoteLeft className="text-orange-400 text-3xl mb-3" />
              
              {/* Rating */}
              <Rating style={{ maxWidth: 150 }} value={review.rating} readOnly />

              {/* Review Text */}
              <p className="text-gray-700 mt-4 mb-3 line-clamp-5">
                {review.details}
              </p>

              {/* Reviewer Name */}
              <h3 className="text-orange-500 text-lg sm:text-xl font-semibold">
                {review.name}
              </h3>

              <FaQuoteRight className="text-orange-400 text-3xl mt-2" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Tesmonitals;
