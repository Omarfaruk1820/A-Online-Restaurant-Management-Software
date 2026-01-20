import {
  FaPizzaSlice,
  FaHamburger,
  FaLeaf,
  FaFireAlt,
  FaIceCream,
  FaCoffee,
  FaUtensils,
  FaTags,
} from "react-icons/fa";
import pizza from "../../../assets/assets/blog/pizza.jpg"
import soup from "../../../assets/assets/blog/soup.jpg"
import burger from "../../../assets/assets/blog/burger.jpg"
import drink from "../../../assets/assets/blog/drink.jpg"
import offered from "../../../assets/assets/blog/offered.jpg"
import popular from "../../../assets/assets/blog/poplur.jpg"
import cake from "../../../assets/assets/blog/cake.jpg"
import salad from "../../../assets/assets/blog/salad.jpg"
const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Delicious Pizza Items",
      category: "Pizza",
      icon: <FaPizzaSlice />,
      image:pizza,
      desc: "Hot, cheesy pizzas baked fresh with premium toppings.",
    },
    {
      id: 2,
      title: "Juicy Burger Specials",
      category: "Burger",
      icon: <FaHamburger />,
      image:burger,
      desc: "Grilled burgers served with fresh buns and sauces.",
    },
    {
      id: 3,
      title: "Healthy Salad Bowls",
      category: "Salad",
      icon: <FaLeaf />,
      image:
        salad,
      desc: "Fresh salads prepared with organic vegetables.",
    },
    {
      id: 4,
      title: "Popular Dishes",
      category: "Popular",
      icon: <FaFireAlt />,
      image:
        popular,
      desc: "Our most-loved dishes by online customers.",
    },
    {
      id: 5,
      title: "Hot & Tasty Soups",
      category: "Soup",
      icon: <FaUtensils />,
      image:
        soup,
      desc: "Warm and comforting soups for every season.",
    },
    {
      id: 6,
      title: "Sweet Dessert Collection",
      category: "Dessert",
      icon: <FaIceCream />,
      image:
        cake,
      desc: "Delicious desserts to satisfy your sweet tooth.",
    },
    {
      id: 7,
      title: "Refreshing Drinks",
      category: "Drinks",
      icon: <FaCoffee />,
      image:
        drink,
      desc: "Cold and hot drinks prepared with premium ingredients.",
    },
    {
      id: 8,
      title: "Special Offer Items",
      category: "Offer",
      icon: <FaTags />,
      image:
        offered,
      desc: "Limited-time offers available for online orders.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mt-10 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Food Blog</h2>
        <p className="text-gray-500 mt-2">
          Explore our delicious food items and online services
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure className="h-48 overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                loading="lazy"
                className="w-full h-full text-black object-cover"
              />
            </figure>

            <div className="card-body">
              <div className="flex items-center gap-2 text-primary text-lg">
                {blog.icon}
                <span className="font-semibold">{blog.category}</span>
              </div>

              <h3 className="text-lg font-bold">{blog.title}</h3>
              <p className="text-sm text-gray-500">{blog.desc}</p>

              <div className="card-actions justify-end">
                <button className="btn btn-sm btn-outline btn-primary">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
