import {
  FaLeaf,
  FaStar,
  FaIceCream,
  FaPizzaSlice,
  FaGlassCheers,
  FaTag,
  FaShoppingCart,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Pricing = ({title}) => {
  const items = [
    {
      title: "Salad Items",
      icon: <FaLeaf />,
      price: "$6.99",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      desc: "Fresh & healthy salads",
    },
    {
      title: "Popular Items",
      icon: <FaStar />,
      price: "$10.99",
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      desc: "Top ordered dishes",
    },
    {
      title: "Dessert Items",
      icon: <FaIceCream />,
      price: "$5.99",
      img: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
      desc: "Sweet & delicious desserts",
    },
    {
      title: "Pizza Items",
      icon: <FaPizzaSlice />,
      price: "$12.99",
      img: "https://images.unsplash.com/photo-1548365328-5b849e6b981d",
      desc: "Cheesy hot pizzas",
    },
    {
      title: "Soup Items",
      icon: <FaGlassCheers />,
      price: "$4.99",
      img: "https://images.unsplash.com/photo-1547592166-23ac45744acd",
      desc: "Warm & healthy soups",
    },
    {
      title: "Offered Items",
      icon: <FaTag />,
      price: "$14.99",
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
      desc: "Special combo offers",
    },
  ];

  return (
   <div className="">
     <section className="bg-base-200 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mt-10 mb-12">
          <h2 className="text-4xl font-bold text-primary">
            Food Pricing
          </h2>
          <p className="text-gray-500 mt-3">
            Online food ordering with fast delivery
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition"
            >
              <figure>
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <span className="text-primary">{item.icon}</span>
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.desc}
                </p>

                <p className="text-3xl font-bold text-primary mt-3">
                  {item.price}
                </p>

               <Link to={`/orderFood/${title}`}>
                <button className="btn btn-primary mt-4 w-full flex items-center justify-center gap-2">
                  <FaShoppingCart />
                  Order Now
                </button>
               </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
   </div>
  );
};

export default Pricing;
