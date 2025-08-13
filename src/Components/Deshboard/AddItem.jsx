import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import SectionTitle from "../Pages/SectionTitle";
import { useForm } from "react-hook-form"


const AddItem = () => {
const axiosPublic=useAxiosPublic()
const axiosSecure=useAxiosSecure()
const image_hosting_key="0b78de90253620b2ab5045330009a458"
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`



     const { register, reset, handleSubmit } = useForm()
  const onSubmit =async (data) =>{
     console.log(data)
     const imageFile={image:data.image[0]}
     const res=await axiosPublic.post(image_hosting_api,imageFile,{
        headers:{
            'content-type':'multipart/form-data'
        }
     })
     if(res.data.success){
        //send the data to server side
        const menuItems={
            name:data.name,
            category:data.category,
            
            price:parseFloat(data.price),
            recipe:data.recipe,
            image:res.data.data.display_url
        }
        const menuRes=await axiosSecure.post('/menu',menuItems)
    //    console.log( 'With image url', menuRes.data)
       if(menuRes.data.insertedId){
        reset()
     Swal.fire({
  position: "top-end",
  icon: "success",
  title: `${data.name}Your Food menu uploaded successfully`,
  showConfirmButton: false,
  timer: 1500
});
   
       }
     }
    //  console.log(res.data)
    }
    return (
        <div>
            <section>
                <SectionTitle heading="add an item" subHeading="what's new"></SectionTitle>
            </section>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className='md:my-6 md:mx-10'>
    <input {...register("name")} type="text" placeholder="Recipe name" className="input w-full" />
    </div>
   <div className='md:flex gap-5 md:mx-10'>
       <select {...register("category")}
       defaultValue="Select a category" className="select w-full my-6 select-info">
  <option disabled={true}>Selete a category</option>
  <option value='salad'>salad</option>
  <option value='popular'>popular</option>
  <option value='dessert'>dessert</option>
  <option value='pizza'>pizza</option>
  <option value='soup'>soup</option>
  <option value='offered'>offered</option>
  <option value='drinks'>drinks</option>
</select>
    <div className=' md:w-full my-6'>
    <input {...register("price")} type="text" placeholder="Price" className="input w-full" />
    </div>
   </div>
  <div className='md:mx-10 '>
     <textarea {...register("recipe")} className="textarea w-full" placeholder="Recipe Details"></textarea>
  </div>
  <div className='md:mx-10 my-4 '>
    <input {...register("image", { required: true })} type="file" className="file-input" />
    {/* <input {...register("image")}  type="file" className="file-input" /> */}
  </div >
    
     <button className='btn btn-accent my-3 md:mx-10 '>Add Items</button>
    </form>
        </div>
    );
};

export default AddItem;