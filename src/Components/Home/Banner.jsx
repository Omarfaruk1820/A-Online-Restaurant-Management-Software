import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../assets/assets/home/01.jpg";
import banner2 from "../../assets/assets/home/02.jpg";
import banner3 from "../../assets/assets/home/03.png";
import banner4 from "../../assets/assets/home/04.jpg";
import banner5 from "../../assets/assets/home/05.png";
import banner6 from "../../assets/assets/home/06.png";

const Banner = () => {
  const banners = [banner1, banner2, banner3, banner4, banner5, banner6];

  return (
    <div className="w-full">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={4000}
        transitionTime={1000}
        emulateTouch
        swipeable
      >
        {banners.map((banner, index) => (
          <div key={index} className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px]">
            <img
              src={banner}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Optional overlay for text/buttons */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-white px-4 sm:px-10">
              {/* Example: Add headings/buttons here */}
              {/* <h1 className="text-lg sm:text-2xl md:text-4xl font-bold mb-2">Delicious Food</h1>
              <p className="text-sm sm:text-lg md:text-xl text-center mb-4">Order now from your favorite dishes</p>
              <button className="btn btn-primary">Order Now</button> */}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
