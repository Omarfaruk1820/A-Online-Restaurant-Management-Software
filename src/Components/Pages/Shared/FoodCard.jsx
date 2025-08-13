

import Swal from "sweetalert2";
import useAuth from "../../Auth/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";


const FoodCard = ({item}) => {
 const navigate=useNavigate()
 const location=useLocation()
     const {name,recipe,image,price,_id}=item
      const {user}=useAuth()
      const axiosSecure=useAxiosSecure()
      const [,refetch]=useCart()

     const handleAddToCart=()=>{

   if(user && user.email){
    const cartItem={
      menuId:_id,
      email:user.email,
      name,
      image,
      price
    }
    axiosSecure.post('/cart',cartItem)
    .then(res=>{
      console.log(res.data)
      if(res.data.insertedId){
        Swal.fire({
  position: "top-end",
  icon: "success",
  title: `${name} added to the your cart`,
  showConfirmButton: false,
  timer: 1500
});
refetch()
      }
    })
   }
else{
  Swal.fire({
  title: "You are not Logged In",
  text: "Please login to add to cart",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, login!"
}).then((result) => {
  if (result.isConfirmed) {
    // Swal.fire({
    //   title: "Deleted!",
    //   text: "Your file has been deleted.",
    //   icon: "success"
    // });
    navigate('/login',{state:{from:location}})
  }
});
}



     }
    return (
       <div className="card bg-base-100  shadow-sm">
  <figure className="px-5 pt-5">
    <img
      src=
      {image}
      alt="photo"
      className="rounded-xl w-80 h-80" />
      <h1 className='text-orange-500 absolute mt-0 right-0'>${price}</h1>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
      <button onClick={()=>handleAddToCart(item)} className="btn btn-primary">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;