import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { MdDeleteForever } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";
const AllUser = () => {
    const axiosSecure=useAxiosSecure()
    const { refetch,data:user=[]}=useQuery({
        queryKey:['user'],
        queryFn:async()=>{
            const res=await axiosSecure.get("/user",)
            return res.data
            
        }
    })

        //  {
        //         headers:{
        //             Authorization:`Bearer ${localStorage.getItem('access-token')}`
        //         }
        //     }

    const handleMakeAdmin=users=>{
         axiosSecure.patch(`/user/admin/${users._id}`)
         .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount>0){
                refetch()
                Swal.fire({
  position: "top-end",
  icon: "success",
  title: `${users.name} is an Admin Now`,
  showConfirmButton: false,
  timer: 1500
});
            }
         })

    }
     const handleDeleteUser=(user)=>{
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
  
    axiosSecure.delete(`/user/${user._id}`)
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
        <div >
           <div className=' flex justify-evenly'>
            <h1 className='text-2xl'>All Users</h1> 
           <h1 className='text-2xl'>Total Users{user.length}</h1> 
           </div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
   {
    user.map((users,index)=>    <tr key={users._id}>
        <th>{index +1}</th>
        <td>{users.name}</td>
        <td>{users.email}</td>
        <td>
           {users.role==='admin'?'Admin': <button onClick={()=>handleMakeAdmin(users)}
            className="btn text-orange-400 text-2xl bg-black btn-xs"><FaUsers /></button>}
        </td>
        <td>
            <button onClick={()=>handleDeleteUser(users)}
             className="btn text-orange-400 text-2xl bg-black  btn-xs"><MdDeleteForever /></button>
        </td>
      </tr>)
   }
    
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUser;