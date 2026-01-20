import Cover from "./Shared/Cover";
import useMenu from "../Hooks/useMenu";
import SectionTitle from "./SectionTitle";
import dessertImg from "../../assets/assets/menu/dessert-bg.jpeg";
import saladImg from "../../assets/assets/menu/salad-bg.jpg";
import popularImg from "../../assets/assets/menu/banner3.jpg";
import pizzaImg from "../../assets/assets/menu/pizza-bg.jpg";
import soupImg from "../../assets/assets/menu/soup-bg.jpg";

import drinksImg from "../../assets/assets/menu/dessert-bg.jpeg"
import MenuCategory from './Shared/MenuCategori';

const Menu = () => {
  const [menus] = useMenu();

  // Filter items by category
  const categories = [
    { key: "offered", title: "Today's Offers", img: popularImg },
    { key: "dessert", title: "Desserts", img: dessertImg },
    { key: "salad", title: "Salads", img: saladImg },
    { key: "popular", title: "Popular Items", img: popularImg },
    { key: "pizza", title: "Pizza", img: pizzaImg },
    { key: "soup", title: "Soup", img: soupImg },
    { key: "drinks", title: "Drinks", img: drinksImg },
  ];

  return (
    <div className="w-full">
      {/* 🔹 Main Cover */}
      <Cover image={popularImg} title="Our Menu" className="text-white" />

      {/* 🔹 Today's Offer Section */}
      <SectionTitle subHeading="Do not miss" heading="Today's Offers" />

      {/* 🔹 Menu Categories */}
      <div className="flex flex-col gap-20">
        {categories.map((cat) => {
          const items = menus.filter((item) => item.category === cat.key);
          return items.length > 0 ? (
            <MenuCategory
              key={cat.key}
              items={items}
              title={cat.title}
              img={cat.img}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Menu;
