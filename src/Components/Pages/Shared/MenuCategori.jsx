import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Cover from "./Cover";
import MenuItems from "./MenuItems";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="w-full my-16">
      {/* 🔹 Cover Section */}
      {title && (
        <Cover
          image={img}
          title={title}
          subTitle="Delicious & Fresh"
        />
      )}

      {/* 🔹 Menu Items */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <MenuItems key={item._id} item={item} />
          ))}
        </div>

        {/* 🔹 Centered Order Button */}
        {items.length > 0 && (
          <div className="flex justify-center mt-12">
            <Link to={`/orderFood/${title}`}>
              <button className="btn btn-outline border-b-4 text-lg sm:text-xl px-6 sm:px-12 py-2 sm:py-3 flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition duration-300">
                <FaShoppingCart className="text-lg sm:text-xl" />
                Order Now
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuCategory;
