import useMenu from "../Hooks/useMenu";
import SectionTitle from "./SectionTitle";
// import { useEffect, useState } from "react";
import MenuItems from "./Shared/MenuItems";

const PopularMenu = () => {
    const [menus]=useMenu()
    const popular=menus.filter(item=>item.category==="popular")
   
    //  const [menus,setMenu]=useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItems=data.filter(item=>item.category==="popular")
    //         setMenu(popularItems)})
    // },[])
    return (
        <div>
           <section>
            <SectionTitle heading={"From Our Menu"}
             subHeading={"Popular Items"}>

            </SectionTitle>
            </section>
           
            <div className='grid md:grid-cols-2 gap-5 mt-10'>
                {
                    popular.map(item=> <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;