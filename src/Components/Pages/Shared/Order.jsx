import { useState } from "react";
import orderfood from "../../../assets/assets/shop/banner2.jpg"
import Cover from "./Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu";
import FoodCard from "./FoodCard";
import { useParams } from "react-router-dom";
const Order = () => {
    const categories=['salad','popular','dessert','pizza','soup','offered','drinks',]
    const {category}=useParams()
    const initalIndex=categories.indexOf(category)
    const [tebIndex,setTabIndex]=useState(initalIndex)
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
           <h1>This is food order page</h1>
          <Cover image={orderfood} className='text-2xl  uppercase'
           title="Order Food"></Cover>
           {/* name of each tab group should be unique */}
<Tabs defaultIndex={tebIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>salad</Tab>
    <Tab>popular</Tab>
    <Tab>dessert</Tab>
    <Tab>pizza</Tab>
    <Tab>soup</Tab>
    <Tab>offered</Tab>
    <Tab>drinks</Tab>
  </TabList>
  <TabPanel>
    <div className='grid lg:grid-cols-3 gap-5 md:grid-cols-2'>
        {saladItems.map(item=> <FoodCard key={item._id} item={item}></FoodCard> )}
    </div>
  </TabPanel>

  <TabPanel>
   <div className='grid lg:grid-cols-3 md:grid-cols-2'>
        {popularItems.map(item=> <FoodCard key={item._id} item={item}></FoodCard> )}
    </div>
  </TabPanel>
  <TabPanel>
     <div className='grid lg:grid-cols-3 md:grid-cols-2'>
        {dessertItems.map(item=> <FoodCard key={item._id} item={item}></FoodCard> )}
    </div>
  </TabPanel>
  <TabPanel>
     <div className='grid lg:grid-cols-3 md:grid-cols-2'>
        {pizzaItems.map(item=> <FoodCard key={item._id} item={item}></FoodCard> )}
    </div>
  </TabPanel>
  <TabPanel>
     <div className='grid lg:grid-cols-3 md:grid-cols-2'>
        {soupItems.map(item=> <FoodCard key={item._id} item={item}></FoodCard> )}
    </div>
  </TabPanel>
  <TabPanel>
     <div className='grid lg:grid-cols-3 md:grid-cols-2'>
        {offeredItems.map(item=> <FoodCard key={item._id} item={item}></FoodCard> )}
    </div>
  </TabPanel>
  <TabPanel>
     <div className='grid lg:grid-cols-3 md:grid-cols-2'>
        {drinksItems.map(item=> <FoodCard key={item._id} item={item}></FoodCard> )}
    </div>
  </TabPanel>
</Tabs>
        </div>
    );
};

export default Order;