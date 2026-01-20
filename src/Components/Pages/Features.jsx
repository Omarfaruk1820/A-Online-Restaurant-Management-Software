import SectionTitle from "./SectionTitle";
import featuredImg from "../../assets/assets/home/featured.jpg";
import "./Photo.css";
import { NavLink } from "react-router-dom";
import { FaCalendarAlt, FaStar } from "react-icons/fa";

const Features = () => {
  return (
    <div className="featured-item bg-fixed pt-10 my-10 text-white">
      {/* Section Title */}
      <section>
        <SectionTitle heading="Featured Items" subHeading="Check it Out" />
      </section>

      {/* Content */}
      <div className="md:flex flex-col md:flex-row justify-center items-center bg-opacity-20 px-5 sm:px-10 md:px-20 gap-10 md:gap-16 mt-8">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src={featuredImg}
            alt="Featured"
            className="rounded-lg shadow-lg w-full sm:w-4/5 md:w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Text & Button */}
        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
          {/* Date with Calendar Icon */}
          <p className="flex items-center justify-center md:justify-start text-yellow-400 text-sm sm:text-base md:text-lg font-semibold mb-2 gap-2">
            <FaCalendarAlt className="text-yellow-400" /> JUN 18, 2025
          </p>

          {/* Headline with Star Icon */}
          <h2 className="flex items-center justify-center md:justify-start text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 gap-2">
            <FaStar className="text-yellow-400 text-xl sm:text-2xl" /> Where can I get some
          </h2>

          {/* Paragraph */}
          <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-5 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At qui
            suscipit accusantium ab porro sint debitis ipsam ex, architecto
            excepturi, fugit, laboriosam labore voluptate eligendi. Sapiente
            facere cumque dolor. Adipisci.
          </p>

          {/* Order Button */}
          <NavLink to="/orderFood/salad">
            <button className="btn border-0 border-b-4 mt-2 text-white cosmic-button px-6 py-2 transition hover:scale-105 flex items-center gap-2 justify-center">
              <FaStar className="text-yellow-400" />
              Order Now
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Features;
