import useMenu from "../Hooks/useMenu";
import SectionTitle from "./SectionTitle";
import MenuItems from "./Shared/MenuItems";

const PopularMenu = () => {
  const [menus] = useMenu();
  const popular = menus.filter(
    (item) => item.category === "popular"
  );

  return (
    <div className="px-4 md:px-8 lg:px-16">
      {/* 🔹 Section Title */}
      <section>
        <SectionTitle
          heading="From Our Menu"
          subHeading="Popular Items"
        />
      </section>

      {/* 🔹 Menu Items */}
      <div className="max-w-7xl mx-auto mt-8 md:mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popular.map((item) => (
            <MenuItems key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularMenu;
