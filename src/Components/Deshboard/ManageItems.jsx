import Swal from "sweetalert2";
import useMenu from "../Hooks/useMenu";
import SectionTitle from "../Pages/SectionTitle";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {

    const [menu]=useMenu()
   const axiosSecure=useAxiosSecure()

    const handleDeleteItem=(item)=>{
       
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then(async(result) => {
  if (result.isConfirmed) {
    const res=await axiosSecure.delete(`/menu/${item}`)
    console.log(res.data) 
if(res.data.deletedCount>0){
Swal.fire({
  position: "top-end",
  icon: "success",
  title: `${item.name} has been deleted successfully`,
  showConfirmButton: false,
  timer: 1500
});
}
    
  }
});
}
    const handleUpdateItem=(item)=>{
console.log('this is update item',item)
    }
    return (
        <div>
            <section>
                <SectionTitle  subHeading="Hurry Up " heading=" Manage Items"></SectionTitle>
            </section>
            <div>
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
     {
menu.map((item,index)=> <tr key={item._id}>
        <th>
        {index +1}
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
        <td>{item.name}</td>
        <td>${item.price}</td>
        <td>
           <Link to={`/dashboard/updateItem/${item._id}`}>
            <button onClick={()=>handleUpdateItem(item._id)}
            className="btn text-2xl btn-ghost btn-xs"><FaEdit /></button>
           </Link>
        </td>
        <td>
         <button onClick={()=>handleDeleteItem(item._id)}
            className="btn text-2xl btn-ghost btn-xs"><FaRegTrashAlt /></button>
        </td>
      </tr> )
     }
      </tbody>

  </table>
</div>
            </div>
        </div>
    );
};

export default ManageItems;