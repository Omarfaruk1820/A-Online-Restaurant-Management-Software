import { Link } from "react-router-dom";
import Cover from "./Cover";
import MenuItems from "./MenuItems";


const MenuCategori = ({items,title,img}) => {
    return (
       <div>
        {title&& <Cover image={img} title="Our Menu"></Cover>}
         <div className='grid md:grid-cols-2 gap-5 mt-10'>
                {
                    items.map(item=> <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <h1 className='text-center'><Link  to={`/orderFood/${title}`}><button className="btn border-0 border-b-4 mt-5  text-white btn-primary">Order Now</button></Link></h1>
       </div>
    );
};

export default MenuCategori;