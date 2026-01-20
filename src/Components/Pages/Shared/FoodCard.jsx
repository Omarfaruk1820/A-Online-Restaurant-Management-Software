import Swal from "sweetalert2";
import useAuth from "../../Auth/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import { FaCartPlus, FaDollarSign } from "react-icons/fa";

const FoodCard = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, recipe, image, price, _id } = item;
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = { menuId: _id, email: user.email, name, image, price };
      axiosSecure.post("/cart", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="px-2 sm:px-3">
      <div className="card bg-base-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
        {/* Image & Price */}
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <span className="absolute top-2 right-2 bg-yellow-400 text-black font-semibold px-3 py-1 rounded-lg shadow-lg flex items-center gap-1">
            <FaDollarSign /> {price}
          </span>
        </div>

        {/* Content */}
        <div className="card-body text-center p-4 sm:p-5 flex flex-col justify-between">
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              {name}
            </h2>
            <p className="text-sm sm:text-base text-gray-500 line-clamp-3">
              {recipe}
            </p>
          </div>

          {/* Add to Cart */}
          <div className="mt-4">
            <button
              onClick={handleAddToCart}
              className="btn btn-accent w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-2 rounded-lg flex items-center justify-center gap-2 transition hover:scale-105"
            >
              <FaCartPlus className="text-lg" />
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
