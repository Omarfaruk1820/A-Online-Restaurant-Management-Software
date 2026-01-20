import { useState } from "react";
import orderfood from "../../../assets/assets/shop/banner2.jpg";
import Cover from "./Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import FoodCard from "./FoodCard";
import { useParams } from "react-router-dom";

// Icons for categories
import {
  FaLeaf,
  FaStar,
  FaIceCream,
  FaPizzaSlice,
  FaBowlFood,
  FaTag,
  FaGlassWater,
} from "react-icons/fa6";

const Order = () => {
  const categories = [
    { key: "salad", label: "Salad", icon: <FaLeaf /> },
    { key: "popular", label: "Popular", icon: <FaStar /> },
    { key: "dessert", label: "Dessert", icon: <FaIceCream /> },
    { key: "pizza", label: "Pizza", icon: <FaPizzaSlice /> },
    { key: "soup", label: "Soup", icon: <FaBowlFood /> },
    { key: "offered", label: "Offered", icon: <FaTag /> },
    { key: "drinks", label: "Drinks", icon: <FaGlassWater /> },
  ];

  const { category } = useParams();
  const initialIndex = Math.max(
    categories.findIndex((c) => c.key === category),
    0
  );

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menus] = useMenu();

  // Group items by category
  const itemsByCategory = categories.reduce((acc, cat) => {
    acc[cat.key] = menus.filter((item) => item.category === cat.key);
    return acc;
  }, {});

  return (
    <div className="w-full">
      {/* 🔹 Cover */}
      <Cover
        image={orderfood}
        title="Order Food"
        subTitle="Delicious & Fresh"
        className="uppercase text-2xl"
      />

      {/* 🔹 Tabs */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mt-10">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          {/* Scrollable Tab List */}
          <TabList className="flex gap-3 overflow-x-auto pb-3 border-b">
            {categories.map((cat) => (
              <Tab
                key={cat.key}
                className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-md whitespace-nowrap
                           text-sm md:text-base font-medium border border-transparent
                           hover:border-primary transition-all duration-200"
                selectedClassName="bg-primary text-white shadow-md"
              >
                <span className="text-lg">{cat.icon}</span>
                {cat.label}
              </Tab>
            ))}
          </TabList>

          {/* Tab Panels */}
          {categories.map((cat) => (
            <TabPanel key={cat.key}>
              {itemsByCategory[cat.key].length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {itemsByCategory[cat.key].map((item) => (
                    <FoodCard key={item._id} item={item} />
                  ))}
                </div>
              ) : (
                <p className="text-center col-span-full text-gray-500 mt-10">
                  No {cat.label} items available.
                </p>
              )}
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
