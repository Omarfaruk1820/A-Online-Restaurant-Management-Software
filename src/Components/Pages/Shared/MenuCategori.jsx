import { Link } from "react-router-dom";
import Cover from "./Cover";
import MenuItems from "./MenuItems";


const MenuCategori = ({items,title,img}) => {
    return (
       <div className=" container max-w-7xl mx-auto">
        {title&& <Cover image={img} title="Our Menu"></Cover>}
         <div className='grid md:grid-cols-2 grid-col-1 gap-5 mt-10'>
                {
                    items.map(item=> <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <h1 className='text-center m-5 '><Link  to={`/orderFood/${title}`}><button className="btn border-0 border-b-4 mt-5  text-white cosmic-button">Order Now</button></Link></h1>
       </div>
    );
};

export default MenuCategori;