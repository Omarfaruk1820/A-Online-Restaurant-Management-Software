import Swal from "sweetalert2";
import useCart from "../Hooks/useCart";
import { FaRegTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart,refetch]=useCart()
    
    const totalPrice=cart.reduce((total,item)=>total+item.price,0)
    const axiosSecure=useAxiosSecure()
    const handleDeleteItem=(id)=>{

Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
  
    axiosSecure.delete(`/cart/${id}`)
    .then(res=>{
       
        if(res.data.deletedCount>0){
  Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
        }
        refetch()
    })
  }
});

    }

 
    return (
        <div className='p-10'>
        <div className='flex justify-between'>
              <h2 className="text-4xl">Order Items:{cart.length}</h2>  
              <h2 className="text-4xl">Total Price:{totalPrice}</h2>
           { cart.length? <Link to="/dashboard/payment" >
             <button   className='btn btn-accent'>Pay</button> 
            </Link>: <button disabled  className='btn btn-accent'>Pay</button> 
            }
        </div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Items Photo</th>
        <th>Items Name</th>
        <th>Items Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        cart.map((item,index)=>  <tr key={item._id}>
        <th>
        { index+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
           
          </div>
        </td>
        <td>
         {item.name}
         
        </td>
        <td>{item.price}</td>
        <th>
          <button onClick={()=>handleDeleteItem(item._id)}
          className="btn text-2xl btn-ghost btn-xs"><FaRegTrashAlt /></button>
        </th>
      </tr> )
      }
     
    
    
    
    </tbody>
   
  </table>
</div>

        </div>
    );
};

export default Cart;