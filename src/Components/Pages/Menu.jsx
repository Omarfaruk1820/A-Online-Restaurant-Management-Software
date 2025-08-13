import Cover from "./Shared/Cover";

import PopularMenu from "./PopularMenu";
import useMenu from "../Hooks/useMenu";
import SectionTitle from "./SectionTitle";
import MenuCategori from "./Shared/MenuCategori";
import dessertItem from "../../assets/assets/menu/dessert-bg.jpeg"
import saladItem from "../../assets/assets/menu/salad-bg.jpg"
import popularItem  from "../../assets/assets/menu/banner3.jpg"
import pizzaItem from "../../assets/assets/menu/pizza-bg.jpg"
import soupItem from "../../assets//assets/menu/soup-bg.jpg"
import drinksItem from "../../assets/assets/menu/dessert-bg.jpeg"
const Menu = () => {
    const [menus]=useMenu()
     const saladItems=menus.filter(item=>item.category==="salad")
     const popularItems=menus.filter(item=>item.category==="popular")
     const dessertItems=menus.filter(item=>item.category==="dessert")
     const pizzaItems=menus.filter(item=>item.category==="pizza")
     const soupItems=menus.filter(item=>item.category==="soup")
     const offeredItems=menus.filter(item=>item.category==="offered")
     const drinksItems=menus.filter(item=>item.category==="drinks")
  return (
<div>
        <div className="">
      <Cover image={popularItem}   title='Our Menu'></Cover>
     <SectionTitle subHeading="do not miss" heading="Todays Offered"></SectionTitle>
     <MenuCategori items={offeredItems} title="popularItems"img={popularItem}></MenuCategori>
<MenuCategori items={dessertItems} title="dessertItems" img={dessertItem}></MenuCategori>
<MenuCategori items={saladItems} title="saladItem" img={saladItem }></MenuCategori>
<MenuCategori items={popularItems} title="popularItems"img={popularItem}></MenuCategori>
<MenuCategori items={pizzaItems}title="pizzaItems" img={pizzaItem}></MenuCategori>
<MenuCategori items={soupItems}title="soupItem" img={soupItem}></MenuCategori>
<MenuCategori items={drinksItems}title="soupItem" img={drinksItem}></MenuCategori>
    

    </div>
 
    
</div>
  );
};

export default Menu;
